
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-mono text-cyan-400">
              PRANAV SIVAKUMAR
            </h3>
            <p className="text-gray-400 mb-4 font-mono">
              Elite developer crafting next-generation digital experiences 
              with cutting-edge technology stacks.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/pranavsivakumar100" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pranavsivakumar05/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:pranav.sivakumar100@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400 font-mono">NAVIGATION</h4>
            <ul className="space-y-2 text-gray-400 font-mono">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-green-400 transition-colors">&gt; About</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-green-400 transition-colors">&gt; Projects</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="hover:text-green-400 transition-colors">&gt; Skills</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-green-400 transition-colors">&gt; Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400 font-mono">QUICK_LINKS</h4>
            <ul className="space-y-2 text-gray-400 font-mono">
              <li><a href="https://www.linkedin.com/in/pranavsivakumar05/" className="hover:text-purple-400 transition-colors">&gt; Resume</a></li>
              <li><a href="https://github.com/pranavsivakumar100" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">&gt; GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/pranavsivakumar05/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">&gt; LinkedIn</a></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">&gt; Get In Touch</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 flex items-center justify-center font-mono">
            <Terminal size={16} className="mx-1 text-cyan-400" /> 
            Coded with precision by Pranav Sivakumar
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
