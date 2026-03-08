import { motion } from "framer-motion";
import { Code2, Lightbulb, Palette, Brain } from "lucide-react";

const cards = [
  { icon: Code2, title: "Engineering", desc: "Building scalable, high-performance applications with modern architectures." },
  { icon: Lightbulb, title: "Problem Solving", desc: "Breaking down complex challenges into elegant, efficient solutions." },
  { icon: Palette, title: "Design", desc: "Crafting pixel-perfect interfaces with attention to every detail." },
  { icon: Brain, title: "AI / ML", desc: "Exploring the frontiers of machine learning and intelligent systems." },
];

const AboutSection = () => (
  <section id="about" className="relative z-10 py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono tracking-wider text-sm mb-2">About</p>
        <h2 className="text-3xl md:text-4xl font-bold">Crafting the future</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
          I'm a passionate developer with expertise in full-stack development, creative engineering, and AI.
          With years of experience building products used by thousands, I thrive at the intersection of technology and design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
          >
            <c.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
