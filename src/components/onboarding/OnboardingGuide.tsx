
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, BarChart, MessageSquare, X } from 'lucide-react';

const steps = [
  {
    title: 'Upload Your Data',
    description: 'Start by uploading your CSV or Excel file with at least two numeric columns.',
    icon: <Upload className="h-8 w-8 text-storysheets-indigo" />,
  },
  {
    title: 'Visualize Your Data',
    description: 'StorySheets automatically recommends the best chart for your data. You can customize it too.',
    icon: <BarChart className="h-8 w-8 text-storysheets-teal" />,
  },
  {
    title: 'Tell Your Data Story',
    description: 'Generate an AI-powered narrative that explains the key insights from your data.',
    icon: <MessageSquare className="h-8 w-8 text-storysheets-gold" />,
  },
];

const OnboardingGuide: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Check if the user has seen the onboarding guide
    const hasSeenOnboarding = localStorage.getItem('storysheets-onboarding-seen');
    
    if (!hasSeenOnboarding) {
      // Show the onboarding guide after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('storysheets-onboarding-seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <Card className="max-w-md w-full bg-white rounded-xl shadow-xl animate-fade-in">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Welcome to StorySheets</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleClose}
              className="h-8 w-8 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="py-4">
            <div className="flex justify-center mb-6">
              {steps[currentStep].icon}
            </div>
            
            <h4 className="text-lg font-medium text-center mb-2">
              {steps[currentStep].title}
            </h4>
            
            <p className="text-gray-600 text-center mb-6">
              {steps[currentStep].description}
            </p>
            
            <div className="flex justify-center mb-4">
              {steps.map((_, index) => (
                <div 
                  key={index}
                  className={`h-2 w-10 rounded mx-1 ${
                    index === currentStep ? 'bg-storysheets-indigo' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={handleBack} 
              disabled={currentStep === 0}
              className="border-gray-300"
            >
              Back
            </Button>
            
            <Button 
              className="gradient-button"
              onClick={handleNext}
            >
              {currentStep < steps.length - 1 ? 'Next' : 'Get Started'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingGuide;
