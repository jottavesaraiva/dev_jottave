
import React, { useEffect, useRef } from 'react';
import { Code, Database, Server, Laptop, Cpu, Monitor, Wifi } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the types of tech icons we can display
const techIcons = [
  { icon: Code, size: 24 },
  { icon: Database, size: 20 },
  { icon: Server, size: 22 },
  { icon: Laptop, size: 26 },
  { icon: Cpu, size: 18 },
  { icon: Monitor, size: 24 },
  { icon: Wifi, size: 22 },
];

interface TechIconProps {
  icon: React.ElementType;
  size: number;
  className?: string;
}

// Individual floating tech icon
const TechIcon: React.FC<TechIconProps> = ({ icon: Icon, size, className }) => {
  return (
    <div className={cn("absolute text-primary/60", className)}>
      <Icon size={size} />
    </div>
  );
};

const TechAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create a collection of tech icons at random positions
    const numIcons = 12; // Number of icons to display
    const icons: HTMLDivElement[] = [];
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Clean up any existing icons from previous renders
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    for (let i = 0; i < numIcons; i++) {
      // Pick a random tech icon
      const iconIndex = Math.floor(Math.random() * techIcons.length);
      const { icon: Icon, size } = techIcons[iconIndex];
      
      // Create a div for the icon
      const iconDiv = document.createElement('div');
      iconDiv.className = 'absolute text-primary/40 transition-all duration-[3000ms]';
      container.appendChild(iconDiv);
      
      // Set initial random position
      const x = Math.random() * (containerWidth - size);
      const y = Math.random() * (containerHeight - size);
      
      iconDiv.style.transform = `translate(${x}px, ${y}px)`;
      iconDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Icon({}).props.children}</svg>`;
      
      icons.push(iconDiv);
    }
    
    // Animation loop to move icons around
    const animateIcons = () => {
      icons.forEach((iconDiv) => {
        // Calculate new random position
        const x = Math.random() * (containerWidth - 30);
        const y = Math.random() * (containerHeight - 30);
        
        // Set new position with transition
        iconDiv.style.transform = `translate(${x}px, ${y}px)`;
        
        // Slightly rotate the icon
        const rotation = Math.random() * 40 - 20;
        iconDiv.style.rotate = `${rotation}deg`;
        
        // Randomly change opacity
        iconDiv.style.opacity = (0.3 + Math.random() * 0.5).toString();
      });
    };
    
    // Start the animation and repeat every 5 seconds
    animateIcons();
    const intervalId = setInterval(animateIcons, 5000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default TechAnimation;
