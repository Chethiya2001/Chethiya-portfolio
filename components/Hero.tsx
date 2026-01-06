
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-indigo-500/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Experience Floating Badge */}
        <div className="absolute -top-12 right-0 md:right-10 lg:right-20 animate-float hidden sm:block">
           <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative z-10 w-20 h-20 bg-gray-900 border border-blue-500/30 rounded-full flex flex-col items-center justify-center backdrop-blur-md">
                 <span className="text-2xl font-black text-white leading-none">3+</span>
                 <span className="text-[8px] font-black text-blue-400 uppercase tracking-tighter">Years Exp.</span>
              </div>
              {/* Rotating border effect */}
              <div className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
           </div>
        </div>

        <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full backdrop-blur-sm transform hover:scale-105 transition-transform cursor-default">
          <span className="text-blue-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></span>
            Professional Software Developer
          </span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none select-none">
          <span className="block transform hover:-translate-y-1 transition-transform duration-300">CRAFTING</span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-gradient-x block transform hover:-translate-y-1 transition-transform duration-300 delay-75">DIGITAL</span>
          <span className="block transform hover:-translate-y-1 transition-transform duration-300 delay-150">MASTERY</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-medium">
          A Full-stack Developer & Creative Designer blending <span className="text-white font-bold tracking-tight">3+ years</span> of technical precision 
          in <span className="text-blue-400 font-bold">.NET, React, & Flutter</span> with visionary design.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#projects"
            className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black font-black rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10">EXPLORE WORKS</span>
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-black z-20">EXPLORE WORKS</span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-5 border-2 border-gray-800 text-white font-black rounded-2xl hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
          >
            LET'S CONNECT
          </a>
        </div>

        {/* Floating Stack Icons - More dynamic */}
        <div className="mt-24 flex flex-wrap justify-center gap-12 opacity-30">
          {['.NET', 'React', 'Flutter', 'Angular', 'Tailwind', 'Typescript'].map((tech, idx) => (
            <div key={tech} className={`animate-bounce`} style={{ animationDuration: `${2 + idx * 0.5}s`, animationDelay: `${idx * 0.2}s` }}>
              <span className="text-xs font-mono font-bold tracking-widest">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;
