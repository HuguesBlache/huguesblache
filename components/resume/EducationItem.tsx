// src/components/resume/EducationItem.tsx
import { motion } from 'framer-motion';
import { EducationItem as EducationItemType } from '@/components/types/resumeTypes';

interface EducationItemProps {
  item: EducationItemType;
}

const EducationItem = ({ item }: EducationItemProps) => {
  return (
    <motion.div 
      className="mb-6 rounded-lg border border-white/10 p-4"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-lg font-medium text-white">{item.degree}</h3>
      <p className="text-gray-300">{item.institution}</p>
      <p className="text-sm text-gray-400">{item.period}</p>
      <p className="mt-2 text-gray-300">{item.description}</p>
    </motion.div>
  );
};

export default EducationItem;
