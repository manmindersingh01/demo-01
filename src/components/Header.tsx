import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';

interface HeaderProps {
  onExperienceClick: () => void;
  onSkillsClick: () => void;
  onEducationClick: () => void;
  onCaseStudiesClick: () => void;
  onContactClick: () => void;
}

const Header = ({
  onExperienceClick,
  onSkillsClick,
  onEducationClick,
  onCaseStudiesClick,
  onContactClick
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (callback: () => void) => {
    closeMenu();
    callback();
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
    >
      <div className="section-container py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">Srinivas N</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={onExperienceClick}
            className="text-foreground hover:text-primary transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={onSkillsClick}
            className="text-foreground hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={onEducationClick}
            className="text-foreground hover:text-primary transition-colors"
          >
            Education
          </button>
          <button 
            onClick={onCaseStudiesClick}
            className="text-foreground hover:text-primary transition-colors"
          >
            Case Studies
          </button>
          <button 
            onClick={onContactClick}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
          <ModeToggle />
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="section-container py-4 flex flex-col space-y-4">
            <button 
              onClick={() => handleNavClick(onExperienceClick)}
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Experience
            </button>
            <button 
              onClick={() => handleNavClick(onSkillsClick)}
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Skills
            </button>
            <button 
              onClick={() => handleNavClick(onEducationClick)}
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Education
            </button>
            <button 
              onClick={() => handleNavClick(onCaseStudiesClick)}
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Case Studies
            </button>
            <button 
              onClick={() => handleNavClick(onContactClick)}
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
