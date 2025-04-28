"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import { Button } from "../ui/button";
import { TextAnimate } from "../magicui/text-animate";
export default function Resume() {
  const scrollToNextSection = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
   

      <div className="container relative z-20 mx-auto flex flex-1 flex-col px-4">
        <div className="flex flex-1 flex-col justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-6 text-center"
          >
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Analyze your research ideas <br />
              <span className="text-white/90">and identify gaps in seconds</span>
            </h1>

            <p className="max-w-2xl text-white/80 md:text-lg">
            <TextAnimate animation="blurInUp" by="character" once>
              Our AI analyzes your documents and extracts key insights to help you identify gaps and save valuable time.
              </TextAnimate>
            </p>

            <div className="flex w-full max-w-md flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <Button
                  asChild
                  variant="primary"
                  className="font-semibold"
                >
                <Link href="/chat">Try our research agent</Link>
              </Button>
            </div>

          
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToNextSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 1.5 },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 transition-colors hover:text-white/90"
        >
         
        </motion.button>
      </div>
    </section>
  );
}
