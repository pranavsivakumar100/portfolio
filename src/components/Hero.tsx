
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Animated cyber elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rotate-45 animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-green-400 rotate-12 animate-pulse opacity-20"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 border border-red-400 -rotate-12 animate-pulse opacity-25"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Cyber accent */}
          <div className="flex items-center justify-center mb-4">
            <Terminal className="text-cyan-400 mr-2" size={24} />
            <span className="text-cyan-400 font-mono text-sm tracking-wider">SYSTEM_ONLINE</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-mono">
            <span className="text-white">JOHN</span>
            <span className="text-cyan-400 ml-2 animate-pulse">&gt;</span>
            <span className="text-green-400">DEV</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-mono">
            <span className="text-cyan-400">[</span>
            FULL-STACK DEVELOPER
            <span className="text-cyan-400">]</span>
            <br />
            <span className="text-green-400">/</span>
            Architecting digital solutions with cutting-edge tech
            <span className="text-green-400">/</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold px-8 py-3 border border-cyan-400 shadow-lg shadow-cyan-400/25 transition-all duration-300 hover:shadow-cyan-400/50">
              <Code2 className="mr-2" size={20} />
              VIEW_PROJECTS
            </Button>
            <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold px-8 py-3 shadow-lg shadow-green-400/25 transition-all duration-300 hover:shadow-green-400/50">
              CONTACT_ME
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform">
              <Github size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform">
              <Mail size={28} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-cyan-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
