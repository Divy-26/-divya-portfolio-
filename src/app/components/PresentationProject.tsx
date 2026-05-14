import { Award, Coffee, TrendingUp } from 'lucide-react';

export default function PresentationProject() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <div className="mb-6 opacity-40 tracking-wide uppercase text-[13px]">
            Presentation Deck
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight mb-8">
            Loyalty Rewards Feature
          </h2>
          <p className="text-[clamp(1.125rem,2vw,1.5rem)] max-w-3xl opacity-50 leading-relaxed">
            Introducing Loyalty Rewards – Brewly
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="aspect-[16/10] bg-gradient-to-br from-primary to-accent rounded-2xl p-12 flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(92,61,46,0.2)]">
            <div className="text-center text-primary-foreground">
              <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-2xl mb-3">Loyalty Rewards</h3>
              <p className="opacity-80">Brewly App Feature</p>
            </div>
          </div>

          <div className="aspect-[16/10] bg-card rounded-2xl p-12 flex flex-col justify-center shadow-[0_20px_60px_-15px_rgba(92,61,46,0.12)] border border-border">
            <div className="mb-6 opacity-40 tracking-wide uppercase text-[11px]">
              Problem
            </div>
            <p className="text-lg leading-relaxed opacity-70">
              Low retention and lack of incentive to return
            </p>
          </div>

          <div className="aspect-[16/10] bg-card rounded-2xl p-12 flex flex-col justify-center shadow-[0_20px_60px_-15px_rgba(92,61,46,0.12)] border border-border">
            <div className="mb-6 opacity-40 tracking-wide uppercase text-[11px]">
              Solution
            </div>
            <p className="text-lg leading-relaxed opacity-70">
              Gamified points system with tiered rewards
            </p>
          </div>

          <div className="aspect-[16/10] bg-card rounded-2xl p-12 flex flex-col justify-center shadow-[0_20px_60px_-15px_rgba(92,61,46,0.12)] border border-border">
            <div className="mb-6 opacity-40 tracking-wide uppercase text-[11px]">
              Features
            </div>
            <ul className="space-y-3 opacity-70">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <span>Points on every purchase</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <span>Tiered membership levels</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <span>Exclusive member rewards</span>
              </li>
            </ul>
          </div>

          <div className="aspect-[16/10] bg-secondary/30 rounded-2xl p-12 flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(92,61,46,0.12)]">
            <div className="text-center">
              <Coffee className="w-20 h-20 mx-auto mb-6 opacity-20" />
              <p className="text-sm opacity-50">UI Screen Preview</p>
            </div>
          </div>

          <div className="aspect-[16/10] bg-card rounded-2xl p-12 flex flex-col justify-center shadow-[0_20px_60px_-15px_rgba(92,61,46,0.12)] border border-border">
            <div className="mb-6 opacity-40 tracking-wide uppercase text-[11px]">
              Impact
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl">+42%</span>
                  <TrendingUp className="w-5 h-5 opacity-50" />
                </div>
                <p className="text-sm opacity-50">User retention</p>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl">+28%</span>
                  <TrendingUp className="w-5 h-5 opacity-50" />
                </div>
                <p className="text-sm opacity-50">Repeat purchases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
