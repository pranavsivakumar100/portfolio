
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-mono text-cyan-400">
              JOHN&gt;DEV
            </h3>
            <p className="text-gray-400 mb-4 font-mono">
              Elite full-stack developer crafting next-generation digital experiences 
              with cutting-edge technology stacks.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400 font-mono">NAVIGATION</h4>
            <ul className="space-y-2 text-gray-400 font-mono">
              <li><a href="#about" className="hover:text-green-400 transition-colors">&gt; About</a></li>
              <li><a href="#projects" className="hover:text-green-400 transition-colors">&gt; Projects</a></li>
              <li><a href="#skills" className="hover:text-green-400 transition-colors">&gt; Skills</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">&gt; Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400 font-mono">QUICK_LINKS</h4>
            <ul className="space-y-2 text-gray-400 font-mono">
              <li><a href="#" className="hover:text-purple-400 transition-colors">&gt; Resume</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">&gt; GitHub</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">&gt; LinkedIn</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">&gt; Get In Touch</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center font-mono">
            <Terminal size={16} className="mx-1 text-cyan-400" /> 
            Coded with precision by JOHN&gt;DEV
          </p>
          <p className="text-gray-400 mt-4 md:mt-0 font-mono">
            © 2024 ALL_RIGHTS_RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
