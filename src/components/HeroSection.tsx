import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/images/IMG_0272.jpg";

const heroStats = [
  { value: "120+", label: "Launches + shows" },
  { value: "6 countries", label: "Delivered experiences" },
  { value: "4.9/5", label: "Partner rating" },
];

const capabilities = [
  "Branding & creative",
  "Event solutions",
  "Audio / video",
  "Digital launches",
  "Experience strategy",
];

const headlineWords = "Creativity sails through every project—".split(" ");
const accentLine = "we steer ideas into experiences.";
const headingVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
const wordVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)", scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { type: "spring" as const, stiffness: 240, damping: 26 },
  },
};
const contentVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};
const pillContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.4 },
  },
};
const pillVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Layered background with full-bleed image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Stage production backdrop"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-charcoal/80 to-background" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(var(--gold) / 0.25), transparent 30%)," +
            "radial-gradient(circle at 80% 10%, hsl(var(--electric-blue) / 0.18), transparent 28%)," +
            "radial-gradient(circle at 60% 80%, hsl(var(--gold) / 0.15), transparent 25%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, hsl(var(--gold) / 0.3) 1px, transparent 1px)," +
            "linear-gradient(0deg, hsl(var(--gold) / 0.15) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Narrative */}
          <div className="lg:col-span-12 space-y-8 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full"
            >
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            </motion.div>

            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl xl:text-7xl font-display font-bold leading-[1.05] flex flex-wrap gap-x-3"
            >
              {headlineWords.map((word, wordIndex) => (
                <motion.span
                  key={`${word}-${wordIndex}`}
                  variants={wordVariants}
                  className="inline-block"
                >
                  {word}
                  <span className="inline-block w-2" aria-hidden="true">
                    
                  </span>
                </motion.span>
              ))}
              <motion.span variants={wordVariants} className="inline-block">
                <motion.span
                  className="text-gradient-gold"
                  style={{ backgroundSize: "220% 220%" }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
                >
                  {accentLine}
                </motion.span>
              </motion.span>
            </motion.h1>

            <motion.p
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            >
              Magna blends stagecraft, film, and digital to launch moments people remember. From strategy to on-site ops to
              the final cut, we keep every detail moving in one current.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            />

            <motion.div
              variants={pillContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              {capabilities.map((item) => (
                <motion.span
                  key={item}
                  variants={pillVariants}
                  className="glass rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid sm:grid-cols-3 gap-4 mt-6"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-4 sm:p-5">
                  <div className="text-2xl font-display font-bold text-gradient-gold">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-14 border border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;