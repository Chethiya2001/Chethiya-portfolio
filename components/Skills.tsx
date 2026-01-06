
import React, { useState, useEffect, useRef } from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; level: number } | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseMove = (data: any) => {
    if (data && data.activePayload && data.activePayload.length > 0) {
      setHoveredSkill({
        name: data.activePayload[0].payload.name,
        level: data.activePayload[0].payload.level
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section id="skills" ref={sectionRef} className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-20 right-[-5%] text-[20rem] font-black text-white/5 select-none pointer-events-none uppercase">
        Skills
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            Technical <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            With <span className="text-white font-bold">over 3+ years of professional development</span>, I've mastered the art 
            of building scalable backends and fluid, pixel-perfect frontends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {['Frontend', 'Backend', 'Mobile', 'Languages'].map((cat) => (
                <div key={cat} className="group">
                  <h4 className="text-blue-500 font-black mb-6 uppercase text-sm tracking-[0.3em] flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-blue-500"></span>
                    {cat}
                  </h4>
                  <div className="space-y-6">
                    {SKILLS.filter(s => s.category === cat).map((skill, index) => (
                      <div 
                        key={skill.name} 
                        className={`relative transition-all duration-300 ${hoveredSkill?.name === skill.name ? 'scale-[1.02] translate-x-2' : ''}`}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className={`font-bold tracking-tight uppercase text-sm transition-colors ${hoveredSkill?.name === skill.name ? 'text-blue-400' : 'text-white'}`}>
                            {skill.name}
                          </span>
                          <span className={`text-xs font-mono transition-colors ${hoveredSkill?.name === skill.name ? 'text-blue-400' : 'text-gray-500'}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-[1500ms] ease-out ${hoveredSkill?.name === skill.name ? 'from-blue-400 to-indigo-300' : ''}`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-10 border-t border-gray-900">
              <div className="flex flex-wrap gap-4">
                {['Agile', 'DevOps', 'CI/CD', 'Azure', 'Docker', 'Firebase', 'Git', 'UI/UX Design'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gray-900 border border-gray-800 text-gray-400 text-xs font-bold rounded-xl hover:border-blue-500 hover:text-white transition-all cursor-default uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-gray-900/40 rounded-[2rem] p-4 border border-gray-800 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Interactive Proficiency Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className={`text-center transition-all duration-500 ${hoveredSkill ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}>
                  <span className="block text-6xl font-black text-blue-500 leading-none">{hoveredSkill?.level}%</span>
                  <span className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em]">{hoveredSkill?.name}</span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height="100%">
                <RadarChart 
                  cx="50%" 
                  cy="50%" 
                  outerRadius="75%" 
                  data={SKILLS}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <PolarGrid stroke="#1f2937" />
                  <PolarAngleAxis 
                    dataKey="name" 
                    tick={{ fill: '#6b7280', fontSize: 10, fontWeight: 'bold' }} 
                  />
                  <Radar
                    name="Proficiency"
                    dataKey="level"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={hoveredSkill ? 0.3 : 0.5}
                    animationDuration={2000}
                    activeDot={{ r: 8, fill: '#60a5fa', stroke: '#fff', strokeWidth: 2 }}
                  />
                  <Tooltip 
                    content={() => null} // We use custom display logic above
                  />
                </RadarChart>
              </ResponsiveContainer>
              
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className={`text-[10px] uppercase font-black tracking-[0.4em] transition-all duration-300 ${hoveredSkill ? 'text-blue-500 opacity-100' : 'text-gray-500'}`}>
                  {hoveredSkill ? 'Direct Proficiency Insight' : 'Multi-disciplinary Matrix'}
                </p>
              </div>
            </div>
            
            {/* Experience Card Overlay */}
            <div className={`absolute -bottom-10 -right-6 md:-right-10 bg-blue-600 p-8 rounded-3xl shadow-2xl transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} cursor-default hover:-translate-y-2`}>
              <span className="block text-4xl font-black text-white leading-none">3+</span>
              <span className="text-blue-100 text-xs font-bold uppercase tracking-widest leading-none">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
