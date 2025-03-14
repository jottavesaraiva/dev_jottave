
import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import ComingSoon from '@/components/ComingSoon';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    // Set loaded after a short delay for entrance animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-background/70 overflow-hidden relative">
      <AnimatedBackground />
      
      {/* Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-40 py-6 px-6 md:px-10 transition-all duration-500",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo className={cn(
            "transform transition-all duration-700 opacity-0",
            loaded && "translate-y-0 opacity-100"
          )} />
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 pt-20">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className={cn(
            "opacity-0 transform translate-y-4 transition-all duration-1000 delay-300",
            loaded && "opacity-100 translate-y-0"
          )}>
            <div className="inline-block mb-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs md:text-sm font-medium text-primary">Desenvolvedor de Software</span>
            </div>
          </div>
          
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 opacity-0 transform translate-y-4 transition-all duration-1000 delay-500",
            loaded && "opacity-100 translate-y-0"
          )}>
            <span className="font-modern text-balance">Jottave</span>
          </h1>
          
          <div className={cn(
            "opacity-0 transform translate-y-4 transition-all duration-1000 delay-700",
            loaded && "opacity-100 translate-y-0"
          )}>
            <ComingSoon className="mb-10" />
          </div>
          
          <p className={cn(
            "text-muted-foreground text-lg md:text-xl mb-16 max-w-2xl opacity-0 transform translate-y-4 transition-all duration-1000 delay-900",
            loaded && "opacity-100 translate-y-0"
          )}>
            Criando soluções elegantes para problemas complexos. 
            <span className="block mt-2">
              Aguarde novidades em breve.
            </span>
          </p>
        </div>
        
        <div className={cn(
          "absolute bottom-8 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-1000 delay-1300",
          loaded && "opacity-70 translate-y-0"
        )}>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>
    </div>
  );
};

// Helper function to combine class names
const cn = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ');
};

export default Index;
