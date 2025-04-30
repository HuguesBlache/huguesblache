"use client";

import { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';

// Importing components
import TypingEffect from '@/components/resume/TypingEffect';
import CategoryButton from '@/components/resume/CategoryButton';
import EducationItem from '@/components/resume/EducationItem';
import SkillsCloud from '@/components/resume/SkillsCloud';
import { cn } from "@/lib/utils";
// Importing data
import { categories, experienceData, educationData, reviews, slugs } from '@/components/data/resumeData';

// Import proper types
import { ReviewCardProps } from '@/components/types/resumeTypes';

// Define types for components

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  vertical?: boolean;
  repeat?: number;
  pauseOnHover?: boolean;
  duration?: string; // Ajout d'une prop pour contrôler la durée
}

// Import ou définition du composant Marquee
const Marquee = ({ 
  children, 
  className, 
  vertical = false,
  reverse = false,
  repeat = 3, 
  pauseOnHover = true,
  duration = '30s' // Valeur par défaut plus lente (30 secondes)
}: MarqueeProps) => {
  return (
    <div
      style={{ '--duration': duration } as React.CSSProperties}
      className={cn(
        "group relative flex h-full w-full p-100 [--gap:18px] [gap:var(--gap)]",
        {
          "flex-col": vertical,
          "flex-row": !vertical,
        },
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={`item-${index}`}
          className={cn("flex shrink-0 [gap:var(--gap)]", {
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
            "animate-marquee-horizontal flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
          })}
          style={{
            animationDuration: 'var(--duration)'
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
};
const ReviewCard = ({ img, name, username, body, link }: ReviewCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Ouvrir le lien dans un nouvel onglet
    window.open(link, '_blank');
  };

  return (
    <div  className="mx-2 flex h-[20rem] w-[18rem] flex-col rounded-lg border border-gray-100 bg-gray-900 transition-all hover:shadow-xl overflow-hidden cursor-pointer"
     
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Zone principale pour l'image/iframe */}
      <div className="flex-grow w-full relative overflow-hidden">
        {img.endsWith('.jpg') || img.endsWith('.png') || img.endsWith('.jpeg') || img.endsWith('.gif') ? (
          // Si c'est une image
          <img
            src={img}
            alt={`Image de ${name}`}
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          />
        ) : (
          // Si c'est un site web
          <iframe
            src={img}
            className="h-full w-full border-none"
            title={`Site web de ${name}`}
            sandbox="allow-same-origin allow-scripts"
          />
        )}
        
        {/* Superposition avec description au survol */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ease-in">
            <div className="text-white text-center">
              <p className="text-sm italic mb-2">@{username}</p>
              <p className="text-sm line-clamp-4 overflow-hidden">{body}</p>
              <button className="mt-2 text-blue-400 hover:text-blue-300 font-medium">
                See for more detailes
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Barre de nom en bas toujours visible */}
      
    </div>
  );
};
// Using the proper ReviewCardProps interface

export default function Resume() {
  const [typingComplete, setTypingComplete] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Use sessionStorage to communicate between components
  useEffect(() => {
    if (typingComplete) {
      // Record that the animation is complete for other components to know
      window.sessionStorage.setItem('typingAnimationComplete', 'true');
      
      // Trigger a custom event that other components can listen for
      const event = new CustomEvent('typingAnimationComplete');
      window.dispatchEvent(event);
    }
  }, [typingComplete]);

  // Define project rows for the marquee
  const firstRow = reviews.slice(0, Math.ceil(reviews.length ));


  return (
    <section id="hero" className="flex min-h-screen w-full flex-col items-start justify-start mt-16 px-4 md:px-10">
      <motion.div
        className="flex max-w-4xl flex-col items-start justify-center w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="mt-0 text-4xl md:text-5xl font-bold leading-tight text-left text-white dark:text-white sm:text-6xl lg:text-7xl">
          <TypingEffect 
            text="Hi! 👋 I'm Hugues"
            onComplete={() => setTypingComplete(true)}
          />
        </h1>
        
        {typingComplete && (
          <>
            <motion.h2 
              className="mt-8 text-xl md:text-2xl leading-relaxed text-left text-gray-200 dark:text-gray-300 sm:text-3xl lg:text-5xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Engineer and Researcher
            </motion.h2>
            <motion.p 
              className="mt-8 text-base md:text-lg leading-relaxed text-justify text-gray-300 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I am passionate about improving automated systems through innovation and research. With a PhD in traffic and transport engineering and over five years of international experience, I enjoy working at the intersection of data, technology, and AI. Feel free to explore my portfolio! 🚀
            </motion.p>
            
            <motion.h2 
              className="mt-12 mb-6 text-xl md:text-2xl leading-relaxed text-left text-gray-200 dark:text-gray-300 sm:text-2xl lg:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Experience
            </motion.h2>
            
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {categories.map((category) => (
                <CategoryButton 
                  key={category.id} 
                  category={category} 
                  experiences={experienceData} 
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </motion.div>

            <motion.h2 
              className="mt-12 mb-6 text-xl md:text-2xl leading-relaxed text-left text-gray-200 dark:text-gray-300 sm:text-2xl lg:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Education
            </motion.h2>
            
            <motion.div 
              className="w-full mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {educationData.map(item => (
                <EducationItem key={item.id} item={item} />
              ))}
            </motion.div>

            <motion.h2 
              className="mt-12 mb-6 text-xl md:text-2xl leading-relaxed text-left text-gray-200 dark:text-gray-300 sm:text-2xl lg:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Personal Website Projects
            </motion.h2>
            
            <motion.div 
              className="w-full mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
                <Marquee pauseOnHover className="[--duration:5s]">
                  {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                  ))}
                </Marquee>
                

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
              </div>
            </motion.div>

            <motion.h2 
              className="mt-12 mb-6 text-xl md:text-2xl leading-relaxed text-left text-gray-200 dark:text-gray-300 sm:text-2xl lg:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Skills
            </motion.h2>
            
            <motion.div 
              className="w-full mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <SkillsCloud slugs={slugs} />
            </motion.div>

            <motion.h2
  id="contact"
  className="mt-24 mb-6 text-xl md:text-2xl leading-relaxed text-left text-gray-200 dark:text-gray-300 sm:text-2xl lg:text-4xl"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Get in Touch
</motion.h2>

<motion.div
  className="w-full mb-12"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <p className="text-gray-300 mb-4">
    Feel free to reach out via email:
  </p>
  <a
    href="mailto:hugues@email.com"
    className="text-blue-400 hover:text-blue-300 underline"
  >
    hugues@email.com
  </a>
</motion.div>


          </>
        )}
      </motion.div>
    </section>
  );
}