import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import clientA from "@/images/download.png";
import clientB from "@/images/258ad022-6ecb-4715-9a45-4516a489a83a.jpg";
import clientC from "@/images/Picture1.png";
import clientD from "@/images/IMG_0777.jpg";
import clientE from "@/images/e4166970-390a-422d-a108-0f07aeb38c8d.jpg";
import clientF from "@/images/448b33da-a8c0-42ae-a3ff-c43b3536e530.jpg";

const clients = [
  { name: "Vertex Mobility", logo: clientA },
  { name: "Skyline Capital", logo: clientB },
  { name: "Northwave Media", logo: clientC },
  { name: "Helix Health", logo: clientD },
  { name: "Eclipse Energy", logo: clientE },
  { name: "Circuit Studios", logo: clientF },
];

const marqueeAnimation = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 28,
      ease: "linear",
    },
  },
};

const ClientsSection = () => {
  return (
    <section id="clients" className="relative py-20 md:py-28 overflow-hidden bg-white text-foreground">
      <div className="absolute inset-y-0 left-0 w-24 pointer-events-none bg-gradient-to-r from-white via-white/70 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 pointer-events-none bg-gradient-to-l from-white via-white/70 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--gold)_/_0.3)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
            <Sparkles className="h-4 w-4 text-gold" />
            Trusted by teams
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-[hsl(var(--gold)_/_0.4)] via-[hsl(var(--gold)_/_0.1)] to-transparent" />
        </motion.div>

        <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--gold)_/_0.18)] bg-white/70 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.25)]">
          <motion.div
            variants={marqueeAnimation}
            animate="animate"
            className="flex gap-12 py-12 px-8"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-24 w-48 items-center justify-center rounded-2xl bg-white shadow-sm border border-[hsl(var(--gold)_/_0.18)]"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-16 max-w-[170px] object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
