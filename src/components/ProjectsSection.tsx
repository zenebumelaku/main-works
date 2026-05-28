import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    letter: "Z",
    title: "Zewg — Student Opportunity Platform",
    desc: "A mobile application that helps students discover and access opportunities such as scholarships, internships, jobs, and events — all in one place.",
    tags: ["Flutter", "Mobile", "Dart"],
    cat: "Mobile",
    role: "Mobile Developer",
    github: "https://github.com/Belaw19/Zewg",
    demo: "#",
  },
  {
    letter: "S",
    title: "Smart Campus",
    desc: "A smart campus management platform designed to streamline university operations including student services, resource management, and campus navigation.",
    tags: ["React", "TypeScript", "Tailwind"],
    cat: "Full-Stack",
    role: "Developer",
    github: "https://github.com/zenebumelaku/smart-campus",
    demo: "#",
  },
  {
    letter: "B",
    title: "Biometric Attendance System",
    desc: "A smart attendance system using facial recognition to eliminate proxy attendance. Features AI-powered recognition, real-time dashboard, automated reports, and role-based authentication.",
    tags: ["React", "Django", "OpenCV", "Tailwind"],
    cat: "Full-Stack",
    role: "UI/UX Designer + Contributor",
    github: "https://github.com/zenebumelaku",
    demo: "#",
  },
  {
    letter: "T",
    title: "Tutor Agency Platform",
    desc: "A full-stack platform for managing tutoring services, users, and sessions. Includes admin dashboard, user authentication, session management, and backend API integration.",
    tags: ["React", "TypeScript", "Django", "REST API", "SQL"],
    cat: "Full-Stack",
    role: "Full-Stack Developer",
    github: "https://github.com/zenebumelaku",
    demo: "#",
  },
  {
    letter: "D",
    title: "DSA Repository",
    desc: "Collection of solved problems and algorithm implementations in C++. Covers problem solving, algorithm practice, and competitive programming concepts.",
    tags: ["C++", "Algorithms", "Data Structures"],
    cat: "Other",
    role: "Author",
    github: "https://github.com/zenebumelaku",
    demo: "#",
  },
];

const filters = ["All", "Full-Stack", "Mobile", "Other"];

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
              <p className="text-muted-foreground text-sm mb-2 leading-relaxed">{p.desc}</p>
              <p className="text-xs text-primary font-mono mb-4">Role: {p.role}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm">
                  <Github className="w-4 h-4" /> Code
                </a>
                {p.demo !== "#" && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
