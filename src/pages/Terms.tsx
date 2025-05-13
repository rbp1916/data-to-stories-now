
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container py-24 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p>
              Welcome to StorySheets. By accessing or using our service, you agree to be bound by these Terms of Service.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">1. Use of Service</h2>
            <p>
              StorySheets provides a data visualization and narrative generation service. You may use our service to upload, process, and visualize your data, and to generate narratives based on your data.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">2. User Content</h2>
            <p>
              You retain all rights to the data you upload to StorySheets. We do not claim ownership of your data. By uploading data, you grant us a license to process and use your data for the purpose of providing our service to you.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">3. Privacy</h2>
            <p>
              We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy for information about how we collect, use, and disclose information about you.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">4. Limitations</h2>
            <p>
              StorySheets is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our service will be uninterrupted, timely, secure, or error-free.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will provide notice of significant changes by posting the updated terms on our website.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">6. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at support@storysheets.com.
            </p>
            
            <p className="mt-6 text-sm text-gray-500">
              Last updated: May 13, 2025
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
