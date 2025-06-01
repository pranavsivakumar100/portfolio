
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      skills: ["React", "Vue.js", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "WebGL", "Three.js"],
      color: "cyan"
    },
    {
      title: "BACKEND", 
      skills: ["Node.js", "Python", "Go", "Rust", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      color: "green"
    },
    {
      title: "DEVOPS",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins", "Monitoring", "Security"],
      color: "red"
    },
    {
      title: "ADVANCED",
      skills: ["Machine Learning", "WebAssembly", "Blockchain", "GraphQL", "Microservices", "System Design", "Performance", "Security"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "cyan": return "border-cyan-400 text-cyan-400";
      case "green": return "border-green-400 text-green-400";
      case "red": return "border-red-400 text-red-400";
      case "purple": return "border-purple-400 text-purple-400";
      default: return "border-gray-400 text-gray-400";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-cyan-400">&lt;</span>
            TECH_STACK
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            <span className="text-green-400">//</span> Elite technologies for maximum performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className={`text-xl font-bold border-b-2 pb-2 font-mono ${getColorClasses(category.color)}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className={`bg-black border hover:bg-gray-800 transition-colors cursor-default font-mono text-xs ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
