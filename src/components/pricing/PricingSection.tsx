
import { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const tiers = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for getting started with data visualization.',
      features: [
        'Upload up to 3 files per month',
        'Basic chart types (Bar, Pie, Line)',
        'Simple AI-generated insights',
        'Export as PNG'
      ],
      limitations: [
        'Limited to 500KB file size',
        'Limited AI processing credits',
        'No custom branding',
        'Community support only'
      ],
      ctaText: 'Get Started',
      ctaLink: '/upload',
      featured: false
    },
    {
      name: 'Pro',
      price: { monthly: 29, annual: 290 },
      description: 'For professionals who need advanced data storytelling.',
      features: [
        'Unlimited file uploads',
        'All chart types including advanced',
        'Full AI analysis and narratives',
        'Unlimited AI processing credits',
        'Export as PNG, PDF, and PPT',
        'Custom branding',
        'Priority email support',
        'API access for your own integrations'
      ],
      ctaText: 'Try Pro Free',
      ctaLink: '/upload',
      featured: true,
      badge: 'Recommended'
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your data storytelling needs.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full flex items-center">
              <button
                className={`px-6 py-2 rounded-full transition-all ${!isAnnual ? 'bg-white shadow' : ''}`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full transition-all ${isAnnual ? 'bg-white shadow' : ''}`}
                onClick={() => setIsAnnual(true)}
              >
                Annual <span className="text-storysheets-indigo text-xs font-semibold">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <div key={index} className={`premium-pricing-card ${tier.featured ? 'featured' : ''}`}>
              {tier.badge && (
                <span className="premium-badge popular absolute top-6 right-6">
                  {tier.badge}
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${isAnnual ? tier.price.annual : tier.price.monthly}</span>
                  <span className="text-gray-500 ml-2">{tier.price.monthly === 0 ? 'forever' : isAnnual ? '/year' : '/month'}</span>
                </div>
                <p className="text-gray-600 mt-2">{tier.description}</p>
              </div>
              
              <hr className="my-6 border-gray-100" />
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-storysheets-teal mr-3 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
                
                {tier.limitations && tier.limitations.map((limitation, i) => (
                  <li key={`limit-${i}`} className="flex items-start text-gray-500">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Limitation</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className={`w-full ${tier.featured ? 'gradient-button' : ''}`}
                variant={tier.featured ? 'default' : 'outline'}
              >
                <Link to={tier.ctaLink}>{tier.ctaText}</Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-6 rounded-xl max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Need a custom solution?</h3>
            <p className="text-gray-600 mb-4">Reach out to discuss custom requirements for your specific needs.</p>
            <Button asChild variant="outline">
              <Link to="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
