import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/images/IMG_0272 - Copy.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Stage production backdrop"
          className="h-full w-full object-cover brightness-[0.4] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-24 lg:py-32">
        <div className="max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl xl:text-[5.5rem] font-display font-bold leading-[1.1] tracking-tight text-white">
              We are experts in comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                event organizing
              </span>
              , branding, and creative solutions.
            </h1>

            <p className="text-lg md:text-2xl text-zinc-300 max-w-3xl leading-relaxed">
              Web & interactive designs all conveniently offered from one center. We've collaborated with a diverse range of clients to deliver exceptional results.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 pt-8"
            >
              <Button
                variant="gold"
                size="lg"
                asChild
                className="rounded-full px-8 py-6 text-base font-medium transition-transform hover:scale-105 shadow-[0_0_40px_hsl(43_74%_49%/0.2)]"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Start a project
                  <ArrowRight className="h-5 w-5 ml-1" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="rounded-full px-8 py-6 text-base font-medium text-white border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-transform hover:scale-105"
              >
                <a href="#portfolio">
                  <Play className="h-5 w-5 mr-2" />
                  View portfolio
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-7 h-12 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;