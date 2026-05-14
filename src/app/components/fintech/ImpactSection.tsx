import { TrendingUp, TrendingDown, Clock, Users } from 'lucide-react';

export default function ImpactSection() {
  const metrics = [
    {
      icon: TrendingUp,
      value: '+20%',
      label: 'Onboarding completion',
      description: 'More users successfully complete the signup flow',
      color: 'green'
    },
    {
      icon: TrendingDown,
      value: '-15%',
      label: 'Drop-off rate',
      description: 'Significant reduction in users abandoning onboarding',
      color: 'blue'
    },
    {
      icon: Clock,
      value: '-18%',
      label: 'Task completion time',
      description: 'Faster, more efficient user experience',
      color: 'purple'
    },
    {
      icon: Users,
      value: '+85%',
      label: 'User confidence',
      description: 'Improved trust and clarity (qualitative feedback)',
      color: 'indigo'
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; text: string }> = {
    green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', text: 'text-green-700' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', text: 'text-blue-700' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', text: 'text-purple-700' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'text-indigo-600', text: 'text-indigo-700' }
  };

  return (
    <section className="py-32 px-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-2 bg-yellow-400/20 rounded-full mb-6 backdrop-blur-sm border border-yellow-400/30">
            <span className="text-yellow-300 text-sm font-medium">Impact</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight mb-8 text-white">
            Measurable results
          </h2>
          <p className="text-xl text-blue-200 leading-relaxed max-w-3xl mx-auto">
            The redesign delivered significant improvements across key metrics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {metrics.map((metric, index) => {
            const colors = colorMap[metric.color];
            return (
              <div
                key={index}
                className={`${colors.bg} rounded-3xl p-10 border ${colors.border} backdrop-blur-sm`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center flex-shrink-0 border ${colors.border}`}>
                    <metric.icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <div className={`text-5xl font-bold mb-3 ${colors.text}`}>{metric.value}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{metric.label}</h3>
                    <p className="text-gray-700 leading-relaxed">{metric.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
          <h3 className="text-2xl font-semibold mb-6 text-white">Qualitative Feedback</h3>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-lg text-blue-100 italic mb-3">
                "The new onboarding flow is so much clearer. I finally understand what risk level makes sense for me."
              </p>
              <p className="text-sm text-blue-300">— Sarah, First-time investor</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-lg text-blue-100 italic mb-3">
                "I love how it breaks down complex financial concepts into simple language. Feels trustworthy."
              </p>
              <p className="text-sm text-blue-300">— Michael, Mid-career professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
