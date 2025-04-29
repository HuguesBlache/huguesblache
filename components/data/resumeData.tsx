// src/data/resumeData.ts
import { ExperienceCategory, ExperienceItem, EducationItem, ReviewCardProps } from '@/components/types/resumeTypes';
import { BrainCircuit, SquareCode, Car, BookOpenText, UserRoundPen } from 'lucide-react';

// Définition des catégories
export const categories: ExperienceCategory[] = [
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

export const experienceData: ExperienceItem[] = [
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

// Dummy Education data
export const educationData: EducationItem[] = [
  {
    id: "phd",
    degree: "PhD in Transport Engineering",
    institution: "ENTPE/University of Lyon, France",
    period: "2021-2024",
    description: "Research on intelligent transport systems validation methodologies and safety assessment"
  },
  {
    id: "masters",
    degree: "Master's in Transport Engineering",
    institution: "Polytechnique Montreal, Canada",
    period: "2019-2021",
    description: "Focus on intelligent transport systems and telecommunications"
  },
  {
    id: "bachelors",
    degree: "Bachelor's in Civil Engineering",
    institution: "ENTPE, France",
    period: "2016-2019",
    description: "Specialization in transport infrastructure and planning"
  }
];

// src/components/data/resumeData.tsx

export const reviews: ReviewCardProps[] = [
  {
    img: "https://avatar.vercel.sh/jack",
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    img: "https://avatar.vercel.sh/jill",
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    img: "https://avatar.vercel.sh/john",
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    img: "https://avatar.vercel.sh/jane",
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    img: "https://avatar.vercel.sh/jenny",
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    img: "https://avatar.vercel.sh/james",
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
];
export const slugs = [
  "python",
  "javascript",
  "react",
  "nextjs",
  "typescript",
  "tailwindcss",
  "html5",
  "css3",
  "git",
  "tensorflow",
  "pytorch",
  "r",
  "matlab"
];
