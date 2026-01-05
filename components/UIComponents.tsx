import React from 'react';
import { Quote, Wrench, Lightbulb, Activity, CheckCircle2 } from 'lucide-react';

// Wrapper for the Red Line Story Flow
export const StorySection = ({ 
  id, 
  number, 
  title, 
  children,
  isLast = false,
  isFirst = false
}: { 
  id: string; 
  number?: number; 
  title?: string; 
  children?: React.ReactNode;
  isLast?: boolean;
  isFirst?: boolean;
}) => (
  <section id={id} className="relative pl-8 md:pl-16 pb-16 scroll-mt-32">
    {/* The Red Line - Continuous Vertical Line */}
    <div 
      className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-red-200" 
      style={{ 
        display: isLast ? 'none' : 'block',
        top: isFirst ? '20px' : '0'
      }}
    />
    {/* Line connection to top if NOT first */}
    {!isFirst && (
      <div className="absolute left-3 md:left-4 top-[-20px] h-[30px] w-0.5 bg-red-200" />
    )}

    {/* Node Marker on the Line */}
    <div className="absolute left-[5px] md:left-[9px] top-1.5 w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-sm z-10 flex items-center justify-center">
       {/* Inner white dot */}
       <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
    </div>

    {/* Section Header */}
    {title && (
      <header className="mb-8">
        <div className="flex flex-col gap-1">
          {number && (
            <span className="font-mono text-red-600 font-bold text-sm tracking-widest uppercase">
              Chapter {number.toString().padStart(2, '0')}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
        </div>
      </header>
    )}

    {/* Content */}
    <div className="text-lg md:text-xl text-slate-700 leading-relaxed font-serif md:font-sans">
      {children}
    </div>
  </section>
);

export const PlumberAnalogy = ({ children }: { children?: React.ReactNode }) => (
  <div className="bg-white border-l-4 border-cyan-500 p-6 my-8 shadow-sm rounded-r-xl border border-slate-100">
    <div className="flex items-center gap-2 mb-3 text-cyan-700 font-bold uppercase tracking-wider text-sm">
      <Wrench className="w-4 h-4" />
      <span>Plumber Analogy</span>
    </div>
    <div className="text-slate-700 italic leading-relaxed">
      {children}
    </div>
  </div>
);

export const CodingWisdom = ({ children }: { children?: React.ReactNode }) => (
  <div className="relative p-8 my-10 bg-slate-100 rounded-xl border border-slate-200/60">
    <Quote className="absolute top-4 left-4 w-8 h-8 text-slate-300" />
    <div className="relative z-10 text-center text-xl md:text-2xl font-serif font-medium text-slate-800 italic">
      "{children}"
    </div>
  </div>
);

export const PracticeBox = ({ items }: { items: string[] }) => (
  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 my-8">
    <div className="flex items-center gap-2 mb-4 text-emerald-800 font-bold uppercase text-sm tracking-wide">
      <Activity className="w-5 h-5" />
      <span>Practice & Action</span>
    </div>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-slate-800">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const PlumberThinking = ({ children }: { children?: React.ReactNode }) => (
  <div className="my-8 pl-4 border-l-2 border-yellow-400 bg-yellow-50/50 p-4 rounded-r-lg">
    <div className="flex items-center gap-2 text-slate-900 font-bold text-lg mb-2">
      <Lightbulb className="w-5 h-5 text-yellow-600" />
      <h3>Plumber Thinking</h3>
    </div>
    <div className="text-slate-700 leading-relaxed">
      {children}
    </div>
  </div>
);