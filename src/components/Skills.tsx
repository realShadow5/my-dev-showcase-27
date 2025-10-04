import { Code2, Database, Server, Smartphone } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Python", "Express", "Django", "REST APIs"]
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Flutter", "iOS", "Android", "PWA"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Proficient in modern technologies and frameworks for building scalable applications
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-card border border-border rounded-xl p-6 shadow-card transition-smooth hover:shadow-glow hover:scale-105 hover:border-primary/50"
            >
              <skill.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
