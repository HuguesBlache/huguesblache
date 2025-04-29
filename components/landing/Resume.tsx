"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Définition d'interface pour les props du composant TypingEffect
interface TypingEffectProps {
  text: string;
  onComplete?: () => void;
}

// Composant d'animation de typing simple avec types TypeScript
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

export default function Resume() {
  const [typingComplete, setTypingComplete] = useState(false);
  
  // Utiliser sessionStorage pour communiquer entre composants
  useEffect(() => {
    if (typingComplete) {
      // Enregistrer que l'animation est terminée pour que les autres composants le sachent
      window.sessionStorage.setItem('typingAnimationComplete', 'true');
      
      // Déclencher un événement personnalisé que les autres composants peuvent écouter
      const event = new CustomEvent('typingAnimationComplete');
      window.dispatchEvent(event);
    }
  }, [typingComplete]);

  return (
    <section id="hero" className="flex h-screen w-full items-start justify-start mt-16 pl-10">
      <motion.div
        className="flex max-w-4xl flex-col items-start justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="mt-0 text-5xl font-bold leading-tight text-left text-white dark:text-white sm:text-6xl lg:text-7xl">
          <TypingEffect 
            text="Hi! I'm Hugues Blache" 
            onComplete={() => setTypingComplete(true)} 
          />
        </h1>
        
        {typingComplete && (
          <>
            <motion.h2 
              className="mt-5 text-2xl leading-relaxed text-left text-gray-200 dark:text-gray-300 sm:text-2xl lg:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Engineer and Research
            </motion.h2>
            <motion.p 
              className="mt-6 text-lg leading-relaxed text-justify text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Paragraphe justifié pour un alignement uniforme des deux côtés du conteneur. Ce texte occupe la section hero et est aligné à gauche grâce aux classes Tailwind modifiées.
            </motion.p>
          </>
        )}
      </motion.div>
    </section>
  );
}