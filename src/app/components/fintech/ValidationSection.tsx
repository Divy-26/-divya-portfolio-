import { TestTube2, CheckCircle, XCircle } from 'lucide-react';

export default function ValidationSection() {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-700 text-sm font-medium">Validation</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight mb-8">
            Testing & iteration
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Conducted usability testing to validate flows and identify friction points.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 rounded-3xl p-10 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <TestTube2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">What We Tested</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">1</span>
                </div>
                <span className="text-gray-700">Risk profiling questionnaire clarity and comprehension</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">2</span>
                </div>
                <span className="text-gray-700">Onboarding flow completion rate and drop-off points</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">3</span>
                </div>
                <span className="text-gray-700">Dashboard comprehension and navigation patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">4</span>
                </div>
                <span className="text-gray-700">Trust signals and confidence in investment recommendations</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-3xl p-10 border border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">What Changed</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Reduced steps from 8 → 5</div>
                  <p className="text-sm text-gray-600">Consolidated redundant screens and removed unnecessary fields</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Simplified risk language</div>
                  <p className="text-sm text-gray-600">Replaced jargon with plain language and added contextual tooltips</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Added progress indicators</div>
                  <p className="text-sm text-gray-600">Clear visual feedback showing exactly where users are in the flow</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Introduced guided recommendations</div>
                  <p className="text-sm text-gray-600">Personalized suggestions based on risk profile and goals</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 text-white">
          <h3 className="text-2xl font-semibold mb-8">Testing Insights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">92%</div>
              <p className="text-blue-200">Users found the new risk questions clear and understandable</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">3.2min</div>
              <p className="text-blue-200">Average time to complete onboarding (down from 5.8min)</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">88%</div>
              <p className="text-blue-200">Users felt confident in their investment choices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
