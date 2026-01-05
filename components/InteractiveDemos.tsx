import React, { useState } from 'react';
import { Layout, AlignLeft } from 'lucide-react';

export const CodeShapeDemo = () => {
  const [isClean, setIsClean] = useState(false);

  const clutteredCode = `function process($d){if($d['st']=='new'){if($d['q']>0)
{$this->save($d);}else{return false;}}else{
throw new Exception('Err');}return true;}`;

  return (
    <div className="my-8 bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800 ring-1 ring-white/10">
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">visual_cues_demo.php</span>
        </div>
        
        <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
            <button 
                onClick={() => setIsClean(false)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    !isClean 
                    ? 'bg-red-500/10 text-red-400 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
            >
                <AlignLeft size={14} /> Cluttered
            </button>
            <button 
                onClick={() => setIsClean(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    isClean 
                    ? 'bg-emerald-500/10 text-emerald-400 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
            >
                <Layout size={14} /> Structured
            </button>
        </div>
      </div>

      <div className="relative group min-h-[220px] flex flex-col justify-center bg-slate-900">
         <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
            <code className="block transition-all duration-300">
                {isClean ? (
                    <>
                        <span className="text-purple-400">function</span> <span className="text-blue-400">process</span>(<span className="text-yellow-300">array</span> <span className="text-blue-300">$data</span>): <span className="text-yellow-300">bool</span>{"\n"}
                        {"{"}{"\n"}
                        <span className="text-slate-500">    // 1. Validation</span>{"\n"}
                        <span className="text-purple-400">    if</span> (<span className="text-blue-300">$data</span>[<span className="text-green-300">'st'</span>] !== <span className="text-green-300">'new'</span>) {"{"}{"\n"}
                        <span className="text-purple-400">        throw new</span> <span className="text-yellow-300">Exception</span>(<span className="text-green-300">'Err'</span>);{"\n"}
                        {"    }"}{"\n"}
                        {"\n"}
                        <span className="text-slate-500">    // 2. Logic</span>{"\n"}
                        <span className="text-purple-400">    if</span> (<span className="text-blue-300">$data</span>[<span className="text-green-300">'q'</span>] {"<="} <span className="text-orange-400">0</span>) {"{"}{"\n"}
                        <span className="text-purple-400">        return false</span>;{"\n"}
                        {"    }"}{"\n"}
                        {"\n"}
                        <span className="text-cyan-300">    $this</span>{"->"}<span className="text-blue-400">save</span>(<span className="text-blue-300">$data</span>);{"\n"}
                        <span className="text-purple-400">    return true</span>;{"\n"}
                        {"}"}
                    </>
                ) : (
                    <span className="text-slate-400 opacity-90 block max-w-md break-all sm:break-normal">
                        {clutteredCode}
                    </span>
                )}
            </code>
         </pre>
      </div>

      <div className="bg-slate-950 px-6 py-4 border-t border-slate-800">
         <div className="flex items-start gap-4">
            <div className={`mt-0.5 p-1.5 rounded-full shrink-0 ${isClean ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                {isClean ? <Layout size={18} /> : <AlignLeft size={18} />}
            </div>
            <div>
                <h4 className={`text-sm font-bold mb-1 ${isClean ? 'text-emerald-400' : 'text-red-400'}`}>
                    {isClean ? 'Cognitive Load: Low' : 'Cognitive Load: High'}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
                    {isClean 
                        ? "Shape creates anticipation. The whitespace literally gives your brain a break between logical steps." 
                        : "Lack of shape forces 'parser mode'. Your brain must read every character to build the syntax tree."}
                </p>
            </div>
         </div>
      </div>
    </div>
  );
};