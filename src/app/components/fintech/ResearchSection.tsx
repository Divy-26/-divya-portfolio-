import { MessageSquare, TestTube, BarChart3, Lightbulb } from 'lucide-react';

export default function ResearchSection() {
  return (
    <section className="py-32 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-700 text-sm font-medium">Research</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight mb-8">
            Understanding the user
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div>
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">User interviews</h3>
            <p className="text-gray-600">10–12 users</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <TestTube className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Usability testing</h3>
            <p className="text-gray-600">Iterative validation</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Competitor analysis</h3>
            <p className="text-gray-600">Leading wealth apps</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold">Key Insights</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6">
              <div className="w-8 h-1 bg-blue-500 rounded-full mb-4"></div>
              <p className="text-gray-700 leading-relaxed">
                Users didn't understand risk language and felt confused by financial jargon
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6">
              <div className="w-8 h-1 bg-blue-500 rounded-full mb-4"></div>
              <p className="text-gray-700 leading-relaxed">
                Too many cognitive decisions early in the flow created decision fatigue
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6">
              <div className="w-8 h-1 bg-blue-500 rounded-full mb-4"></div>
              <p className="text-gray-700 leading-relaxed">
                Needed clearer progress indicators and contextual guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
