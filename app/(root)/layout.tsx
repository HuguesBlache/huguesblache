"use client";

import Face from "@/components/landing/Face";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // État pour suivre la largeur de l'écran
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si nous sommes sur mobile
  useEffect(() => {
    // Fonction pour vérifier la taille de l'écran
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px est généralement la breakpoint pour tablette/mobile
    };
    
    // Vérifier immédiatement
    checkMobile();
    
    // Ajouter un event listener pour les changements de taille
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Layout mobile: Face en haut, contenu en bas
  if (isMobile) {
    return (
      <div className="flex flex-col w-full">
        {/* Header en haut */}
       
        
        {/* Contenu principal en dessous */}
        <div className="flex w-full flex-col overflow-auto">
          <div className="flex-1 overflow-hidden">
            {children}
          </div>
        </div>
        <div className="w-full">
          <Face />
        </div>
      </div>
    );
  }
  
  // Layout desktop: Face à gauche, contenu à droite
  return (
    <div className="flex size-full">
      {/* Header sur la gauche (1/3 de la page) */}
      <div className="h-full w-1/3">
        <Face />
      </div>
      
      {/* Contenu principal sur la droite (2/3 de la page) */}
      <div className="flex h-full w-2/3 flex-col overflow-auto border-l">
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}