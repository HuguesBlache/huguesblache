// src/components/resume/TypingEffect.tsx
import { useState, useEffect } from 'react';
import { TypingEffectProps } from '../types/resumeTypes';

const TypingEffect = ({ text, onComplete }: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(previous => previous + text[currentIndex]);
        setCurrentIndex(previousIndex => previousIndex + 1);
      }, 100); // vitesse de frappe
      
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && onComplete) {
      // Appeler le callback une fois l'animation terminée
      onComplete();
    }
  }, [currentIndex, text, onComplete]);
  
  return <span>{displayText}</span>;
};

export default TypingEffect;
