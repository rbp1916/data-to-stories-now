
import { Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const Testimonial = ({ content, author, role, company, rating }: TestimonialProps) => {
  return (
    <div className="premium-testimonial">
      <div className="flex mb-3">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-storysheets-gold' : 'text-gray-200'}`} 
            fill={i < rating ? 'currentColor' : 'none'} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6">"{content}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold text-lg">
          {author[0]}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </div>
      <div className="absolute top-4 right-4 opacity-10 w-20 h-20">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-storysheets-indigo">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      content: "StorySheets completely transformed how I present data to my clients. The AI-generated narratives help me explain complex trends in simple terms.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechInsights",
      rating: 5
    },
    {
      content: "I'm not a data scientist, but StorySheets makes me look like one! The automatic chart selection is spot on and saves me hours of work.",
      author: "Michael Chen",
      role: "Business Analyst",
      company: "Global Solutions",
      rating: 5
    },
    {
      content: "Our quarterly reports used to take days to create. With StorySheets, I can upload the data and get professional visualizations in minutes.",
      author: "Emily Rodriguez",
      role: "Financial Advisor",
      company: "Wealth Partners",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-premium-gradient">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Users Love StorySheets</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who are transforming their data into compelling stories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="floating-effect" style={{animationDelay: `${index * 0.2}s`}}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
