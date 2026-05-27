export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <span className="text-lg font-bold tracking-tight">tako</span>
        <div className="flex gap-8 text-sm text-zinc-400">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-8 pt-32 pb-24">
        <p className="text-zinc-500 text-sm mb-4">Product Designer & Developer</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight max-w-3xl">
          I build digital products that live at the edge of design and code.
        </h1>
        <p className="text-zinc-400 text-lg mt-8 max-w-xl">
          Currently crafting interfaces, systems, and experiences.
          Always learning. Always shipping.
        </p>
      </section>

      <section id="work" className="max-w-6xl mx-auto px-8 py-24 border-t border-zinc-800">
        <h2 className="text-sm text-zinc-500 mb-12">Selected Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Project One", tag: "Design + Dev", year: "2026" },
            { title: "Project Two", tag: "UI/UX", year: "2026" },
            { title: "Project Three", tag: "Full Stack", year: "2025" },
            { title: "Project Four", tag: "Branding", year: "2025" },
          ].map((project) => (
            <div
              key={project.title}
              className="group bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-16">
                <span className="text-xs text-zinc-500">{project.tag}</span>
                <span className="text-xs text-zinc-500">{project.year}</span>
              </div>
              <h3 className="text-2xl font-semibold group-hover:text-zinc-300 transition-colors">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-8 py-24 border-t border-zinc-800">
        <h2 className="text-sm text-zinc-500 mb-12">About</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <p className="text-lg text-zinc-300 leading-relaxed">
            I&apos;m a designer who codes and a developer who designs.
            I care about systems, motion, and the small details that make
            things feel right.
          </p>
          <div className="space-y-4 text-zinc-400">
            <p>Tools I reach for: React, Next.js, TypeScript, Figma, Tailwind</p>
            <p>Always exploring: AI interfaces, creative coding, spatial design</p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-8 py-24 border-t border-zinc-800">
        <h2 className="text-sm text-zinc-500 mb-12">Get in Touch</h2>
        <a
          href="mailto:hello@tako.dev"
          className="text-3xl md:text-5xl font-bold hover:text-zinc-400 transition-colors"
        >
          hello@tako.dev
        </a>
      </section>

      <footer className="max-w-6xl mx-auto px-8 py-8 text-xs text-zinc-600">
        &copy; 2026 tako
      </footer>
    </div>
  );
}
