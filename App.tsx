import React, { useState, useEffect } from 'react';
import BlogPost from './components/BlogPost';
import { Menu, X, BookOpen, User, Linkedin, ArrowUp } from 'lucide-react';

// Navigation Data
const SECTIONS = [
  { id: "intro", title: "Intro: The Gut Feeling" },
  { id: "why-not-how", title: "1. Why, Not Just How" },
  { id: "feel-the-friction", title: "2. Feel the Friction" },
  { id: "debug-in-head", title: "3. Debug in Your Head" },
  { id: "expect-the-expected", title: "4. Expect the Expected" },
  { id: "see-the-shape", title: "5. See the Shape" },
  { id: "narrate-the-flow", title: "6. Narrate the Flow" },
  { id: "tools-vs-brain", title: "7. Tools vs. Brain" },
  { id: "reflect-to-learn", title: "8. Reflect to Learn" },
  { id: "principles-guides", title: "9. Principles are Guides" },
  { id: "future-context", title: "10. Externalizing Intuition" },
  { id: "conclusion", title: "Conclusion" },
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Robust Scroll Spy & Progress Handler
  useEffect(() => {
    const handleScroll = () => {
      // 1. Update Progress Bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(windowHeight > 0 ? totalScroll / windowHeight : 0);

      // 2. Determine Active Section
      // trigger point is 150px down from the top (clearing the sticky header)
      const spyPoint = window.scrollY + 150;
      
      let current = SECTIONS[0].id;
      
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          // If the top of the section is above the spy point, it's a candidate
          // We want the *last* section that is above the spy point.
          if (el.offsetTop <= spyPoint) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    // Attach listener with passive option for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id); // Instant feedback
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans overflow-x-hidden">
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1.5 bg-red-600 z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }} />

      {/* Navigation - Mobile & Desktop */}
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-red-600 p-2 rounded-lg text-white shadow-sm group-hover:bg-red-700 transition-colors">
            <BookOpen size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-slate-900 font-extrabold text-sm md:text-base leading-tight tracking-tight">The Inner Code Plumber</h1>
            <p className="text-xs text-slate-500 font-medium">Adaptive Systemic Intuition</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-500">
           <a href="https://lnkd.in/er9SJpty" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors flex items-center gap-2">
              <Linkedin size={18} /> Original Post
           </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-slate-700 hover:text-red-600 transition-colors p-1">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Sidebar / Drawer */}
      <aside className={`fixed top-[75px] right-0 h-[calc(100vh-75px)] w-72 bg-white border-l border-slate-200 transform transition-transform duration-300 z-30 overflow-y-auto ${isMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'} lg:translate-x-0 lg:w-72 lg:bg-transparent lg:border-none lg:right-auto lg:left-[max(0px,calc(50%-48rem))] lg:top-24 lg:h-[calc(100vh-6rem)]`}>
        <div className="p-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Table of Contents</h3>
          <ul className="space-y-1 relative border-l border-slate-200 ml-3">
            {SECTIONS.map((section) => (
              <li key={section.id} className="relative pl-4">
                 {/* Active Indicator Dot */}
                {activeSection === section.id && (
                  <div className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 bg-red-600 rounded-full shadow-sm"></div>
                )}
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm w-full text-left py-1.5 transition-colors leading-snug duration-200 ${
                    activeSection === section.id 
                      ? 'text-red-700 font-bold translate-x-1' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Layout */}
      <main className="pt-32 lg:pl-72 lg:pr-6">
        
        {/* Header Hero */}
        <header className="max-w-4xl mx-auto px-6 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-red-600 font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                Senior Engineering Concepts
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                The Inner Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Plumber</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-serif">
                How <span className="text-slate-900 font-semibold decoration-red-300 underline underline-offset-4">Adaptive Systemic Intuition</span> lets you see maintainability before it breaks.
            </p>
            
            {/* Context/Foreword based on LinkedIn Post */}
            <div className="mt-12 bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm relative">
                <div className="absolute -top-3 left-6 bg-slate-100 text-slate-500 border border-slate-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Context</div>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                     <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <User className="text-slate-400 w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-base text-slate-800 mb-3 italic font-serif">
                            "A plumber walks into a basement and knows instantly: something is wrong behind the wall. Not because he can see the leak, but because of a smell, the age of the building, the pipe type... intuition built on patterns."
                        </p>
                        <p className="text-sm text-slate-500 leading-relaxed">
                             This post explores the difference between mere <strong>Programming</strong> (syntax/AI-generated code) and <strong>Software Development</strong> (context/architectural intuition). Why aren't we unemployed yet? Because AI generates code, but it doesn't have the <em>Inner Plumber</em>.
                        </p>
                     </div>
                </div>
            </div>
        </header>

        <BlogPost />

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-slate-200 text-center text-slate-400 text-sm">
            <p>Based on the article by Lars Moelleken.</p>
            <p className="mt-2">Interactive adaptation for senior engineers.</p>
        </footer>
      </main>

      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 bg-slate-900 hover:bg-red-600 text-white p-3 rounded-full shadow-xl transition-all duration-300 z-50 ${scrollProgress > 0.1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        aria-label="Back to Top"
      >
        <ArrowUp size={24} />
      </button>

    </div>
  );
};

export default App;