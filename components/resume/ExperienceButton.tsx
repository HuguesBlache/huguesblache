// src/components/resume/ExperienceButton.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { ExperienceItem } from '@/components/types/resumeTypes';

interface ExperienceButtonProps {
  item: ExperienceItem;
}

const ExperienceButton = ({ item }: ExperienceButtonProps) => {
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
          className="mt-1 rounded-lg p-5 text-white border border-white/10"
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

export default ExperienceButton;