import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  { letter: "N", title: "Neural Canvas", desc: "AI-powered art generation platform using diffusion models and GANs.", tags: ["React", "Python", "TensorFlow", "WebGL"], cat: "AI/ML" },
  { letter: "C", title: "CloudSync", desc: "Real-time collaborative workspace with end-to-end encryption.", tags: ["TypeScript", "WebSocket", "PostgreSQL", "Docker"], cat: "Full-Stack" },
  { letter: "Q", title: "QuantumViz", desc: "3D visualization engine for quantum computing simulations.", tags: ["Three.js", "WebGL", "C++", "WASM"], cat: "WebGL" },
  { letter: "D", title: "DataFlow", desc: "Real-time data pipeline dashboard with predictive analytics.", tags: ["React", "D3.js", "Python", "Kafka"], cat: "Full-Stack" },
  { letter: "E", title: "EchoAI", desc: "Voice-controlled smart home interface with natural language processing.", tags: ["React Native", "Python", "NLP", "IoT"], cat: "AI/ML" },
  { letter: "P", title: "PixelForge", desc: "Browser-based 3D modeling tool with real-time ray tracing.", tags: ["WebGL", "Three.js", "Rust", "WASM"], cat: "WebGL" },
];

const filters = ["All", "Full-Stack", "AI/ML", "WebGL"];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="projects" className="relative z-10 py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono tracking-wider text-sm mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured work</h2>
        </motion.div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xl mb-4">
                {p.letter}
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm">
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
