
import Face from "@/components/landing/Face";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex size-full">
      {/* Header sur la gauche (1/3 de la page) */}
      <div className="w-1/3 h-full border-r">
        <Face />
      </div>
      
      {/* Contenu principal sur la droite (2/3 de la page) */}
      <div className="w-2/3 h-full overflow-auto flex flex-col">
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}