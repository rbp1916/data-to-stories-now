
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import OnboardingGuide from '@/components/onboarding/OnboardingGuide';
import { BarChart3, LineChart, PieChart, UploadCloud, MessageSquare, Sparkles, Check, ChevronRight } from 'lucide-react';
import FeatureSection from '@/components/features/FeatureSection';
import TestimonialSection from '@/components/testimonials/TestimonialSection';
import PricingSection from '@/components/pricing/PricingSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium background wrapper for the entire page */}
      <div className="absolute inset-0 premium-hero-bg premium-pattern -z-10 overflow-hidden">
        {/* Animated floating gradient orbs */}
        <div className="absolute top-[5%] left-[15%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] subtle-rotate"></div>
        <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[100px] subtle-rotate" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
        <div className="absolute bottom-[10%] left-[25%] w-[400px] h-[400px] rounded-full bg-teal-400/10 blur-[80px] subtle-rotate" style={{ animationDuration: '30s' }}></div>
      </div>

      <Navbar />
      <OnboardingGuide />
      
      {/* Hero Section with Premium Background */}
      <section className="pt-32 pb-16 md:pb-24 px-4 relative overflow-hidden">
        <div className="container max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-[soft-reveal_1s_ease-out]">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Turn Your <span className="bg-clip-text text-transparent bg-button-gradient">Data</span> into a <span className="bg-clip-text text-transparent bg-button-gradient">Story</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              StorySheets transforms your raw data into beautiful visualizations and compelling narratives in seconds.
            </p>

            {/* CTA with enhanced glow effect */}
            <div className="relative mx-auto w-fit mb-8">
              <div className="absolute inset-0 bg-cta-glow rounded-full pulse-effect"></div>
              <Button asChild className="gradient-button text-lg px-8 py-6 relative z-10 flex items-center gap-2">
                <Link to="/upload">
                  Upload Your Data <Sparkles className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>

            {/* Features Cards with floating effect */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-hover floating-effect premium-blur" style={{animationDelay: "0s"}}>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-storysheets-indigo/10 flex items-center justify-center mb-4">
                    <UploadCloud className="w-6 h-6 text-storysheets-indigo" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Simple Upload</h3>
                  <p className="text-gray-500 text-center">
                    Drag & drop your CSV or Excel files. No data expertise required.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover floating-effect premium-blur" style={{animationDelay: "0.3s"}}>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-storysheets-teal/10 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-storysheets-teal" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Smart Visualization</h3>
                  <p className="text-gray-500 text-center">
                    Automatic chart selection based on your data structure and type.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover floating-effect premium-blur" style={{animationDelay: "0.6s"}}>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-storysheets-gold/10 flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-storysheets-gold" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Narratives</h3>
                  <p className="text-gray-500 text-center">
                    Turn charts into compelling stories with AI-generated insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-storysheets-indigo/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-storysheets-indigo">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload</h3>
              <p className="text-gray-600">
                Upload your CSV or Excel file using our simple drag-and-drop interface.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-storysheets-teal/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-storysheets-teal">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Visualize</h3>
              <p className="text-gray-600">
                StorySheets automatically selects the best chart type for your data.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-storysheets-gold/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-storysheets-gold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Generate Story</h3>
              <p className="text-gray-600">
                Our AI analyzes your data to generate a concise, insightful narrative.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="gradient-button">
              <Link to="/upload">Try It Now <ChevronRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <FeatureSection />
      
      {/* Testimonials Section */}
      <TestimonialSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="premium-card">
              <h3 className="text-xl font-semibold mb-3">What file types are supported?</h3>
              <p className="text-gray-600">
                StorySheets currently supports CSV and Excel (.xls, .xlsx) files with a maximum size of 1MB.
              </p>
            </div>
            
            <div className="premium-card">
              <h3 className="text-xl font-semibold mb-3">How does the chart recommendation work?</h3>
              <p className="text-gray-600">
                Our algorithm analyzes your data structure to recommend the most appropriate chart type. For time series data, we suggest line charts; for category comparisons, bar charts; for parts of a whole, pie charts; and for relationship analysis, scatter plots.
              </p>
            </div>
            
            <div className="premium-card">
              <h3 className="text-xl font-semibold mb-3">Is my data secure?</h3>
              <p className="text-gray-600">
                Yes, your data is processed in your browser and not stored on our servers. We use secure, client-side processing for all data visualization and narrative generation.
              </p>
            </div>
            
            <div className="premium-card">
              <h3 className="text-xl font-semibold mb-3">How is the narrative generated?</h3>
              <p className="text-gray-600">
                Our AI analyzes patterns, trends, and notable data points in your visualization to create a concise, informative story that highlights the key insights from your data.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 bg-premium-gradient">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
          
          <Card className="max-w-md mx-auto premium-card">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-storysheets-indigo focus:ring-storysheets-indigo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-storysheets-indigo focus:ring-storysheets-indigo"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-storysheets-indigo focus:ring-storysheets-indigo"
                  ></textarea>
                </div>
                <Button className="gradient-button w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
