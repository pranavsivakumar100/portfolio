
import { Mail, MapPin, Phone, Terminal, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState, useEffect } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('2ZIiHjv907tiZvogT');
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS is now configured with your credentials
      const isEmailJSConfigured = true;
      
      if (isEmailJSConfigured) {
        // EmailJS method
        const templateParams = {
          from_name: `${data.firstName} ${data.lastName}`,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: 'pranav.sivakumar100@gmail.com',
        };

        await emailjs.send(
          'service_8ncf57q',
          'template_c6x8tr1',
          templateParams
        );
      } else {
        // Fallback: Open default email client
        const subject = encodeURIComponent(data.subject);
        const body = encodeURIComponent(
          `From: ${data.firstName} ${data.lastName} (${data.email})\n\nMessage:\n${data.message}`
        );
        const mailtoUrl = `mailto:pranav.sivakumar100@gmail.com?subject=${subject}&body=${body}`;
        
        window.open(mailtoUrl, '_blank');
      }
      
      setSubmitStatus('success');
      reset(); // Clear the form
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input 
                      {...register("firstName", { required: "First name is required" })}
                      placeholder="First name" 
                      className="bg-black border-gray-600 text-white placeholder-gray-400 font-mono"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1 font-mono">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Input 
                      {...register("lastName", { required: "Last name is required" })}
                      placeholder="Last name" 
                      className="bg-black border-gray-600 text-white placeholder-gray-400 font-mono"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1 font-mono">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <Input 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    placeholder="Email address" 
                    type="email" 
                    className="bg-black border-gray-600 text-white placeholder-gray-400 font-mono"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 font-mono">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Input 
                    {...register("subject", { required: "Subject is required" })}
                    placeholder="Subject" 
                    className="bg-black border-gray-600 text-white placeholder-gray-400 font-mono"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1 font-mono">{errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <Textarea 
                    {...register("message", { required: "Message is required" })}
                    placeholder="Your message..." 
                    className="min-h-[120px] bg-black border-gray-600 text-white placeholder-gray-400 font-mono"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1 font-mono">{errors.message.message}</p>
                  )}
                </div>
                
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-3 bg-green-900 border border-green-400 rounded text-green-400 font-mono">
                    <CheckCircle size={16} />
                    <span>Message transmitted successfully!</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-red-900 border border-red-400 rounded text-red-400 font-mono">
                    <AlertCircle size={16} />
                    <span>Transmission failed. Please try again.</span>
                  </div>
                )}
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-black font-bold font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Terminal className="mr-2" size={16} />
                  {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT_MESSAGE'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
