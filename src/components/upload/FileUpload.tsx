
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Upload, FileText } from 'lucide-react';

interface FileUploadProps {
  onFileProcessed: (data: string[][], fileName: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileProcessed }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const file = acceptedFiles[0];
      
      if (file.size > 1024 * 1024) {
        toast.error('File size exceeds the 1MB limit.');
        return;
      }

      try {
        setIsLoading(true);
        
        // Check file extension
        const fileExtension = file.name.split('.').pop()?.toLowerCase();
        if (!['csv', 'xlsx', 'xls'].includes(fileExtension || '')) {
          toast.error('Unsupported file format. Please upload a CSV or Excel file.');
          setIsLoading(false);
          return;
        }
        
        // Read the file
        const text = await readFileAsText(file);
        
        // Parse CSV
        const rows = parseCSV(text);
        
        // Check if there are at least 2 numeric columns
        const hasEnoughNumericColumns = checkNumericColumns(rows);
        if (!hasEnoughNumericColumns) {
          toast.error('The file must contain at least 2 numeric columns.');
          setIsLoading(false);
          return;
        }
        
        // Pass the data to the parent component
        onFileProcessed(rows, file.name);
        
      } catch (error) {
        console.error('Error processing file:', error);
        toast.error('Failed to process the file. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
    [onFileProcessed]
  );

  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const parseCSV = (text: string): string[][] => {
    const rows = text.split('\n');
    return rows.map(row => row.split(',').map(cell => cell.trim()));
  };

  const checkNumericColumns = (rows: string[][]): boolean => {
    if (rows.length < 2) return false;
    
    const header = rows[0];
    const dataRow = rows[1];
    
    let numericColumnCount = 0;
    for (let i = 0; i < dataRow.length; i++) {
      if (!isNaN(parseFloat(dataRow[i]))) {
        numericColumnCount++;
      }
    }
    
    return numericColumnCount >= 2;
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
    },
    maxFiles: 1
  });

  const loadDemoData = () => {
    // Simple sample data
    const sampleData = [
      ['Month', 'Sales', 'Profit'],
      ['Jan', '45000', '15000'],
      ['Feb', '52000', '18000'],
      ['Mar', '49000', '16500'],
      ['Apr', '58000', '19200'],
      ['May', '56000', '18800'],
      ['Jun', '64000', '21000'],
      ['Jul', '67000', '22500'],
      ['Aug', '72000', '24000'],
      ['Sep', '70000', '23500'],
      ['Oct', '78000', '26000'],
      ['Nov', '82000', '27500'],
      ['Dec', '91000', '30000']
    ];
    
    onFileProcessed(sampleData, 'sample_data.csv');
    toast.success('Demo data loaded successfully!');
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-10 text-center transition-all ${
          isDragActive ? 'border-storysheets-purple bg-storysheets-blue/10' : 'border-gray-300 hover:border-storysheets-indigo/50'
        }`}
      >
        <input {...getInputProps()} />
        <Upload 
          className={`w-12 h-12 mx-auto mb-4 ${isDragActive ? 'text-storysheets-purple' : 'text-gray-400'}`} 
        />
        
        <h3 className="text-lg font-medium mb-2">
          {isDragActive ? 'Drop your file here' : 'Drag & drop your file here'}
        </h3>
        
        <p className="text-sm text-gray-500 mb-4">
          Supports CSV or Excel files (max 1MB)
        </p>
        
        <Button 
          className="gradient-button"
          disabled={isLoading}
        >
          <FileText className="w-4 h-4 mr-2" />
          Browse Files
        </Button>
      </div>
      
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500 mb-2">
          Don't have a file ready?
        </p>
        <Button 
          variant="outline"
          onClick={loadDemoData}
          className="border-storysheets-indigo text-storysheets-indigo hover:bg-storysheets-indigo/5"
        >
          Try Sample Data →
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
