import type { Metadata } from "next";
import { IBM_Plex_Sans, Oswald } from "next/font/google";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

export const metadata: Metadata = {
  title: "ResearchAgent",
  description: "Assistant d'analyse et d'exploration de contenus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${ibmPlex.className} ${oswald.variable} flex min-h-dvh w-full flex-col antialiased`}
      >
        <main className="flex flex-1 overflow-hidden">{children}</main>
      </body>
    </html>
  );
}