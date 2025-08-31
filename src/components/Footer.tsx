import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Srinivas N</h3>
            <p className="text-primary-foreground/80">Digital Marketing Professional</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://linkedin.com/in/srinivas-n-66977932/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:srinu.liferocks@gmail.com" 
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                Email
              </a>
              <a 
                href="tel:+919036162339" 
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                Phone
              </a>
            </div>
            
            <p className="text-sm text-primary-foreground/70 flex items-center">
              © {currentYear} Srinivas N. Made with <Heart className="h-3 w-3 mx-1 inline" /> All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
