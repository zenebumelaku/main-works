import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import WireframeOrb from "./WireframeOrb";

const roles = ["Full-Stack Developer", "Creative Engineer", "AI Enthusiast"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono tracking-[0.3em] text-sm mb-6 uppercase"
          >
            Welcome to my universe
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm <span className="text-gradient">Alex</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-6 h-10"
          >
            {text}
            <span className="inline-block w-0.5 h-7 bg-primary ml-1 animate-pulse-glow" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed"
          >
            Building immersive digital experiences at the intersection of design, engineering, and artificial intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity glow-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          <WireframeOrb />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
