import { User, ArrowRight, ChevronRight } from 'lucide-react';

export default function DefineSection() {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6">
            <span className="text-purple-700 text-sm font-medium">Define</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight mb-8">
            Product thinking
          </h2>
        </div>

        {/* User Persona */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">User Persona</h3>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 border border-slate-200">
            <div className="flex items-start gap-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <User className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">Sarah Chen</h4>
                <p className="text-lg text-gray-600 mb-6">First-time investor, 28 years old</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Goals</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Start investing with confidence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Understand investment risks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Build long-term wealth</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Pain Points</div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Overwhelmed by financial jargon</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Unsure about risk tolerance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Lacks trust in platforms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Journey - Before vs After */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">User Journey: Before vs After</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-3xl p-8 border border-red-200">
              <div className="inline-block px-3 py-1 bg-red-600 text-white rounded-full text-sm font-medium mb-6">
                Before
              </div>
              <div className="space-y-4">
                {[
                  'Sign up',
                  'Personal info (3 screens)',
                  'Financial background',
                  'Risk questionnaire (unclear)',
                  'Investment goals',
                  'Portfolio selection',
                  'Account setup',
                  'Verification'
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {i + 1}
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm text-red-700 font-medium">
                ❌ 8 steps • High drop-off rate
              </div>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 border border-green-200">
              <div className="inline-block px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium mb-6">
                After
              </div>
              <div className="space-y-4">
                {[
                  'Quick sign up',
                  'Guided risk profile (simplified)',
                  'Personalized recommendations',
                  'Choose portfolio',
                  'Verification & funding'
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="font-medium">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm text-green-700 font-medium">
                ✓ 5 steps • Progressive disclosure
              </div>
            </div>
          </div>
        </div>

        {/* Key Opportunities */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-200">
          <h3 className="text-2xl font-semibold mb-8">Key Opportunity Areas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl mb-4">1</div>
              <h4 className="font-semibold mb-2">Simplify onboarding</h4>
              <p className="text-gray-600 text-sm">Progressive steps with clear progress indicators</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl mb-4">2</div>
              <h4 className="font-semibold mb-2">Guided risk explanations</h4>
              <p className="text-gray-600 text-sm">Plain language with contextual tooltips</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6">
              <div className="text-4xl mb-4">3</div>
              <h4 className="font-semibold mb-2">Reduce cognitive load</h4>
              <p className="text-gray-600 text-sm">One decision at a time, smart defaults</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
