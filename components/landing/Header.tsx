"use client";

import { useAuth } from "@clerk/nextjs";
import { ChevronDown, LogIn, Menu, Rocket, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "../ui/button";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroBottom - 80);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className={`flex items-center gap-x-4 ${
                !isScrolled ? "text-white" : ""
              }`}
            >
              <Logo className="size-100" />
              <span className="font-oswald font-bold uppercase lg:text-lg">
                Research Agent
              </span>
            </Link>
          </div>

          <div className="pointer-events-none absolute inset-x-0 mx-auto hidden w-full xl:block">
            <nav className="flex justify-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`pointer-events-auto flex items-center px-3 text-sm font-medium transition-colors ${
                    !isScrolled
                      ? "text-white/90 hover:text-white"
                      : "hover:text-secondary-foreground"
                  }`}
                >
                  {item.name}
                  <ChevronDown className="ml-1 size-3" />
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden items-center space-x-4 xl:flex">
            {isSignedIn ? (
              <Button asChild variant="primary">
                <Link href="/chat">
                  <Rocket className="mr-1 size-4" />
                  Free trial
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link href="/sign-in">
                    <LogIn className="mr-1 size-4" />
                    Log in
                  </Link>
                </Button>

                <Button asChild variant="primary" className="font-semibold">
                  <Link href="/sign-up">
                    <Rocket className="mr-1 size-4" />
                    Free trial
                  </Link>
                </Button>
              </>
            )}
          </div>

          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`rounded-md p-2 ${!isScrolled ? "text-white" : ""}`}
            >
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`xl:hidden ${
            isScrolled ? "bg-background" : "bg-black/60 backdrop-blur-sm"
          }`}
        >
          <div className="space-y-1 px-4 pb-3 pt-2 shadow-lg">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`flex items-center rounded-md px-3 py-2 text-base font-medium ${
                  !isScrolled ? "text-white/90 hover:text-white" : ""
                }`}
              >
                {item.name}
                <ChevronDown className="ml-1 size-3" />
              </a>
            ))}
            <div className="mt-4 space-y-2 border-t border-slate-200/10 pt-4">
              {isSignedIn ? (
                <Button asChild variant="primary" className="w-full">
                  <Link href="/chat">
                    <Rocket className="mr-2 size-4" />
                    Free trial
                  </Link>
                </Button>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className={`flex items-center rounded-md px-3 py-2 text-base font-medium ${
                      !isScrolled ? "text-white/90 hover:text-white" : ""
                    }`}
                  >
                    <LogIn className="mr-2 size-4" />
                    Log in
                  </Link>
                  <Button asChild variant="primary" className="w-full font-semibold">
                    <Link href="/sign-up">
                      <Rocket className="mr-2 size-4" />
                      Free trial
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
