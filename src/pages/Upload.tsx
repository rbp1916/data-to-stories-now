
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
    <div className="flex flex-col min-h-screen bg-premium-gradient">
      <div className="absolute inset-0 premium-hero-bg premium-pattern -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px] subtle-rotate"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-[80px] subtle-rotate" style={{ animationDuration: '25s' }}></div>
      </div>
      
      <Navbar />
      
      <main className="flex-grow container py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-[soft-reveal_1s_ease-out]">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Data into Stories</h1>
            <p className="text-xl text-gray-600">
              Upload your CSV or Excel file to get started with AI-powered visualization.
            </p>
          </div>
          
          <div className="premium-card shadow-xl">
            {uploadedData.length > 0 ? (
              <DataPreview data={uploadedData} onProceed={handleProceed} />
            ) : (
              <FileUpload onFileProcessed={handleFileProcessed} />
            )}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need example data to try it out?</p>
            <button 
              onClick={() => {/* Sample data logic would go here */}} 
              className="text-storysheets-indigo hover:text-storysheets-indigo/80 font-medium"
            >
              Use sample dataset →
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Upload;
