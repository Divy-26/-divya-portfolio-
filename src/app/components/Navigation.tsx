export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="tracking-tight">Divya Gupta</div>
        <div className="flex gap-12">
          <a href="#work" className="opacity-60 hover:opacity-100 transition-opacity">
            Work
          </a>
          <a href="#about" className="opacity-60 hover:opacity-100 transition-opacity">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}
