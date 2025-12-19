import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Corporate", "Wedding", "Concert", "Festival"];

const projects = [
  {
    id: 1,
    title: "Tech Summit 2024",
    client: "Innovation Corp",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: 2,
    title: "Garden Ceremony",
    client: "Sarah & Michael",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: 3,
    title: "Electric Nights Tour",
    client: "Universal Music",
    category: "Concert",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
  },
  {
    id: 4,
    title: "Annual Gala Dinner",
    client: "Luxury Hotels Group",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
  },
  {
    id: 5,
    title: "Summer Music Festival",
    client: "City Events",
    category: "Festival",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
  },
  {
    id: 6,
    title: "Elegant Reception",
    client: "Emma & James",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  },
];

const ProjectGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of our finest work across various event categories.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gold text-primary-foreground glow-gold"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-[hsl(0_0%_100%/0.1)]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-gold text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.client}
                  </p>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 rotate-45">
                  <ArrowUpRight className="w-5 h-5 text-gold" />
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGallery;
