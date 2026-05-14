export default function FintechHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full mb-8 backdrop-blur-sm border border-blue-400/30">
            <span className="text-blue-300 text-sm font-medium">Case Study</span>
          </div>
          <h1 className="text-[clamp(3rem,8vw,5.5rem)] leading-[1.1] tracking-tight mb-8 text-white">
            Investment Platform
          </h1>
          <p className="text-[clamp(1.25rem,3vw,1.75rem)] text-blue-200 mb-16 max-w-4xl mx-auto leading-relaxed">
            Onboarding & Portfolio Experience
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16 text-white">
          <div>
            <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider">Role</div>
            <div className="font-semibold">UX/UI & Product Designer</div>
          </div>
          <div>
            <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider">Duration</div>
            <div className="font-semibold">6 weeks</div>
          </div>
          <div>
            <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider">Tools</div>
            <div className="font-semibold">Figma, Miro, Maze</div>
          </div>
          <div>
            <div className="text-sm text-blue-400 mb-2 uppercase tracking-wider">Focus</div>
            <div className="font-semibold">Onboarding, Risk Profiling, Dashboard UX</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
          <p className="text-xl text-white leading-relaxed text-center">
            Designed an end-to-end investment experience improving onboarding completion and reducing user friction.
          </p>
        </div>
      </div>
    </section>
  );
}
