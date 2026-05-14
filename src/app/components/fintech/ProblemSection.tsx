import { AlertCircle, TrendingDown, Users } from 'lucide-react';

export default function ProblemSection() {
  const painPoints = [
    {
      icon: AlertCircle,
      title: 'Confusing risk questions',
      description: 'Users struggled with complex financial terminology and unclear risk assessment questions'
    },
    {
      icon: TrendingDown,
      title: 'Too many steps',
      description: 'Lengthy onboarding process with 8+ steps led to high abandonment rates'
    },
    {
      icon: Users,
      title: 'Low trust & clarity',
      description: 'Lack of transparency and guidance created hesitation among new users'
    }
  ];

  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-6">
            <span className="text-red-700 text-sm font-medium">Problem</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight mb-8 max-w-4xl">
            Users were dropping off during onboarding
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Due to complex financial terminology, unclear risk profiling, and overwhelming information architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
