import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-[90vh] bg-primary flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Srinivas N
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Digital Marketing Manager with Experience in B2C and B2B Domains, and evolving AI Driven Marketer
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-primary-foreground border-white/20 hover:bg-white/20"
              onClick={() => window.open('mailto:srinu.liferocks@gmail.com')}
            >
              Contact Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-primary-foreground border-white/20 hover:bg-white/20"
              onClick={() => window.open('https://linkedin.com/in/srinivas-n-66977932/', '_blank')}
            >
              LinkedIn Profile
            </Button>
          </div>
          
          <div className="flex justify-center mt-16">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground animate-bounce"
              onClick={scrollToNextSection}
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
