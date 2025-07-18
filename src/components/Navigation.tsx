import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'writing', label: 'Writing' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Determine if we're on a blog page (writing detail)
  const isBlogPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/blog/');

  const navLinks = [
    { id: 'home', label: 'Home', to: '/' },
    { id: 'about', label: 'About', to: '/#about' },
    { id: 'work', label: 'Work', to: '/#work' },
    { id: 'writing', label: 'Writing', to: '/#writing' },
    { id: 'contact', label: 'Contact', to: '/#contact' },
  ];

  const handleNav = (id: string) => {
    if (!isBlogPage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-foreground hover:text-primary transition-colors focus-ring rounded-lg px-2 py-1"
          >
            ML
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              isBlogPage ? (
                <Link
                  key={item.id}
                  to={item.to}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary focus-ring rounded-lg px-3 py-2`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary focus-ring rounded-lg px-3 py-2 ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus-ring rounded-lg p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                isBlogPage ? (
                  <Link
                    key={item.id}
                    to={item.to}
                    className={`text-left text-base font-medium transition-colors duration-200 hover:text-primary focus-ring rounded-lg px-3 py-2`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`text-left text-base font-medium transition-colors duration-200 hover:text-primary focus-ring rounded-lg px-3 py-2 ${
                      activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;