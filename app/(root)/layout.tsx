import Face from "@/components/landing/Face";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex size-full">
      {/* Header sur la gauche (1/3 de la page) */}
      <div className="h-full w-1/3 border-r">
        <Face />
      </div>
      
      {/* Contenu principal sur la droite (2/3 de la page) */}
      <div className="flex h-full w-2/3 flex-col overflow-auto">
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}