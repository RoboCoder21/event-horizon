import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const highlightMoments = [
  "Immersive stages + LED",
  "Live switching + streaming",
  "On-site production pods",
  "Post-event content drops",
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-charcoal/70 to-background" />
      <div className="pointer-events-none absolute inset-0 opacity-20"
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
          {/* Left narrative */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full"
            >
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
                Event x Media studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-display font-bold leading-[1.05]"
            >
              Creativity sails through every project—
              <span className="text-gradient-gold"> we steer ideas into experiences.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
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
            >
              <Button asChild variant="gold" size="xl" className="shadow-[0_20px_60px_hsl(43_74%_49%/0.25)]">
                <a href="#contact" className="flex items-center">
                  Start a project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="glass" size="xl" className="group">
                <a href="#portfolio" className="flex items-center">
                  <Play className="mr-2 h-4 w-4" />
                  Watch the showreel
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              {capabilities.map((item) => (
                <span
                  key={item}
                  className="glass rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </span>
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

          {/* Right visuals */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-strong rounded-3xl overflow-hidden border border-[hsl(var(--glass-border))] shadow-2xl shadow-black/40"
            >
              <div className="relative h-[380px] bg-gradient-to-br from-charcoal via-charcoal-light to-background">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--gold)_/_0.25),transparent_45%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--electric-blue)_/_0.25),transparent_40%)]" />
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "linear-gradient(135deg, transparent 0, transparent 45%, hsl(var(--gold) / 0.35) 50%, transparent 55%, transparent 100%)",
                    backgroundSize: "260px 260px",
                  }}
                />

                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Live direction</p>
                      <h3 className="text-2xl font-display font-semibold">Show control room</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[hsl(var(--gold)_/_0.15)] border border-[hsl(var(--gold)_/_0.35)] flex items-center justify-center">
                      <Play className="h-5 w-5 text-gold" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {highlightMoments.map((item, idx) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[hsl(var(--gold)_/_0.1)] border border-[hsl(var(--gold)_/_0.2)] text-[10px] flex items-center justify-center uppercase tracking-wide text-gold">
                          0{idx + 1}
                        </span>
                        <p className="text-sm text-foreground/90">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="uppercase tracking-[0.2em]">On set / On tour</span>
                    <span className="flex items-center gap-2 text-foreground">
                      Play reel
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute -bottom-10 -left-6 hidden lg:flex"
            >
              <div className="glass rounded-2xl px-4 py-3 shadow-lg shadow-black/30 border border-[hsl(var(--gold)_/_0.25)]">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Featured capability</p>
                <p className="text-sm font-medium text-foreground">Content lab + touring crew, synced in one stack.</p>
              </div>
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
