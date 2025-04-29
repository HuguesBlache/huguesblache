"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Plus, Minus, ChevronDown, ChevronUp, BrainCircuit ,SquareCode, Car, BookOpenText, UserRoundPen} from 'lucide-react';

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

// Interface pour les éléments d'expérience
interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  standards?: string;
  icon: React.ReactNode;
  category: string;
}

// Interface pour les catégories d'expérience
interface ExperienceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

// Définition des catégories
const categories: ExperienceCategory[] = [
  {
    id: "ai",
    title: "Artificial Intelligence & Development",
    icon: <BrainCircuit size={30} />,
    description: "Projects and experiences related to artificial intelligence, software development and innovative technologies."
  },
  {
    id: "traffic",
    title: "Traffic & Transport Engineering",
    icon: <Car size={30} />,
    description: "Research and development in the field of intelligent transport systems, traffic data analysis and transport optimisation."
  },
  {
    id: "education",
    title: "Education & Leadership",
    icon: <BookOpenText size={24}/>,
    description: "University teaching, mentoring, and leadership experiences in educational and associative contexts."
  }
];

const experienceData: ExperienceItem[] = [
  {
    id: "ministry",
    title: "Traffic/Transport Engineer, Researcher and Analyst - 3 years",
    subtitle: "French Ministry of Ecological Transition and ENTPE, France",
    period: "2021/2024 (3 years)",
    responsibilities: [
      "Led a research project developing an innovative methodology for validating intelligent transport systems, reducing testing time and enhancing efficiency.",
      "Conducted data analysis on large-scale transport datasets to improve safety and efficiency in new transport systems.",
      "Designed decision-support tools for evaluating simulation and field tests in transport safety and efficiency.",
      "Used machine learning and AI methodologies to enhance predictive modeling in transport data analysis."
    ],
    achievements: [
      "Generated 1B+ traffic situations using ontology-based methods, assigning safety indices from drone data and traffic theory, and analysed 100K+ trajectories using fundamental traffic theory.",
      "Applied machine learning (neural networks, predictive AI) to forecast criticality for 500K+ traffic situations and optimized the selection of test scenarios with a novel clustering approach.",
      "Led an international survey to develop a decision-support tool for test selection (AHP) and modelled microscopic traffic to assess transport impacts."
    ],
    standards: "Standard considered: SAE J3016, ISO 26262, SOTIF (ISO/PAS 21448), ISO 15622, ISO 34503, PAS 1880:2020.",
    icon: <img src="/img/ministere-transition-eco.png" alt="Logo Ministère" className="rounded-lg" />,
    category: "traffic"
  },
  {
    id: "polytechnique",
    title: "Traffic/Transport Researcher and Analyst - 2 years",
    subtitle: "Polytechnique Montreal, Department of Civil, Geological and Mining Engineering (CGM), Canada",
    period: "2019/2021 (2 years)",
    responsibilities: [
      "Conducted a research project in collaboration with Ericsson, developing a taxonomy of ITS applications and telecommunication technologies to assess interactions and optimal deployments.",
      "Built a large-scale model of a metropolitan region (470 km²) to simulate and evaluate connected ITS applications.",
      "Collaborated with multidisciplinary teams, including academia and industry partners, to analyze and interpret data for intelligent transport decision-making."
    ],
    achievements: [
      "Created a structured taxonomy linking the performance of 20 telecommunication technologies with the requirements of 60 intelligent transport applications, supporting optimized ITS deployment.",
      "Designed and implemented an automated large-scale traffic simulation, simulating over 100K+ vehicle trajectories to evaluate impacts (safety, efficiency) on infrastructure and support planning and optimization."
    ],
    standards: "Considered technologies and applications standards for C-ITS deployment evaluation.",
    icon: <img src="/img/poly.png"  alt="Logo Polytechnique Montréal" className="size-6" />,
    category: "traffic"
  },
  {
    id: "ccny",
    title: "Traffic/Transport Research Intern - 5 months",
    subtitle: "City College of New York, Department of Civil Engineering, USA",
    period: "2019 (5 months)",
    responsibilities: [
      "Conducted research on graph theory applications in transportation, focusing on network subdivision and modal competition (e.g., taxi, metro, cycling) in Manhattan (59 km²)."
    ],
    achievements: [
      "Contributed to a study on an online platform for trading shares of automated vehicles."
    ],
    standards: "Research aligned with urban mobility and smart transportation studies.",
    icon: <img src="/img/ccny.png" alt="Logo City College of New York"  />,
    category: "traffic"
  },
  {
    id: "spie",
    title: "Civil Engineering Intern - 1 month",
    subtitle: "Spie Batignolles, France",
    period: "2019 (1 month)",
    responsibilities: [
      "Full-time internship as an on-site road construction worker across 4 sites in the Perpignan area, gaining hands-on experience in pipeline installation and road construction alongside a professional team."
    ],
    achievements: [],
    standards: "Standards followed for civil engineering and road construction practices in France.",
    icon: <img src="/img/spi.png" alt="Logo Spie Batignolles"  />,
    category: "traffic"
  },
  {
    id: "ai_project",
    title: "AI & Website Developer (Personal Project) - 3 months",
    subtitle: "France/Australia",
    period: "2025 (3 months)",
    responsibilities: [
      "Developing a conversational agent using a Large Language Model (LLM) architecture and other deep learning methods to enhance operational efficiency.",
      "Exploring applications of AI and mathematical methods in practical scenarios within and beyond the field of transport."
    ],
    achievements: [],
    standards: "Technological development using state-of-the-art deep learning and AI methodologies.",
    icon: <SquareCode size={24}/>,
    category: "ai"
  },
  {
    id: "tutor",
    title: "University Tutor - 4 years",
    subtitle: "Polytechnique Montreal and ENTPE, Canada and France",
    period: "2020/2024 (4 years)",
    responsibilities: [
      "Taught over 50 advanced-level students annually, delivering lectures and practical sessions combining theoretical knowledge and hands-on experience.",
      "Traffic Theory and Engineering: Covered mathematics, planning, and transport impact analysis.",
      "Data Science: Taught large datasets handling and machine learning techniques (clustering, regression).",
      "Intelligent Transport Systems: Analysed the impacts of Cooperative-ITS (C-ITS) on traffic."
    ],
    achievements: [],
    standards: "Education aligned with academic standards in transport engineering and data science.",
    icon: <UserRoundPen size={24}/>,
    category: "education"
  },
  {
    id: "scouts",
    title: "Volunteer Treasurer and Scouts Leader - 3 years",
    subtitle: "Scouts and Guides of France, France",
    period: "2013/2015 - 2022 (3 years)",
    responsibilities: [
      "Planned humanitarian projects in Madagascar and secured over 20K+€ in travel funding.",
      "Supported over 40 young people annually, fostering teamwork, encouraging autonomy, and inspiring leadership."
    ],
    achievements: [],
    standards: "Volunteer leadership and project management within humanitarian and educational frameworks.",
    icon: <img src="/img/scout.png" alt="Logo Scouts et Guides de France" className="h-10 w-10 rounded-lg object-contain" />,

    category: "education"
  }
];

// Composant pour un élément d'expérience avec bouton dépliable
const ExperienceButton = ({ item }: { item: ExperienceItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3 w-full">
      {/* Bouton de titre avec icône */}
      <motion.button
     className="flex w-full items-center justify-between rounded-lg bg-white/5 border border-white/10 p-3 text-left text-white hover:bg-white/30"


        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center text-white">
            {item.icon}
          </div>
          <span className="text-base font-medium">{item.title}</span>
        </div>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </motion.button>

      {/* Contenu détaillé */}
      {isOpen && (
        <motion.div
          className="mt-1 rounded-lg  p-5 text-white border border-white/10 "
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-4">
            <h4 className="text-lg font-medium">{item.subtitle}</h4>
            <p className="text-gray-300">{item.period}</p>
          </div>

          <div className="mb-4">
            <h5 className="mb-2 text-base font-medium text-blue-400">Responsibilities:</h5>
            <ul className="ml-6 list-disc text-gray-300">
              {item.responsibilities.map((resp, index) => (
                <li key={`resp-${index}`} className="mb-1">{resp}</li>
              ))}
            </ul>
          </div>

          {item.achievements.length > 0 && (
            <div className="mb-4">
              <h5 className="mb-2 text-base font-medium text-blue-400">Achievements:</h5>
              <ul className="ml-6 list-disc text-gray-300">
                {item.achievements.map((achievement, index) => (
                  <li key={`ach-${index}`} className="mb-1">{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {item.standards && (
            <div className="mt-4 text-gray-300">
              <p>{item.standards}</p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

// Composant pour une catégorie d'expérience avec bouton dépliable
const CategoryButton = ({ category, experiences }: { category: ExperienceCategory, experiences: ExperienceItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const filteredExperiences = experiences.filter(exp => exp.category === category.id);

  return (
    <div className="mb-5 w-full">
      {/* Bouton de catégorie avec icône */}
      <motion.button
        className="flex w-full items-center justify-between rounded-lg bg-white/1 border border-white p-3 text-left text-white hover:bg-white/20"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center text-white">
            {category.icon}
          </div>
          <div>
            <span className="text-xl font-medium">{category.title}</span>
            <p className="text-sm text-gray-400">{filteredExperiences.length} experience(s)</p>
          </div>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </motion.button>

      {/* Liste des expériences dans cette catégorie */}
      {isOpen && (
        <motion.div
          className="mt-2 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-3 py-2 text-gray-300">
            <p>{category.description}</p>
          </div>
          {filteredExperiences.map(exp => (
            <ExperienceButton key={exp.id} item={exp} />
          ))}
        </motion.div>
      )}
    </div>
  );
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
    <section id="hero" className="flex min-h-screen w-full flex-col items-start justify-start mt-16 px-4 md:px-10">
      <motion.div
        className="flex max-w-4xl flex-col items-start justify-center w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="mt-0 text-4xl md:text-5xl font-bold leading-tight text-left text-white dark:text-white sm:text-6xl lg:text-7xl">
          <TypingEffect 
            text="Hi! 👋 I'm Hugues Blache"
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
                <CategoryButton key={category.id} category={category} experiences={experienceData} />
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
}