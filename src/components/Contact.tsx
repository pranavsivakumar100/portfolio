
import { Mail, MapPin, Phone, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-cyan-400">[</span>
            CONTACT
            <span className="text-cyan-400">]</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            <span className="text-green-400">//</span> Initialize communication protocol
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">ESTABLISH_CONNECTION</h3>
              <p className="text-lg text-gray-300 mb-8">
                Ready to collaborate on cutting-edge projects. Specialized in high-performance 
                applications, scalable architectures, and innovative solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-900 border border-cyan-400 rounded-lg">
                <div className="p-3 bg-cyan-600 rounded-lg">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <p className="font-medium text-white font-mono">EMAIL</p>
                  <p className="text-cyan-400 font-mono">pranav.sivakumar100@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-900 border border-green-400 rounded-lg">
                <div className="p-3 bg-green-600 rounded-lg">
                  <Phone className="text-black" size={24} />
                </div>
                <div>
                  <p className="font-medium text-white font-mono">SECURE_LINE</p>
                  <p className="text-green-400 font-mono">+1 (732) 803-9856</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-900 border border-purple-400 rounded-lg">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <MapPin className="text-black" size={24} />
                </div>
                <div>
                  <p className="font-medium text-white font-mono">LOCATION</p>
                  <p className="text-purple-400 font-mono">New York Metropolitan Area</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="border-gray-700 shadow-lg bg-gray-900">
            <CardHeader>
              <CardTitle className="text-white font-mono">SEND_MESSAGE</CardTitle>
              <CardDescription className="text-gray-300 font-mono">
                Response time: &lt; 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First name" 
                  className="bg-black border-gray-600 text-white placeholder-gray-400 font-mono"
                />
                <Input 
                  placeholder="Last name" 
                  className="bg-black border-gray-600 text-white placeholder-gray-400 font-mono"
                />
              </div>
              <Input 
                placeholder="Email address" 
                type="email" 
                className="bg-black border-gray-600 text-white placeholder-gray-400 font-mono"
              />
              <Input 
                placeholder="Subject" 
                className="bg-black border-gray-600 text-white placeholder-gray-400 font-mono"
              />
              <Textarea 
                placeholder="Your message..." 
                className="min-h-[120px] bg-black border-gray-600 text-white placeholder-gray-400 font-mono"
              />
              <Button className="w-full bg-cyan-600 hover:bg-cyan-500 text-black font-bold font-mono">
                <Terminal className="mr-2" size={16} />
                TRANSMIT_MESSAGE
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
