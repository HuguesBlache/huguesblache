"use client";

import { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';

// Importing components
import TypingEffect from '@/components/resume/TypingEffect';
import CategoryButton from '@/components/resume/CategoryButton';
import EducationItem from '@/components/resume/EducationItem';
import SkillsCloud from '@/components/resume/SkillsCloud';

// Importing data
import { categories, experienceData, educationData, reviews, slugs } from '@/components/data/resumeData';

// Import proper types
import { ReviewCardProps } from '@/components/types/resumeTypes';

// Define types for components
interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

// Import or define Marquee component
const Marquee = ({ children, className, reverse = false, pauseOnHover = false }: MarqueeProps) => {
  return (
    <div 
      className={`flex gap-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} ${
        pauseOnHover ? 'hover:pause-animation' : ''
      } ${className || ''}`}
    >
      {children}
    </div>
  );
};

// Using the proper ReviewCardProps interface

const ReviewCard = ({ img, name, username, body }: ReviewCardProps) => {
  return (
    <div className="mx-2 flex w-64 flex-col items-start rounded-lg border border-gray-800 bg-gray-900 p-4 transition-all hover:scale-105">
      <div className="mb-2 flex items-center gap-2">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-700">
          {img && <img src={img} alt={name} className="h-full w-full object-cover" />}
        </div>
        <div>
          <h3 className="font-medium text-white">{name}</h3>
          <p className="text-xs text-gray-400">@{username}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400">{body}</p>
    </div>
  );
};

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
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

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
              Personal Projects
            </motion.h2>
            
            <motion.div 
              className="w-full mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
                <Marquee pauseOnHover className="[--duration:20s]">
                  {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
                  {secondRow.map((review) => (
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
          </>
        )}
      </motion.div>
    </section>
  );
}