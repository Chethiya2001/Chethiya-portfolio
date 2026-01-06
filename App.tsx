
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  useEffect(() => {
    // Reveal animations on scroll could be added here
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/chethiya' },
    { name: 'GitHub', url: 'https://github.com/Chethiya2001' },
    { name: 'Twitter', url: 'https://twitter.com/chethiya' },
    { name: 'Instagram', url: 'https://instagram.com/chethiya' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-20 border-t border-gray-900 bg-gray-950 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <a href="#" className="text-3xl font-black tracking-tighter text-white mb-4 block">
              CHETHIYA<span className="text-blue-500">.</span>
            </a>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Software Developer & Designer with 3+ years of experience 
              building the future of digital products.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8">
              {socialLinks.map(social => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-xs uppercase font-black tracking-widest"
                >
                  {social.name}
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]">
              © {new Date().getFullYear()} Chethiya Bandara Herath. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
