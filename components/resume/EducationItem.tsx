import { motion } from 'framer-motion';
import { EducationItem as EducationItemType } from '../types/resumeTypes';
import Image from 'next/image';

interface EducationItemProps {
  item: EducationItemType;
  isFirst?: boolean;  // Ajout de `isFirst` pour savoir si c'est le premier élément
  isLast?: boolean;
}

const EducationItem = ({ item }: EducationItemProps) => {
  return (
    <motion.div 
      className="relative flex gap-6 pb-10"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Timeline + Icon */}
      <div className="flex flex-col items-center">
        {/* Circle */}
        <div className="relative z-10 h-5 w-5 rounded-full bg-white/80 border-2 border-white mt-[175px]" />
        
        {/* Vertical line (only for items that are not the first or last) */}
      <div className="absolute  bottom-5 top-1 left-[9px] h-full w-px bg-white/20 mt-[55px]" /> 
      </div>

      {/* Content */}
      <div className="flex gap-4">
        {/* Image */}
        <div className="relative h-[70px] w-[70px] shrink-0 rounded-md overflow-hidden mt-[150px]">
          <Image
            src={item.iconUrl}
            alt={`${item.institution} logo`}
            fill
            className="object-contain p-1"
          />
        </div>

        {/* Text */}
        <div  className="mt-[120px]">
          <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
          <p className="text-gray-300">{item.institution}</p>
          <p className="text-sm text-gray-400">{item.period}</p>
          <p className="mt-2 text-gray-300">{item.description}</p>
        </div>
      </div>
      
    </motion.div>
     
  );
};

export default EducationItem;
