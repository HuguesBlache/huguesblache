import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
  return (
    <div className="rounded-lg border border-white/20 p-3 hover:bg-white/10">
      <h3 className="text-lg font-medium">{item.title}</h3>
      {item.company && <p className="text-sm text-gray-400">{item.company}</p>}
      <p className="mt-2 text-sm">{item.description}</p>
    </div>
  );
};

const CategoryButton = ({ category, experiences }: CategoryButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const filteredExperiences = experiences.filter(exp => exp.category === category.id);

  return (
    <div className="mb-5 w-full">
      {/* Bouton de catégorie avec icône */}
      <button
        className="flex w-full items-center justify-between rounded-lg bg-white/1 border border-white p-3 text-left text-white hover:bg-white/20"
        onClick={() => setIsOpen(!isOpen)}
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
      </button>

      {/* Liste des expériences dans cette catégorie */}
      {isOpen && (
        <div className="mt-2 space-y-2">
          <div className="px-3 py-2 text-gray-300">
            <p>{category.description}</p>
          </div>
          {filteredExperiences.map(exp => (
            <ExperienceButton key={exp.id} item={exp} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryButton;