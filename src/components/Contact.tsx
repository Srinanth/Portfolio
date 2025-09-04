import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal, User, Mail, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [connectionStatus, setConnectionStatus] = useState('initializing');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const loadEmailJS = async () => {
      if (!(window as any).emailjs) {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
        script.onload = () => {
          (window as any).emailjs.init("uVipmsyrJxsMnR54J");
        };
        document.body.appendChild(script);
      } else {
        (window as any).emailjs.init("uVipmsyrJxsMnR54J");
      }
    };
    loadEmailJS();
  }, []);

  useEffect(() => {
    const sequence = async () => {
      setConnectionStatus('establishing');
      await new Promise(resolve => setTimeout(resolve, 1500));
      setConnectionStatus('connected');
      await new Promise(resolve => setTimeout(resolve, 1000));
      setConnectionStatus('ready');
    };
    sequence();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!(window as any).emailjs) {
      toast.error("Please Wait!");
      return;
    }

    (window as any).emailjs.sendForm(
      'service_bjv8pao', 
      'template_c9pnto7',     
      e.currentTarget
    ).then(
      () => {
        toast.success("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      },
      (error: any) => {
        console.error(error);
        toast.error("Failed to send message. Please try again later.");
      }
    );
  };

  const getStatusMessage = () => {
    switch (connectionStatus) {
      case 'establishing': return '> establishing secure connection...';
      case 'connected': return '> connected to portfolio server';
      case 'ready': return '> awaiting message...';
      default: return '> initializing connection...';
    }
  };

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }} 
        className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Establish <span className="text-red-500">Connection</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Ready to collaborate? Let's connect and build something amazing together.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          viewport={{ once: true }} 
          className="bg-gray-800 border border-gray-700 rounded-t-lg p-4 font-mono">
            <div className="flex items-center gap-2 text-green-400 mb-2">
              <Terminal size={16} />
              <span className="text-xs">secure-contact@portfolio:~$</span>
            </div>
            <motion.div key={connectionStatus} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-300 text-sm">
              {getStatusMessage()}
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="ml-1">|</motion.span>
            </motion.div>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          viewport={{ once: true }} 
          className="bg-gray-800 border-x border-b border-gray-700 rounded-b-lg p-8">
            {connectionStatus === 'ready' && (
              <motion.form id="contact_form" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.5 }} 
              onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 font-medium"><User size={16} /> Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 font-medium"><Mail size={16} /> Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 font-medium"><MessageSquare size={16} /> Message</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none" placeholder="Enter your message" />
                </div>
                <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors">
                  <Send size={18} /> Send Message
                </motion.button>
              </motion.form>
            )}
            {connectionStatus !== 'ready' && (
              <div className="flex items-center justify-center py-12">
                <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
                className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
