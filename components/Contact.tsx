
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSent(false);

    // Simulate API call with a small chance of failure to test error handling
    setTimeout(() => {
      const isSuccessful = Math.random() > 0.1; // 90% success rate for simulation

      if (isSuccessful) {
        setIsSubmitting(false);
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setSent(false), 5000);
      } else {
        setIsSubmitting(false);
        setError("Oops! Something went wrong while sending your message. Please try again or email me directly.");
        // Clear error message after 6 seconds
        setTimeout(() => setError(null), 6000);
      }
    }, 1500);
  };

  const inputClasses = "w-full bg-gray-950 border border-gray-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:scale-[1.01] transition-all duration-300 placeholder:text-gray-700 hover:border-gray-700";

  return (
    <section id="contact" className="py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full">
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Get in touch</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
              LET'S START <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 underline decoration-indigo-500/30 underline-offset-8">SOMETHING</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
              Have a revolutionary idea or an enterprise project that needs expert handling? 
              With my <span className="text-white font-bold">3+ years of experience</span>, I'm ready to help you build it.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-black tracking-widest mb-1">Email Me Directly</p>
                  <a href="mailto:chethiyabandaraherath@gmail.com" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                    chethiyabandaraherath@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.493-1.1-1.1s.493-1.1 1.1-1.1 1.1.493 1.1 1.1-.493 1.1-1.1 1.1zm9 6.891h-2v-3.868c0-2.12-2.503-1.957-2.503 0v3.868h-2v-6h2v1.061c.905-1.676 4.503-1.803 4.503 1.446v3.493z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-black tracking-widest mb-1">LinkedIn Profile</p>
                  <a href="https://linkedin.com/in/chethiya" target="_blank" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                    Chethiya Bandara
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-[2.5rem] shadow-2xl space-y-6">
              <div className="space-y-2 group/field">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4 group-focus-within/field:text-blue-500 transition-colors">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={inputClasses}
                />
              </div>
              <div className="space-y-2 group/field">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4 group-focus-within/field:text-blue-500 transition-colors">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={inputClasses}
                />
              </div>
              <div className="space-y-2 group/field">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4 group-focus-within/field:text-blue-500 transition-colors">Your Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`${inputClasses} resize-none`}
                ></textarea>
              </div>

              {/* Error Message Display */}
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center gap-3 text-red-400 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              )}
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-blue-600/20"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : sent ? (
                  "MESSAGE SENT!"
                ) : (
                  <>
                    SEND MESSAGE
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
