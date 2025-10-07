
import { Code, Shield, Zap, Terminal } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-cyan-400">&lt;</span>
            ABOUT_ME
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            <span className="text-green-400">//</span> Building the future, one line of code at a time
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed font-mono">
              <span className="text-cyan-400">const</span> <span className="text-white">developer</span> = {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-red-400">name</span>: <span className="text-yellow-400">"Pranav Sivakumar"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-red-400">experience</span>: <span className="text-yellow-400">"5+ years"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-red-400">education</span>: <span className="text-yellow-400">"NJIT"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-red-400">degree</span>: <span className="text-yellow-400">"Computer Science B.S."</span>
              <br />
              &nbsp;&nbsp;<span className="text-red-400">passion</span>: <span className="text-yellow-400">"Cutting-edge tech"</span>
              <br />
              {"}"};
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Developer specializing in modern web architectures, scalable systems, 
              and performance optimization. Always pushing the boundaries of what's possible 
              with technology.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <span className="px-4 py-2 bg-blue-900 text-cyan-400 border border-cyan-400 rounded font-mono text-sm font-bold">Full Stack</span>
              <span className="px-4 py-2 bg-green-900 text-green-400 border border-green-400 rounded font-mono text-sm font-bold">Agentic AI</span>
              <span className="px-4 py-2 bg-purple-900 text-purple-400 border border-purple-400 rounded font-mono text-sm font-bold">Automation</span>
              <span className="px-4 py-2 bg-yellow-900 text-yellow-400 border border-yellow-400 rounded font-mono text-sm font-bold">Pentesting</span>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="flex items-start space-x-4 p-6 bg-black border border-cyan-400 rounded-lg shadow-lg shadow-cyan-400/10">
              <div className="p-3 bg-cyan-600 rounded-lg">
                <Code className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 font-mono">CLEAN_CODE</h3>
                <p className="text-gray-300">Architecting robust, maintainable systems with enterprise-grade standards.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-black border border-green-400 rounded-lg shadow-lg shadow-green-400/10">
              <div className="p-3 bg-green-600 rounded-lg">
                <Shield className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 font-mono">SECURITY_FIRST</h3>
                <p className="text-gray-300">Implementing bulletproof security measures and best practices in every project.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-black border border-red-400 rounded-lg shadow-lg shadow-red-400/10">
              <div className="p-3 bg-red-600 rounded-lg">
                <Zap className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 font-mono">PERFORMANCE</h3>
                <p className="text-gray-300">Optimizing for maximum speed, efficiency, and seamless user experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
