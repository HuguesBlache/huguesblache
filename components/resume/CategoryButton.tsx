/** @jsxImportSource react */
import { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

// Définition des types manquants
export interface ExperienceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company?: string;
  location?: string;
  duration?: string;
  description: string;
  category: string;
  tags?: string[];
}

interface CategoryButtonProps {
  category: ExperienceCategory;
  experiences: ExperienceItem[];
}

// Composant d'expérience simplifié pour éviter l'erreur d'importation
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

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, experiences }) => {
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

export default CategoryButton;