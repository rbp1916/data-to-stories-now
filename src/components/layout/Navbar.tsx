
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-button-gradient">
              StorySheets
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-storysheets-indigo font-medium transition">
            Home
          </Link>
          <Link to="#how-it-works" className="text-gray-700 hover:text-storysheets-indigo font-medium transition">
            How it Works
          </Link>
          <Link to="#faq" className="text-gray-700 hover:text-storysheets-indigo font-medium transition">
            FAQ
          </Link>
          <Link to="#contact" className="text-gray-700 hover:text-storysheets-indigo font-medium transition">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="gradient-button">
            <Link to="/upload">Upload Your Data</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
