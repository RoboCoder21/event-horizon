import { motion } from "framer-motion";
import { 
  Camera, 
  Music, 
  Sparkles, 
  Users, 
  Video, 
  Mic2,
  Lightbulb,
  Calendar
} from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Full-service event coordination from concept to execution, ensuring every detail is perfect.",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Cinematic coverage with state-of-the-art equipment for lasting memories.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography that captures the essence and emotion of your event.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Custom lighting installations that transform venues into immersive experiences.",
  },
  {
    icon: Music,
    title: "Sound Engineering",
    description: "Crystal-clear audio systems and expert sound management for any venue size.",
  },
  {
    icon: Mic2,
    title: "Live Streaming",
    description: "Professional broadcast quality streaming to reach audiences worldwide.",
  },
  {
    icon: Sparkles,
    title: "Stage Design",
    description: "Stunning stage concepts and fabrication that command attention.",
  },
  {
    icon: Users,
    title: "Artist Management",
    description: "End-to-end talent coordination and hospitality services.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Premium <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From intimate gatherings to large-scale productions, we deliver 
            excellence across every aspect of event creation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-500 group-hover:bg-[hsl(0_0%_100%/0.08)] group-hover:border-gold/30">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:glow-gold transition-all duration-500">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
