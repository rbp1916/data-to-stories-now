
import { BarChart3, MessageSquare, Sparkles, UploadCloud, Download, LineChart } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <UploadCloud className="w-6 h-6 text-white" />,
      color: 'bg-storysheets-indigo',
      title: 'Easy Data Upload',
      description: 'Simply drag and drop your CSV or Excel files. No complicated setup required.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      color: 'bg-storysheets-teal',
      title: 'Smart Chart Selection',
      description: 'Our AI automatically picks the best chart type for your data structure.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      color: 'bg-storysheets-purple',
      title: 'AI-Powered Narratives',
      description: 'Get insightful explanations of your data trends and patterns.'
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      color: 'bg-storysheets-gold',
      title: 'Custom Visualizations',
      description: 'Fine-tune your charts with customizable colors, labels, and highlight points.'
    },
    {
      icon: <Download className="w-6 h-6 text-white" />,
      color: 'bg-blue-500',
      title: 'Multiple Export Options',
      description: 'Download your visualizations and stories in various formats.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      color: 'bg-pink-500',
      title: 'No Expertise Needed',
      description: 'Get professional results without data science or visualization experience.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform raw data into beautiful, insightful stories.
          </p>
        </div>
        
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="premium-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className={`feature-icon-wrapper ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
