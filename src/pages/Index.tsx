import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import OnboardingGuide from '@/components/onboarding/OnboardingGuide';
import { BarChart3, LineChart, PieChart, UploadCloud, MessageSquare, Sparkles, Check, ChevronRight, Paperclip, FileCode, Video, Smile, Meh, Frown, Star } from 'lucide-react';
import FeatureSection from '@/components/features/FeatureSection';
import TestimonialSection from '@/components/testimonials/TestimonialSection';
import PricingSection from '@/components/pricing/PricingSection';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from 'react';

const Index = () => {
  const [selectedAttachmentType, setSelectedAttachmentType] = useState<string | null>(null);
  const [sentiment, setSentiment] = useState<string>("neutral");
  
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
      
      {/* How It Works Section - Enhanced with premium styling */}
      <section id="how-it-works" className="py-16 md:py-28 bg-premium-gradient relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-[10%] w-60 h-60 bg-storysheets-teal/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-[10%] w-80 h-80 bg-storysheets-indigo/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="bg-storysheets-indigo/10 text-storysheets-indigo px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-3">
              Simple 3-Step Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-button-gradient">How StorySheets Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your raw data into compelling visual stories with our intuitive process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-storysheets-indigo via-storysheets-purple to-storysheets-teal"></div>
            
            {/* Step 1 */}
            <div className="premium-card relative hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-storysheets-indigo/10 flex items-center justify-center group-hover:bg-storysheets-indigo/20 transition-all duration-300">
                    <UploadCloud className="w-8 h-8 text-storysheets-indigo" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-storysheets-indigo flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <div className="pt-14 text-center px-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Upload</h3>
                <p className="text-gray-600 mb-6">
                  Simply drag and drop your CSV or Excel file using our intuitive interface. No technical expertise required.
                </p>
                <div className="pb-6">
                  <ul className="space-y-2 text-left">
                    {['CSV files', 'Excel sheets', 'Simple tables'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-storysheets-indigo mr-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="premium-card relative hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-storysheets-teal/10 flex items-center justify-center group-hover:bg-storysheets-teal/20 transition-all duration-300">
                    <BarChart3 className="w-8 h-8 text-storysheets-teal" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-storysheets-teal flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <div className="pt-14 text-center px-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Visualize</h3>
                <p className="text-gray-600 mb-6">
                  Our AI selects the optimal chart type based on your data structure and helps create stunning visualizations.
                </p>
                <div className="pb-6">
                  <ul className="space-y-2 text-left">
                    {['Smart chart selection', 'Interactive graphs', 'Customizable styles'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-storysheets-teal mr-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="premium-card relative hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-storysheets-gold/10 flex items-center justify-center group-hover:bg-storysheets-gold/20 transition-all duration-300">
                    <MessageSquare className="w-8 h-8 text-storysheets-gold" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-storysheets-gold flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <div className="pt-14 text-center px-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Generate Story</h3>
                <p className="text-gray-600 mb-6">
                  Our AI analyzes trends and patterns in your data to craft compelling narratives that explain key insights.
                </p>
                <div className="pb-6">
                  <ul className="space-y-2 text-left">
                    {['AI-powered analysis', 'Key insights extraction', 'Professional narratives'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-storysheets-gold mr-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Button asChild size="lg" className="gradient-button py-6 px-8 rounded-xl text-base">
              <Link to="/upload">
                Get Started Now <Sparkles className="w-5 h-5 ml-2" />
              </Link>
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
      
      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-16 md:py-24 px-4 relative">
        {/* Enhanced background with gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50/70 to-purple-50/60 z-0">
          <div className="absolute inset-0 premium-pattern opacity-30"></div>
        </div>
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-storysheets-indigo to-storysheets-purple">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
          
          <Card className="max-w-2xl mx-auto premium-card shadow-2xl border border-gray-200/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      placeholder="Your name"
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-storysheets-indigo/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      placeholder="your.email@example.com"
                      className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-storysheets-indigo/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Share your thoughts, questions, or feedback..."
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-storysheets-indigo/50"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">How satisfied are you with StorySheets?</Label>
                  <div className="flex justify-center items-center gap-8 p-2">
                    <div className="flex flex-col items-center gap-1">
                      <button 
                        type="button"
                        onClick={() => setSentiment("dissatisfied")}
                        className={`p-3 rounded-full transition-all ${sentiment === "dissatisfied" ? "bg-red-100 text-red-500 scale-110" : "text-gray-400 hover:text-red-400 hover:bg-red-50"}`}
                      >
                        <Frown className="w-8 h-8" />
                      </button>
                      <span className="text-xs text-gray-500">Dissatisfied</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <button 
                        type="button"
                        onClick={() => setSentiment("neutral")}
                        className={`p-3 rounded-full transition-all ${sentiment === "neutral" ? "bg-yellow-100 text-yellow-500 scale-110" : "text-gray-400 hover:text-yellow-400 hover:bg-yellow-50"}`}
                      >
                        <Meh className="w-8 h-8" />
                      </button>
                      <span className="text-xs text-gray-500">Neutral</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <button 
                        type="button"
                        onClick={() => setSentiment("satisfied")}
                        className={`p-3 rounded-full transition-all ${sentiment === "satisfied" ? "bg-green-100 text-green-500 scale-110" : "text-gray-400 hover:text-green-400 hover:bg-green-50"}`}
                      >
                        <Smile className="w-8 h-8" />
                      </button>
                      <span className="text-xs text-gray-500">Satisfied</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <Label className="text-sm font-medium text-gray-700">Add an attachment (optional)</Label>
                  <div className="flex flex-wrap justify-center gap-3 p-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setSelectedAttachmentType("file")}
                          className={`flex gap-2 ${selectedAttachmentType === "file" ? "border-storysheets-indigo/50 bg-blue-50" : ""}`}
                        >
                          <Paperclip className="w-4 h-4" />
                          File
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogTitle>Upload a file</DialogTitle>
                        <div className="py-4">
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer hover:border-storysheets-indigo/70 transition-all">
                            <Paperclip className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                            <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-400 mt-1">Max file size: 10MB</p>
                            <input type="file" className="hidden" />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setSelectedAttachmentType("code")}
                          className={`flex gap-2 ${selectedAttachmentType === "code" ? "border-storysheets-indigo/50 bg-blue-50" : ""}`}
                        >
                          <FileCode className="w-4 h-4" />
                          Code
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogTitle>Add code snippet</DialogTitle>
                        <div className="py-4">
                          <Textarea 
                            placeholder="Paste your code here..." 
                            className="font-mono text-sm"
                            rows={10}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setSelectedAttachmentType("video")}
                          className={`flex gap-2 ${selectedAttachmentType === "video" ? "border-storysheets-indigo/50 bg-blue-50" : ""}`}
                        >
                          <Video className="w-4 h-4" />
                          Screen recording
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogTitle>Add screen recording</DialogTitle>
                        <div className="py-4">
                          <div className="bg-gray-100 rounded-lg p-4 text-center">
                            <AspectRatio ratio={16/9} className="bg-gray-200 rounded-lg mb-3">
                              <div className="flex items-center justify-center h-full">
                                <Video className="w-10 h-10 text-gray-400" />
                              </div>
                            </AspectRatio>
                            <Button className="bg-red-500 hover:bg-red-600">Start Recording</Button>
                            <p className="text-xs text-gray-500 mt-2">Recording will start in your browser tab</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  {selectedAttachmentType && (
                    <p className="text-xs text-center text-storysheets-indigo">
                      Click the button again to edit your {selectedAttachmentType} attachment
                    </p>
                  )}
                </div>
                
                <Button className="w-full py-6 rounded-xl gradient-button group transition-all duration-300 hover:shadow-lg hover:shadow-storysheets-indigo/20">
                  <span className="text-base font-medium">Send Message</span>
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
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
