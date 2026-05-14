import { Lightbulb, Target, Zap } from 'lucide-react';

export default function ReflectionSection() {
  return (
    <section className="py-32 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-6">
            <span className="text-amber-700 text-sm font-medium">Reflection</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight mb-8">
            Key learnings
          </h2>
        </div>

        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 border border-gray-200 mb-12 shadow-sm">
          <p className="text-2xl leading-relaxed text-gray-800 text-center max-w-4xl mx-auto">
            This project strengthened my ability to <span className="font-semibold text-blue-600">balance user needs, business goals, and compliance requirements</span> in fintech environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Simplicity wins</h3>
            <p className="text-gray-600 leading-relaxed">
              In complex domains like finance, reducing cognitive load and using plain language dramatically improves user confidence and completion rates.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Test early, iterate often</h3>
            <p className="text-gray-600 leading-relaxed">
              Usability testing revealed critical friction points we wouldn't have found otherwise. Small changes led to measurable impact.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Trust is everything</h3>
            <p className="text-gray-600 leading-relaxed">
              In fintech, users need to feel secure and informed. Transparency, clear explanations, and professional design build that trust.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Want to see more?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore other case studies showcasing UX research, product strategy, and end-to-end design thinking.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              View Portfolio
            </button>
            <button className="bg-white/10 backdrop-blur border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
