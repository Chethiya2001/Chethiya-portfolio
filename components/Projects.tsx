
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-block px-4 py-1.5 mb-4 border border-blue-500/30 bg-blue-500/10 rounded-full">
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">SELECTED WORKS</h2>
            <p className="text-gray-400 max-w-lg">
              A collection of projects spanning from complex enterprise systems 
              to beautiful user-centric mobile applications.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-8xl font-black text-gray-900 leading-none select-none">01</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden rounded-[2rem] mb-6 border border-gray-800 group-hover:border-blue-500/30 transition-colors">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-[1.5s] group-hover:scale-110"
                />
                
                {/* Overlay with tech tags */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-blue-600/20 backdrop-blur-md rounded-full text-[10px] uppercase font-bold text-blue-400 border border-blue-500/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 line-clamp-2 max-w-md text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Animated Arrow Button */}
                <div className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center bg-gray-900 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-500 ease-out">
                  <svg 
                    className="w-6 h-6 text-gray-400 group-hover:text-black transform transition-all duration-300 group-hover:scale-110" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Expansion Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-6 sm:p-12">
          <div 
            className="absolute inset-0 bg-gray-950/90 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl bg-gray-900 border border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-500 max-h-full flex flex-col">
            {/* Header / Close Button */}
            <div className="absolute top-6 right-6 z-20">
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-12 h-12 bg-gray-950 border border-gray-800 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto flex-1 custom-scrollbar">
              <div className="aspect-[21/9] w-full relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-3 mb-4">
                     <span className="w-10 h-[2px] bg-blue-500"></span>
                     <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em]">
                       {selectedProject.category} Specialist
                     </span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="p-10 md:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  <div className="lg:col-span-2 space-y-12">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6 flex items-center gap-3">
                         THE CHALLENGE
                      </h4>
                      <p className="text-gray-300 text-xl leading-relaxed font-medium">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.features && (
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-8 flex items-center gap-3">
                           CORE CAPABILITIES
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {selectedProject.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-5 p-6 bg-gray-950/50 rounded-3xl border border-gray-800 group hover:border-blue-500/30 transition-all duration-300">
                              <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] shrink-0"></div>
                              <span className="text-gray-400 text-sm font-semibold leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-12">
                    <div className="bg-gray-950/30 p-8 rounded-[2rem] border border-gray-800">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6">TECHNOLOGIES</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="px-4 py-2 bg-gray-900 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        className="flex items-center justify-between w-full p-6 bg-white text-black font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all group shadow-xl"
                      >
                        VIEW CODEBASE
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                      
                      {selectedProject.demoLink && (
                        <a 
                          href={selectedProject.demoLink} 
                          target="_blank" 
                          className="flex items-center justify-between w-full p-6 border-2 border-gray-800 text-white font-black rounded-2xl hover:border-blue-500 hover:bg-blue-500/5 transition-all group"
                        >
                          LIVE PREVIEW
                          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                    
                    <div className="p-6 rounded-2xl border border-dashed border-gray-800 text-center">
                      <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Project ID: {selectedProject.id}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4b5563;
        }
      `}} />
    </section>
  );
};

export default Projects;
