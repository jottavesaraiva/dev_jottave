
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ComingSoonProps {
  className?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ className }) => {
  const [visibleText, setVisibleText] = useState("");
  const fullText = "Disponível em breve";
  const [cursorVisible, setCursorVisible] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (visibleText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setVisibleText(fullText.substring(0, visibleText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setAnimationComplete(true);
    }
  }, [visibleText, fullText]);

  useEffect(() => {
    if (animationComplete) {
      const interval = setInterval(() => {
        setCursorVisible((prev) => !prev);
      }, 700);
      return () => clearInterval(interval);
    }
  }, [animationComplete]);

  return (
    <div className={cn("relative", className)}>
      <h2 className="text-2xl md:text-4xl font-mono font-semibold tracking-wider text-glow">
        {visibleText}
        <span className={cn("inline-block w-2 h-8 bg-primary ml-1", !cursorVisible && "opacity-0")}>
          &nbsp;
        </span>
      </h2>
      <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-75"></div>
    </div>
  );
};

export default ComingSoon;
