
import { ExternalLink, Github, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Pranav's Job Scraper",
      description: "I am currently in the works of a personal job scraper. Everyday, it scrapes the latest job postings from my favorite companies' career pages.",
      image: "/briefcase.png",
      tech: ["REACT", "TYPESCRIPT", "TAILWIND CSS"],
      live: "https://tech-job-scraper.netlify.app/",
      status: "DEPLOYED"
    },
    {
      title: "Bedrock Notes- Made Easy for CS Students",
      description: "I couldn't find a note-taking platform tailored for Computer Science students like myself, so I made my own.",
      image: "/bedrock1.png",
      tech: ["REACT", "TYPESCRIPT", "TAILWIND CSS"],
      github: "https://github.com/pranavsivakumar100/bedrock-notes",
      live: "https://bedrock-notes.netlify.app/",
      status: "DEPLOYED"
    },
    {
      title: "Crypto Crowdfunding Platform",
      description: "Built a Web3 crowdfunding platform where people can get funds for projects through Cryptocurrency via donations. It features smart contracts, a UI for campaign creation and tracking, and Ethereum blockchain integration.",
      image: "/crowdfunding.png",
      tech: ["SOLIDITY", "REACT.JS", "NODE.JS"],
      github: "https://github.com/pranavsivakumar100/Blockchain-Crowdfunding",
      live: "https://blockchain-crowdfunding-platform.netlify.app/",
      status: "DEPLOYED"
    },
    {
      title: "Uber Eats Automation Suite: Account Generation Bot, Order Placing Bot, Balance and Promotion Verifier",
      description: "Automated mass account creation for collecting promotions. I also made an account checkout bot that logs into a generated account with a promo, applies promo to the order total, and then places the order bypassing bot protection. I did this through the use of residential proxies, interacting with Uber API endpoints, and pentesting using Burp.",
      image: "/ubereats.png",
      tech: ["PYTHON", "BASH", "ANDROID/iOS", ""],
      status: "PRIVATE"
    },
    {
      title: "Instacart Account Generation",
      description: "Automated mass account creation for collecting promotions. I built two prototypes- a driver gen and requests gen. One interacts with Uber API endpoints and Next-Captcha Solver. The other protype uses Selenium instead of API requests and a custom captcha solver I implemented using a Convulational Neural Network. Haven't worked on the account checkout bot for this since order placement works manually.",
      image: "/instacart.png",
      tech: ["PYTHON", "BASH", "BURP SUITE"],
      status: "PRIVATE"
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
