export default function DesignSystem() {
  const colors = [
    { name: 'Coffee Brown', hex: '#5C3D2E', bg: 'bg-primary' },
    { name: 'Cream', hex: '#FFFBF5', bg: 'bg-background', border: true },
    { name: 'Soft Beige', hex: '#F5EFE7', bg: 'bg-secondary' },
    { name: 'Warm Accent', hex: '#C9A882', bg: 'bg-accent' }
  ];

  return (
    <section id="about" className="py-32 px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <div className="mb-6 opacity-40 tracking-wide uppercase text-[13px]">
            Foundation
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight tracking-tight mb-8">
            Design System
          </h2>
        </div>

        <div className="mb-24">
          <div className="mb-12 opacity-40 tracking-wide uppercase text-[13px]">
            Color Palette
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {colors.map((color) => (
              <div key={color.name}>
                <div className={`aspect-square rounded-2xl mb-6 ${color.bg} ${color.border ? 'border-2 border-border' : ''} shadow-[0_8px_30px_-10px_rgba(92,61,46,0.15)]`}></div>
                <div className="mb-2 tracking-tight">{color.name}</div>
                <p className="opacity-40 text-sm font-mono">{color.hex}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="mb-12 opacity-40 tracking-wide uppercase text-[13px]">
            Typography
          </div>
          <div className="bg-card rounded-3xl p-16 shadow-[0_20px_60px_-15px_rgba(92,61,46,0.12)] border border-border">
            <div className="space-y-12">
              <div className="pb-12 border-b border-border">
                <h1 className="text-6xl mb-4 tracking-tight">Display Large</h1>
                <p className="opacity-40">Used for hero headings and major titles</p>
              </div>
              <div className="pb-12 border-b border-border">
                <h2 className="text-4xl mb-4 tracking-tight">Heading 1</h2>
                <p className="opacity-40">Section titles and primary headings</p>
              </div>
              <div className="pb-12 border-b border-border">
                <h3 className="text-2xl mb-4 tracking-tight">Heading 2</h3>
                <p className="opacity-40">Subsection titles and card headers</p>
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-4">
                  Body text maintains excellent readability with comfortable line height and letter spacing. This is used for paragraphs, descriptions, and longer content.
                </p>
                <p className="opacity-40">Body text for all content and descriptions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="mb-12 opacity-40 tracking-wide uppercase text-[13px]">
            Components
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-16 shadow-[0_20px_60px_-15px_rgba(92,61,46,0.12)] border border-border">
              <div className="mb-8 tracking-tight">Buttons</div>
              <div className="space-y-4">
                <button className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  Primary Button
                </button>
                <button className="w-full bg-card border-2 border-border px-8 py-4 rounded-xl hover:bg-secondary/30 transition-colors">
                  Secondary Button
                </button>
                <button className="w-full px-8 py-4 rounded-xl opacity-60 hover:opacity-100 transition-opacity">
                  Text Button
                </button>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-16 shadow-[0_20px_60px_-15px_rgba(92,61,46,0.12)] border border-border">
              <div className="mb-8 tracking-tight">Cards</div>
              <div className="space-y-6">
                <div className="bg-background rounded-2xl p-8 border border-border">
                  <div className="mb-3 tracking-tight">Card Component</div>
                  <p className="opacity-60 leading-relaxed">
                    Cards use consistent spacing, subtle borders, and soft shadows for depth.
                  </p>
                </div>
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <div className="text-sm mb-2 tracking-tight">Compact Card</div>
                  <p className="text-sm opacity-60">Smaller variant for lists</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-16 text-center text-primary-foreground">
          <div className="max-w-2xl mx-auto">
            <div className="mb-4 opacity-80 tracking-wide uppercase text-[13px]">
              Design Philosophy
            </div>
            <h3 className="text-3xl mb-6 tracking-tight">Calm, Clear, Consistent</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Every element is crafted with intention, creating a cohesive experience that feels both premium and approachable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
