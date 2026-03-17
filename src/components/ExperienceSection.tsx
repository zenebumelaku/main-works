import { motion } from "framer-motion";

const timeline = [
  { year: "2024", title: "Started Programming Journey", desc: "Began learning programming fundamentals and problem solving." },
  { year: "2024", title: "Data Structures & Algorithms", desc: "Built strong logical thinking through practicing DSA concepts." },
  { year: "2024", title: "Backend Development", desc: "Learned Python, Java (OOP), and SQL for backend systems." },
  { year: "2025", title: "Full Stack Development", desc: "Worked on real-world projects using React and Django." },
  { year: "2026", title: "Expanding Skills", desc: "Currently learning mobile development and improving full-stack expertise." },
];

const ExperienceSection = () => (
  <section id="experience" className="relative z-10 py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono tracking-wider text-sm mb-2">Journey</p>
        <h2 className="text-3xl md:text-4xl font-bold">My experience</h2>
      </motion.div>

      <div className="max-w-2xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary font-mono text-xs font-bold shrink-0">
                  {t.year.slice(-2)}
                </div>
              </div>
              <div className="pb-2">
                <span className="text-primary font-mono text-sm">{t.year}</span>
                <h3 className="font-semibold text-lg">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
