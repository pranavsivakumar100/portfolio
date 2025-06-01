
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated full-stack developer with 5+ years of experience building web applications 
              that users love. I specialize in React, Node.js, and modern web technologies, always 
              staying updated with the latest industry trends.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Python</span>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="p-3 bg-blue-500 rounded-lg">
                <Code className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Code</h3>
                <p className="text-gray-600">Writing maintainable, scalable, and efficient code that stands the test of time.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="p-3 bg-purple-500 rounded-lg">
                <Palette className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Focus</h3>
                <p className="text-gray-600">Creating beautiful, intuitive interfaces that provide exceptional user experiences.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="p-3 bg-green-500 rounded-lg">
                <Zap className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600">Optimizing applications for speed, accessibility, and seamless user interactions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
