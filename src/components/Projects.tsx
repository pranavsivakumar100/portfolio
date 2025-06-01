
import { ExternalLink, Github, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "NOTES_FOR_DEVS",
      description: "I couldn't find a note-taking platform tailored for Computer Science students like myself, so I made my own.",
      image: "/bedrock3.png",
      tech: ["REACT", "TYPESCRIPT", "PYTHON", "TAILWIND CSS"],
      github: "https://github.com/pranavsivakumar100/bedrock-notes",
      live: "https://bedrock-notes.netlify.app/",
      status: "DEPLOYED"
    },
    {
      title: "CRYPTO_CROWDFUNDING",
      description: "Built a Web3 crowdfunding platform where people can get funds for projects through Cryptocurrency. It features smart contracts for campaign management and transactions, a React-based user interface for campaign creation and tracking, and seamless Ethereum blockchain integration via Web3.",
      image: "/bedrock3.png",
      tech: ["REACT", "TYPESCRIPT", "PYTHON", "TAILWIND CSS"],
      github: "https://github.com/pranavsivakumar100/bedrock-notes",
      live: "https://bedrock-notes.netlify.app/",
      status: "DEPLOYED"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DEPLOYED": return "text-green-400 border-green-400";
      case "ACTIVE": return "text-cyan-400 border-cyan-400";
      case "BETA": return "text-yellow-400 border-yellow-400";
      default: return "text-gray-400 border-gray-400";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-cyan-400">[</span>
            PROJECTS
            <span className="text-cyan-400">]</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            <span className="text-green-400">//</span> Elite projects showcase
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-900 border-gray-700 hover:border-cyan-400 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className={`absolute top-4 right-4 px-3 py-1 border rounded font-mono text-xs ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white font-mono">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-black border border-gray-600 text-gray-300 rounded font-mono text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors font-mono"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github size={16} className="mr-2" />
                  CODE
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-black font-bold font-mono"
                  onClick={() => window.open(project.live, '_blank')}
                >
                  <Terminal size={16} className="mr-2" />
                  DEPLOY
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
