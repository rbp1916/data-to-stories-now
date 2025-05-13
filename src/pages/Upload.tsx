
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FileUpload from '@/components/upload/FileUpload';
import DataPreview from '@/components/upload/DataPreview';

// Define a context to share data between pages
import { DataContext } from '@/context/DataContext';
import { useContext } from 'react';

const Upload = () => {
  const [uploadedData, setUploadedData] = useState<string[][]>([]);
  const [fileName, setFileName] = useState<string>('');
  const navigate = useNavigate();
  const { setData } = useContext(DataContext);
  
  const handleFileProcessed = (data: string[][], name: string) => {
    setUploadedData(data);
    setFileName(name);
  };
  
  const handleProceed = () => {
    // Store data in context for access in the Visualization page
    setData({
      rawData: uploadedData,
      fileName: fileName
    });
    
    // Navigate to visualization page
    navigate('/visualization');
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-hero-gradient">
      <Navbar />
      
      <main className="flex-grow container py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Upload Your Data</h1>
            <p className="text-xl text-gray-600">
              Drag and drop your CSV or Excel file to get started.
            </p>
          </div>
          
          {uploadedData.length > 0 ? (
            <DataPreview data={uploadedData} onProceed={handleProceed} />
          ) : (
            <FileUpload onFileProcessed={handleFileProcessed} />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Upload;
