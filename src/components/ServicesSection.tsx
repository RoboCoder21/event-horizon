import { motion } from "framer-motion";
import {
  CalendarRange,
  Clapperboard,
  Layers,
  Lightbulb,
  Radio,
  Sparkle,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Branding & Creative",
    description: "We specialize in creating captivating experiences that resonate with your audience, ensuring your brand stands out from the crowd.",
    meta: "Branding / Art Direction / Design",
  },
  {
    icon: Layers,
    title: "Web & Interactive",
    description: "Specializing in crafting user-friendly interfaces that seamlessly align with your objectives in the vast digital universe.",
    meta: "Web / App Design / UI/UX",
  },
  {
    icon: Clapperboard,
    title: "Audio & Video",
    description: "Our dedicated team crafts exceptional visual solutions that resonate with your audience on a whole new level.",
    meta: "TVC / Docu / Livestream / Highlight films",
  },
  {
    icon: CalendarRange,
    title: "Event Solution",
    description: "Elevate your event to new heights with us. Our mission is to deliver the best and exceptional results that leave a lasting impact.",
    meta: "Run of Show / Logistics / Stagecraft",
  },
  {
    icon: Sparkle,
    title: "Digital Marketing",
    description: "We are the powerhouse that propels your brand to new heights, resolving the complexities of the digital landscape with our expert strategies.",
    meta: "Social / SEO / Paid Media",
  },
  {
    icon: Radio,
    title: "Communication Services",
    description: "We excel at connecting brands with their audiences through effective strategies and compelling messaging.",
    meta: "PR / Media Relations / Copywriting",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden scroll-mt-28 md:scroll-mt-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal/60 to-background" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 0, transparent 48%, hsl(var(--gold) / 0.25) 50%, transparent 52%, transparent 100%)",
          backgroundSize: "240px 240px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Comprehensive expertise from a <span className="text-gradient-gold">single center.</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer comprehensive event organizing, branding, creative solutions, and web & interactive designs all conveniently offered from one center.
            </p>
     
          </motion.div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group glass rounded-2xl p-6 border border-transparent hover:border-[hsl(var(--gold)_/_0.35)] transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--gold)_/_0.12)] border border-[hsl(var(--gold)_/_0.3)] flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {service.description}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">{service.meta}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
