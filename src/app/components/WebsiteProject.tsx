import { Coffee, ShoppingBag, ArrowRight } from 'lucide-react';

export default function WebsiteProject() {
  return (
    <section className="py-32 px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <div className="mb-6 opacity-40 tracking-wide uppercase text-[13px]">
            Web Design
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight mb-8">
            Coffee Brand Website
          </h2>
          <p className="text-[clamp(1.125rem,2vw,1.5rem)] max-w-3xl opacity-50 leading-relaxed">
            Focus on clean layout, typography, and brand consistency
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-card rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(92,61,46,0.12)]">
            <div className="aspect-[16/9] bg-gradient-to-br from-background to-secondary/30 p-16 flex items-center justify-center">
              <div className="text-center max-w-2xl">
                <div className="mb-8">
                  <Coffee className="w-20 h-20 mx-auto opacity-20" />
                </div>
                <h3 className="text-4xl mb-6 tracking-tight">Crafted Daily, Served Fresh</h3>
                <p className="text-lg opacity-50 mb-8">
                  Premium coffee experiences delivered with care
                </p>
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl inline-flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                  <span>Explore Menu</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="px-8 py-4 border-t border-border opacity-50 text-sm">
              Homepage Hero
            </div>
          </div>

          <div className="bg-card rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(92,61,46,0.12)]">
            <div className="aspect-[16/9] bg-background p-16">
              <div className="mb-8 opacity-40 tracking-wide uppercase text-[13px]">
                Our Menu
              </div>
              <div className="grid grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
                    <div className="aspect-square bg-secondary/30 flex items-center justify-center">
                      <Coffee className="w-16 h-16 opacity-20" />
                    </div>
                    <div className="p-6">
                      <div className="text-sm mb-2">Coffee Name</div>
                      <div className="text-xs opacity-40">$4.50</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-8 py-4 border-t border-border opacity-50 text-sm">
              Product / Shop Section
            </div>
          </div>

          <div className="bg-card rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(92,61,46,0.12)]">
            <div className="aspect-[16/9] bg-background p-16 flex items-center">
              <div className="grid md:grid-cols-2 gap-16 w-full">
                <div className="aspect-square bg-secondary/30 rounded-3xl flex items-center justify-center">
                  <ShoppingBag className="w-24 h-24 opacity-20" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4 opacity-40 tracking-wide uppercase text-[13px]">
                    About Our Story
                  </div>
                  <h3 className="text-3xl mb-6 tracking-tight">
                    Passion for Quality
                  </h3>
                  <p className="opacity-60 leading-relaxed mb-6">
                    Every cup is crafted with care, sourcing the finest beans and bringing you an experience that goes beyond coffee.
                  </p>
                  <div className="inline-flex">
                    <button className="border border-border px-6 py-3 rounded-xl hover:bg-secondary/30 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8 py-4 border-t border-border opacity-50 text-sm">
              About Section
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
