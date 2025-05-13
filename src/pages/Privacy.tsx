
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container py-24 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p>
              At StorySheets, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you use our service, including:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>The data you upload for visualization and analysis</li>
              <li>Contact information you provide through our contact form</li>
              <li>Usage information collected through anonymous analytics</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Provide, maintain, and improve our service</li>
              <li>Generate visualizations and narratives based on your uploaded data</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Analyze usage patterns to improve user experience</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">3. Data Security</h2>
            <p>
              Your data is processed in your browser and is not stored on our servers beyond the duration of your session, unless explicitly saved by you. We implement appropriate technical measures to protect your information.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">4. Analytics</h2>
            <p>
              We use Plausible Analytics to collect anonymous usage data. This analytics service does not use cookies and does not collect personal information. The data collected is used solely to improve our service.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">5. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@storysheets.com.
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

export default Privacy;
