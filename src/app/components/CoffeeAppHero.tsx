export default function CoffeeAppHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-[clamp(3rem,10vw,7rem)] leading-[0.95] tracking-tight mb-8">
            Coffee App
            <br />
            <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] opacity-60 max-w-3xl mx-auto leading-relaxed">
            Exploring different design approaches for a modern coffee ordering experience
          </p>
        </div>
      </div>
    </section>
  );
}
