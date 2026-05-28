import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS / Tailwind", level: 90 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 70 },
  { name: "Java", level: 60 },
  { name: "SQL", level: 70 },
  { name: "C++", level: 50 },
  { name: "Python", level: 50 },
  { name: "Flutter / Dart", level: 60 },
];

const SkillsSection = () => (
  <section id="skills" className="relative z-10 py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono tracking-wider text-sm mb-2">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold">Tech stack</h2>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{s.name}</span>
              <span className="text-sm text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
