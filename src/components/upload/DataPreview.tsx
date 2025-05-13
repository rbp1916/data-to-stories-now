
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight } from 'lucide-react';

interface DataPreviewProps {
  data: string[][];
  onProceed: () => void;
}

const DataPreview: React.FC<DataPreviewProps> = ({ data, onProceed }) => {
  // Show max 10 rows of data for preview
  const previewData = data.slice(0, Math.min(10, data.length));
  const headers = data[0] || [];

  return (
    <div className="w-full animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Data Preview</h3>
        <Button className="gradient-button" onClick={onProceed}>
          Proceed to Visualization
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="border rounded-lg overflow-auto max-h-80 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableHead key={index} className="bg-gray-50 whitespace-nowrap font-medium">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {previewData.slice(1).map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex} className="whitespace-nowrap">
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {data.length > 10 && (
        <p className="text-xs text-gray-500 mt-2">
          Showing 10 of {data.length} rows.
        </p>
      )}
    </div>
  );
};

export default DataPreview;
