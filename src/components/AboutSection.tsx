import { motion } from "framer-motion";
import { Code2, Lightbulb, Palette, Layers } from "lucide-react";

const cards = [
  { icon: Code2, title: "Frontend Development", desc: "Building responsive, interactive, and modern web interfaces using React, Tailwind, and JavaScript." },
  { icon: Palette, title: "UI/UX Design", desc: "Designing clean, visually appealing, and user-focused interfaces with attention to detail." },
  { icon: Lightbulb, title: "Problem Solving", desc: "Strong foundation in data structures and algorithms, improving logical thinking and coding efficiency." },
  { icon: Layers, title: "Full Stack Development", desc: "Experience working with both frontend and backend technologies including Django, APIs, and databases." },
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
        <h2 className="text-3xl md:text-4xl font-bold">Who I am</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
          I am a passionate and growth-driven developer based in Addis Ababa, Ethiopia, focused on building impactful digital solutions. I enjoy combining design and logic to create clean, user-friendly applications while continuously improving my technical and problem-solving skills.
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
