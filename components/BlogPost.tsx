import React from 'react';
import { 
  StorySection,
  PlumberAnalogy, 
  CodingWisdom, 
  PracticeBox, 
  PlumberThinking, 
} from './UIComponents';
import { CodeShapeDemo } from './InteractiveDemos';
import { AlertTriangle, RefreshCw, Bot } from 'lucide-react';

const BlogPost: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 pb-24">
      
      {/* Introduction */}
      <StorySection id="intro" title="The Gut Feeling" isFirst={true}>
        <p className="mb-6 text-xl leading-relaxed text-slate-600">
          You open a PHP file. No red flags. No screaming errors. The CI was green. 
          Static analysis reports nothing, <span className="text-cyan-600 font-semibold">“all good.”</span> But something feels off.
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex gap-3 text-slate-700">
            <span className="text-red-500 font-bold">•</span> The methods are over-explained and under-meaningful.
          </li>
          <li className="flex gap-3 text-slate-700">
            <span className="text-red-500 font-bold">•</span> The logic is layered like geological sediment.
          </li>
          <li className="flex gap-3 text-slate-700">
            <span className="text-red-500 font-bold">•</span> The file smells like tech debt, even if the tools won’t say so.
          </li>
        </ul>

        <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8 shadow-sm">
          <p className="text-slate-900 font-medium text-lg">And there it is—that tight feeling in your gut.</p>
          <p className="text-slate-500 mt-2">Not panic. Not certainty. Just a whisper: “This will come back to bite us.”</p>
        </div>

        <p className="mb-4">
          That feeling isn’t mysticism. It’s not arrogance. It’s not just your “senior dev sixth sense.”
          It’s something deeper—something more universal. Your experience is surfacing as <strong className="text-red-600 bg-red-50 px-1 rounded">Adaptive Systemic Intuition</strong>.
        </p>

        <p>
          Just like a seasoned plumber can walk into a building and know, from the creaks and bends of the pipes, 
          that trouble’s coming—even if everything flows for now—your brain is surfacing thousands of hours of coding, 
          debugging, and review into a silent warning.
        </p>
      </StorySection>


      {/* Section 1 */}
      <StorySection id="why-not-how" number={1} title="Code Through the Lens of “Why,” Not Just “How”">
        <p className="mb-4">
          Fresh developers obsess over <em className="font-bold text-slate-900">how</em>: How to write the syntax. How to pass the test.
        </p>
        <p className="mb-4">
          But experienced developers? They ask <em className="text-red-600 font-bold">why</em>.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-red-500">
          <li>Why does this code exist?</li>
          <li>Why is it structured this way?</li>
          <li>Why are we solving this problem now, and what will it look like later?</li>
        </ul>
        <p>
          It’s not about getting the function done. It’s about aligning the code with the context: 
          the business goal, the system constraints, the team’s skill level, the organizational habits.
        </p>

        <PlumberThinking>
          You’ve already internalized this. In your code, structure reflects purpose.
          When you clean up legacy code, you don’t just rewrite—you reflect: 
          “What problem was this solving? Why this shape? Is that still true?”
        </PlumberThinking>

        <PlumberAnalogy>
          <p className="mb-2"><strong className="text-slate-500 uppercase text-xs tracking-wider">Rookie</strong> Checks if the showerhead is clogged.</p>
          <p><strong className="text-cyan-700 uppercase text-xs tracking-wider">Seasoned</strong> Asks: “Is this the only tap with low pressure? What changed recently?” Same situation—completely different insight.</p>
        </PlumberAnalogy>

        <CodingWisdom>
          Simplicity in code isn’t about writing fewer lines; it’s about writing the clearest lines for the specific problem and its environment.
        </CodingWisdom>

        <PracticeBox items={[
          "Ask yourself: Why does this feature even exist?",
          "Review code with this lens: Does this structure still match its purpose?",
          "Refactor not because you can, but because the current shape no longer serves the system’s real needs."
        ]} />
      </StorySection>

      {/* Section 2 */}
      <StorySection id="feel-the-friction" number={2} title="Feel the Friction: Your Body Knows Bad Code">
        <p className="mb-4">
          You don’t have the error, but your body already knows: something’s off.
          A sense of tension. A raised brow. A shift in posture.
        </p>
        <p className="mb-6">
          This isn’t new-age nonsense. It’s <strong className="text-slate-900">embodied cognition</strong>. 
          Your thinking isn’t just in your head—it’s in your body.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="bg-white p-6 rounded-xl text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="block text-3xl mb-3">👋</span>
                <span className="text-sm font-bold text-slate-700">Gesturing</span>
                <span className="block text-xs text-slate-500 mt-1">when explaining bugs</span>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="block text-3xl mb-3">🚶</span>
                <span className="text-sm font-bold text-slate-700">Pacing</span>
                <span className="block text-xs text-slate-500 mt-1">for the right name</span>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="block text-3xl mb-3">✏️</span>
                <span className="text-sm font-bold text-slate-700">Drawing</span>
                <span className="block text-xs text-slate-500 mt-1">to reason architecture</span>
            </div>
        </div>

        <PlumberThinking>
          Your gut? It’s hardware-accelerated static analysis. You pause when nested logic feels brittle—even before tests fail.
        </PlumberThinking>

        <PlumberAnalogy>
          A good plumber doesn’t just look—they listen for vibration, feel for pressure, sense the strain in old joints.
          Code is no different. You don’t just read it—you sense it.
        </PlumberAnalogy>

        <PracticeBox items={[
          "Pay attention to physical signals: tight chest, hesitancy, frustration—these are pattern alerts.",
          "If you can’t name the problem yet, don’t dismiss the feeling. Pause. Map it.",
          "Sketch data flows before implementation. Where the drawing becomes messy, the code will too."
        ]} />
      </StorySection>

      {/* Section 3 */}
      <StorySection id="debug-in-head" number={3} title="Debug in Your Head">
        <div className="flex flex-col md:flex-row gap-6 mb-8 mt-4">
            <div className="flex-1 bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="text-red-700 font-bold mb-3 text-sm uppercase flex items-center gap-2">
                    <AlertTriangle size={16} /> Junior Instinct
                </h4>
                <p className="text-slate-600 text-base">Jump into code. Drop in <code>var_dump()</code>. Sprinkle logs like confetti. Stare at traces.</p>
            </div>
            <div className="flex-1 bg-cyan-50 p-6 rounded-xl border border-cyan-100">
                <h4 className="text-cyan-700 font-bold mb-3 text-sm uppercase">Senior Instinct</h4>
                <p className="text-slate-600 text-base">Pause. Think. Mentally simulate. They don't open the IDE immediately—they open the model in their mind.</p>
            </div>
        </div>

        <p className="mb-4">
            Debugging is about reconciling expectation vs. reality. Tools help, but mental simulation is where the real gap is closed.
        </p>

        <PlumberThinking>
            You don’t guess. You model. When something breaks, your instinct isn’t to “try stuff”—it’s to ask: 
            <span className="text-slate-900 font-bold"> What’s the underlying assumption here?</span>
        </PlumberThinking>

        <CodingWisdom>
            Every bug is a surprise—an error in your mental model. Fixing code is easy. Fixing the model? That’s where real debugging lives.
        </CodingWisdom>

        <PracticeBox items={[
            "When a bug appears, narrate what you expect should happen.",
            "Walk the logic mentally before altering anything.",
            "Ask others: “What do you think is happening, step by step?” Make the model visible."
        ]} />
      </StorySection>

      {/* Section 4 */}
      <StorySection id="expect-the-expected" number={4} title="Expect the Expected">
        <p className="mb-4">
          You see a method named <code>getUserToken()</code>, and your brain assumes:
        </p>
        <ul className="flex flex-wrap gap-2 mb-6">
            <li className="px-3 py-1 bg-slate-200 rounded-full text-xs font-mono text-slate-700 font-bold">No side effects</li>
            <li className="px-3 py-1 bg-slate-200 rounded-full text-xs font-mono text-slate-700 font-bold">Returns string</li>
            <li className="px-3 py-1 bg-slate-200 rounded-full text-xs font-mono text-slate-700 font-bold">Immutable state</li>
        </ul>
        <p className="mb-6">
            When the code breaks that forecast, your cognitive system yells: <span className="text-red-600 font-mono bg-red-50 px-2 py-1 rounded">Prediction error detected.</span>
        </p>

        <div className="my-8 overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700">
                    <tr>
                        <th className="p-4 font-bold">Memory Type</th>
                        <th className="p-4 font-bold hidden md:table-cell">Analogy</th>
                        <th className="p-4 font-bold">Developer Function</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    <tr>
                        <td className="p-4 font-bold text-cyan-600">Working Memory</td>
                        <td className="p-4 text-slate-500 font-mono hidden md:table-cell">RAM / Cache</td>
                        <td className="p-4 text-slate-700">Active reasoning. Limited (~4-7 chunks).</td>
                    </tr>
                    <tr>
                        <td className="p-4 font-bold text-indigo-600">Long-Term Memory</td>
                        <td className="p-4 text-slate-500 font-mono hidden md:table-cell">Database</td>
                        <td className="p-4 text-slate-700">Stores patterns, idioms. Used for prediction.</td>
                    </tr>
                    <tr>
                        <td className="p-4 font-bold text-emerald-600">Procedural Memory</td>
                        <td className="p-4 text-slate-500 font-mono hidden md:table-cell">BIOS</td>
                        <td className="p-4 text-slate-700">Automates navigation & flow state.</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <PlumberAnalogy>
          A plumber sees a pipe coupling slightly misaligned. No leak—yet. But they know: “That’s going to burst under pressure.” Their prediction engine fires before failure.
        </PlumberAnalogy>

        <PracticeBox items={[
            "When writing code, ask: What would another dev reasonably expect this to do?",
            "When reviewing code, note every “surprise.” Why was it surprising?",
            "Before running a method, predict: What will it return? What will it change? Then verify."
        ]} />
      </StorySection>

      {/* Section 5 */}
      <StorySection id="see-the-shape" number={5} title="See the Shape: Visual Cues">
        <p className="mb-4">
            Before your eyes process names or logic, they notice shape.
            Indentation. Whitespace. Block structure. Line rhythm.
        </p>
        <p className="mb-6">
            When code looks chaotic, your brain assumes it is chaotic.
            When it’s cleanly structured? Your mind can glide through it, predict it, trust it.
        </p>

        {/* Interactive Code Shape Demo */}
        <CodeShapeDemo />

        <PlumberThinking>
            You know that white space is a cognitive tool, not wasted real estate.
        </PlumberThinking>

        <CodingWisdom>
            Visually well-structured code isn’t pretty—it’s predictable. And predictable structure reduces mental strain.
        </CodingWisdom>
      </StorySection>

      {/* Section 6 */}
      <StorySection id="narrate-the-flow" number={6} title="Narrate the Flow">
        <p className="mb-4">
            Experienced developers don’t just refactor silently. They narrate.
        </p>
        <div className="space-y-3 border-l-4 border-slate-300 pl-4 italic text-slate-600 bg-slate-50 py-4 pr-4 rounded-r-lg">
            <p>“I’m splitting this out because the logic forks too early.”</p>
            <p>“I renamed this to make its responsibility explicit.”</p>
        </div>
        <p className="mt-4 mb-4">
            They aren’t just explaining code. They’re revealing the <strong className="text-slate-900">mental model</strong> that shaped it.
            Code is communication.
        </p>

        <PlumberThinking>
            You narrate for the future reader—often yourself. Readable code tells a story. It has to be deletable and understandable—or it doesn’t belong.
        </PlumberThinking>

        <PlumberAnalogy>
            A plumber explains a reroute: “We added a shutoff here so you can isolate the leak without cutting the entire house.” The client gets it. The next plumber gets it.
        </PlumberAnalogy>
      </StorySection>

      {/* Section 7 */}
      <StorySection id="tools-vs-brain" number={7} title="Tools vs. Brain">
        <p className="mb-4">
            Linters, static analyzers, AI pair programmers. They’re useful. But don’t confuse assistance with authority.
        </p>
        <p className="text-orange-600 font-bold mb-6">
            Tools report symptoms. It’s your job to diagnose the cause.
        </p>
        
        <div className="bg-white p-6 rounded-lg my-6 shadow-sm border border-slate-200">
            <h4 className="text-slate-900 font-bold mb-4">The PHPStan Trap</h4>
            <div className="font-mono text-sm bg-slate-100 p-3 rounded text-red-600 mb-6 border border-red-100">
                Error: Return type ‘User|null’ might be null here.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h5 className="text-red-600 font-bold text-sm uppercase mb-2">The Reflex Fix</h5>
                    <p className="text-sm text-slate-600">Slap on a null check. Throw an exception. Change hint to <code>?User</code>.</p>
                </div>
                <div>
                    <h5 className="text-emerald-600 font-bold text-sm uppercase mb-2">The Senior Fix</h5>
                    <p className="text-sm text-slate-600">Ask: Was this ever meant to fail silently? Is returning null a design error?</p>
                </div>
            </div>
        </div>

        <PlumberThinking>
            You don’t accept autofixes blindly—you ask, “Would I have made this change? Does this align with the system’s needs?” Your gut is the boss. The tool is the assistant.
        </PlumberThinking>

        <PracticeBox items={[
            "Before running a tool, assess the code yourself. What feels off?",
            "When a tool suggests a change, ask why. Would you make it manually?",
            "Build your own internal checklist. Use tools to confirm—not define—your decisions."
        ]} />
      </StorySection>

      {/* Section 8 */}
      <StorySection id="reflect-to-learn" number={8} title="Reflect to Learn">
        <p className="mb-4">
            Writing code isn’t enough. Fixing bugs isn’t enough. <strong className="text-slate-900">Reflection</strong> is where experience becomes intuition.
        </p>
        <p className="mb-4">
            When something breaks—don’t just patch it. Ask: Why did I expect it to work? What assumption failed?
        </p>

        <PlumberAnalogy>
            The apprentice replaces a faulty valve. The veteran asks: “Why does this kind of valve always fail in this setup? What can I do to make the next failure impossible?”
        </PlumberAnalogy>

        <CodingWisdom>
            Experience becomes expertise when filtered through reflection. Without that, you’re just aging, not learning.
        </CodingWisdom>

        <PracticeBox items={[
            "After every tricky bug, write down the mistake in your mental model, not just the fix.",
            "Use postmortems as a thinking tool, not a blame ritual.",
            "When reading legacy code, ask: Why did they do it this way? What were the constraints then?"
        ]} />
      </StorySection>

      {/* Section 9 */}
      <StorySection id="principles-guides" number={9} title="Principles Are Guides, Not Gospel">
        <p className="mb-4">
            SRP. DRY. KISS. YAGNI. SOLID. They’re powerful. They’re useful.
            But here’s the uncomfortable truth: <strong className="text-slate-900">They’re not laws. They’re heuristics.</strong>
        </p>
        <p className="mb-4">
            Applied blindly, they can create complexity instead of clarity. A jungle of micro-classes in the name of “SRP.”
        </p>

        <PlumberThinking>
            You favor clean pragmatism over cargo-cult architecture. You don’t just follow rules—you ask why the rule exists, and when it stops helping.
        </PlumberThinking>

        <CodingWisdom>
            True mastery is knowing when to bend the rules—without breaking the system.
        </CodingWisdom>

        <PracticeBox items={[
            "When applying a principle, ask: What problem is this solving here?",
            "Audit patterns. If you’re layering abstractions “just because,” stop.",
            "Teach juniors the context behind the principle—not just the acronym."
        ]} />
      </StorySection>

      {/* Section 10: Future Context (Expanded) */}
      <StorySection id="future-context" number={10} title="Externalizing the Intuition: The AI Frontier">
        <div className="flex items-start gap-4 p-6 bg-slate-900 text-slate-300 rounded-xl mb-8 shadow-lg">
           <Bot className="w-10 h-10 text-cyan-400 shrink-0 mt-1" />
           <div className="italic font-serif text-lg leading-relaxed">
             "As long as this intuition exists only in our minds, it seems irreplaceable. 
             But that does not automatically mean that it cannot be externalized... only that we have never made it explicitly clear."
           </div>
        </div>

        <p className="mb-4">
          So, are we working ourselves out of a job? <span className="text-slate-400 font-serif italic">(Spoiler: No, but the job description is changing.)</span>
        </p>
        <p className="mb-6">
          Currently, AI acts like a brilliant junior dev with infinite speed but zero history. 
          It knows the syntax perfectly (the <em className="text-red-600 font-bold">how</em>). 
          But it lacks the Plumber's Intuition—the deep, architectural context of <em className="text-red-600 font-bold">why</em> your specific system leaks where it does.
        </p>

        <PlumberThinking>
          The next phase of Senior Engineering isn't just writing code. It is <strong>Context Architecture</strong>. 
          We must learn to translate our "gut feelings" into explicit constraints that an LLM can parse.
        </PlumberThinking>

        <div className="my-8 space-y-4">
            <h3 className="font-bold text-xl text-slate-800">3 Ways to Turn Intuition into AI Context</h3>
            
            {/* Strategy 1 */}
            <div className="border-l-4 border-indigo-500 bg-indigo-50/50 p-5 rounded-r-lg">
                <h4 className="font-bold text-indigo-900 mb-2">1. The "Why" Log (Contextual ADRs)</h4>
                <p className="text-slate-700 text-sm mb-3">
                    Your gut says <span className="italic">"Don't use a JOIN here."</span> The AI sees clean SQL and executes it. 
                    Your job is to convert the feeling into a constraint.
                </p>
                <div className="bg-white p-3 rounded border border-indigo-100 font-mono text-xs text-slate-600 shadow-sm">
                    <span className="text-red-500 font-bold">FEELING:</span> "It feels slow on large customers."<br/>
                    <span className="text-emerald-600 font-bold">CONTEXT:</span> "CONSTRAINT: Table `orders` is sharded. Cross-shard JOINs incur 200ms latency. FETCH data by ID application-side."
                </div>
            </div>

            {/* Strategy 2 */}
            <div className="border-l-4 border-purple-500 bg-purple-50/50 p-5 rounded-r-lg">
                <h4 className="font-bold text-purple-900 mb-2">2. System Prompts as "Team Memory"</h4>
                <p className="text-slate-700 text-sm mb-3">
                    Don't just prompt for code. Prompt with the <strong>Project Philosophy</strong>. Treat the System Prompt like an onboarding document for a Senior Dev who has never seen the code.
                </p>
                <div className="bg-white p-3 rounded border border-purple-100 font-mono text-xs text-slate-600 shadow-sm">
                    "You are an expert in THIS legacy codebase.<br/>
                    <span className="font-bold">PHILOSOPHY:</span> We prefer duplication over wrong abstractions (DRY is secondary to isolation here).<br/>
                    <span className="font-bold">TRAP:</span> The billing module uses float math for historical reasons; do not refactor to Decimal without approval."
                </div>
            </div>

            {/* Strategy 3 */}
            <div className="border-l-4 border-orange-500 bg-orange-50/50 p-5 rounded-r-lg">
                <h4 className="font-bold text-orange-900 mb-2">3. The "Anti-Pattern" Library</h4>
                <p className="text-slate-700 text-sm mb-3">
                    AI learns from generic "good code." It doesn't know <strong>your</strong> bad code patterns. 
                    Document the specific "smart" solutions that failed in the past.
                </p>
                <div className="bg-white p-3 rounded border border-orange-100 font-mono text-xs text-slate-600 shadow-sm">
                   "Avoid using `ServiceX` for new features. It is deprecated but pervasive. Use `ServiceY` instead, even if `ServiceX` looks easier."
                </div>
            </div>
        </div>

        <CodingWisdom>
           The job isn't disappearing; it's evolving. We are moving from being the ones who turn the wrench, to being the ones who write the manual for the machines turning the wrench.
        </CodingWisdom>

        <PracticeBox items={[
          "Stop keeping architectural decisions in your head. Write 'Why' records (ADRs).",
          "Create a `CONTEXT.md` file in your repo specifically for AI: Explain the constraints, not the setup.",
          "When AI suggests a 'clean' refactor that feels wrong, articulate EXACTLY why it is wrong, and add that to your context library."
        ]} />
      </StorySection>

      {/* Conclusion */}
      <StorySection id="conclusion" title="Trust Your Inner Code Plumber" isLast={true}>
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-slate-300 mt-8 shadow-xl">
              <p className="mb-6 text-xl">
                  You don’t need an error to know code is wrong. That whisper in your gut? That unease in your posture?
                  That’s <strong className="text-cyan-400">Adaptive Systemic Intuition</strong>.
              </p>
              <p className="mb-12 text-lg">
                  It’s not mysticism. It’s the compound interest of years spent reading, breaking, fixing, refactoring, and thinking.
              </p>
              
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-left">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-cyan-500" />
                    Call to Action: Hone Your Gut
                  </h3>
                  <ul className="space-y-4">
                      <li className="flex gap-3"><span className="text-cyan-500 font-bold">1.</span> Pause. Listen to the discomfort.</li>
                      <li className="flex gap-3"><span className="text-cyan-500 font-bold">2.</span> Narrate. Explain why it feels wrong.</li>
                      <li className="flex gap-3"><span className="text-cyan-500 font-bold">3.</span> Mentally simulate. Imagine a small change.</li>
                      <li className="flex gap-3"><span className="text-cyan-500 font-bold">4.</span> Reflect. Think about failed systems.</li>
                      <li className="flex gap-3"><span className="text-cyan-500 font-bold">5.</span> Iterate. Turn failure into pattern recognition.</li>
                  </ul>
              </div>
              
              <p className="text-3xl font-serif italic text-white pt-12">
                  “Great code isn’t just functional. It feels right to work with.”
              </p>
          </div>
      </StorySection>

    </article>
  );
};

export default BlogPost;