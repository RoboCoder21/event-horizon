import { motion } from "framer-motion";
import { Award, Users, Calendar, Star } from "lucide-react";

const stats = [
  { icon: Calendar, value: "500+", label: "Events Produced" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Industry Awards" },
  { icon: Star, value: "12+", label: "Years of Excellence" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main image */}
              <div className="absolute inset-8 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
                  alt="Event production team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-gold/30 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-gold/30 rounded-br-3xl" />
              
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 glass-strong rounded-2xl p-6"
              >
                <div className="text-3xl font-display font-bold text-gradient-gold">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Where Vision Meets <span className="text-gradient-gold">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              For over a decade, we've been at the forefront of event production 
              in Ethiopia, transforming ordinary gatherings into extraordinary 
              experiences that leave lasting impressions.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of passionate professionals brings together creativity, 
              technical expertise, and meticulous attention to detail. From 
              intimate weddings to large-scale corporate events, we approach 
              every project with the same commitment to excellence.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
