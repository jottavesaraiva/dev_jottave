
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("relative font-bold text-xl md:text-2xl select-none", className)}>
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
        <span className="text-lg md:text-xl mr-1 font-mono">&lt;</span>
        <span className="font-cursive">Jottave</span>
        <span className="text-lg md:text-xl ml-1 font-mono">/&gt;</span>
      </span>
      <span className="absolute top-0.5 left-0.5 text-primary opacity-30 blur-[2px]">
        <span className="text-lg md:text-xl mr-1 font-mono">&lt;</span>
        <span className="font-cursive">Jottave</span>
        <span className="text-lg md:text-xl ml-1 font-mono">/&gt;</span>
      </span>
    </div>
  );
};

export default Logo;
