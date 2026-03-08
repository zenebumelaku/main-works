import { motion } from "framer-motion";

const timeline = [
  { year: "2019", title: "Started Coding", desc: "Fell in love with programming through competitive coding." },
  { year: "2020", title: "First Internship", desc: "Full-stack development at a fast-growing startup." },
  { year: "2021", title: "Hackathon Winner", desc: "Won first place at a national AI hackathon." },
  { year: "2022", title: "Open Source", desc: "Major contributions to React and Three.js ecosystems." },
  { year: "2023", title: "AI Research", desc: "Published paper on neural rendering techniques." },
  { year: "2024", title: "Lead Engineer", desc: "Leading a team building next-gen creative tools." },
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
