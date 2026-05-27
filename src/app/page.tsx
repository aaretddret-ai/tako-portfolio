"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.035]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5E6D3] text-[#1A1209]">
      <GrainOverlay />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          <a href="/" className="text-white text-lg font-bold tracking-tight">
            tako
          </a>
          <div className="flex items-center gap-8">
            <a
              href="#work"
              className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-end px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-[1400px]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B7355] mb-6">
              Product Designer & Developer
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-[clamp(3rem,8vw,8.5rem)] font-bold leading-[0.92] tracking-[-0.04em] max-w-[1100px]">
              I build digital products that live at the edge of design and code.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-[#5C4A35] mt-8 max-w-lg leading-relaxed">
              Currently crafting interfaces, systems, and experiences.
              Always learning. Always shipping.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-[1400px]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B7355] mb-16">
              Selected Work
            </p>
          </Reveal>

          {/* SliceSync Project */}
          <Reveal delay={0.1}>
            <div
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(true)}
              onMouseLeave={() => setHoveredProject(false)}
            >
              {/* Project Header */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 border border-[#1A1209]/20 text-[#1A1209]">
                  Design + Dev
                </span>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 border border-[#1A1209]/20 text-[#1A1209]">
                  2026
                </span>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 border border-[#1A1209]/20 text-[#1A1209]">
                  Case Study
                </span>
              </div>

              <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-6">
                SliceSync
              </h2>
              <p className="text-[#5C4A35] text-base md:text-lg max-w-2xl leading-relaxed mb-10">
                A single pane of glass for a regional pizza network that was
                running on instinct, three spreadsheets, and whatever the POS
                would export.
              </p>

              {/* Dashboard Mock */}
              <div
                className="rounded-none overflow-hidden border border-[#1A1209]/10 transition-all duration-500"
                style={{
                  background: "#16110D",
                  transform: hoveredProject ? "scale(1.005)" : "none",
                }}
              >
                <div className="px-5 py-3 border-b border-white/10 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="ml-3 text-[11px] text-white/40 font-medium tracking-wide">
                    Menu performance · this week
                  </span>
                </div>
                <div className="p-6 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Top sellers */}
                    <div className="border border-white/10 bg-white/[0.03] overflow-hidden">
                      <div className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/40 border-b border-white/10">
                        Top sellers
                      </div>
                      {[
                        { name: "Classic Pepperoni", value: "412", hot: true },
                        { name: "Margherita", value: "388" },
                        { name: "Veggie Delight", value: "254" },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className={`flex items-center justify-between px-4 py-3 border-b border-white/5 last:border-0 ${
                            item.hot ? "bg-[#D4573A]/10" : ""
                          }`}
                        >
                          <span
                            className={`text-sm ${
                              item.hot
                                ? "text-[#D4573A] font-semibold"
                                : "text-white/70"
                            }`}
                          >
                            {item.name}
                          </span>
                          <span className="text-sm font-bold text-white/50 tabular-nums">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* Slow sellers */}
                    <div className="border border-white/10 bg-white/[0.03] overflow-hidden">
                      <div className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/40 border-b border-white/10">
                        Slow sellers
                      </div>
                      {[
                        { name: "Smoky BBQ", value: "41" },
                        { name: "Four Cheese", value: "58" },
                        { name: "Pesto Chicken", value: "63" },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between px-4 py-3 border-b border-white/5 last:border-0 bg-[#D4573A]/[0.04]"
                        >
                          <span className="text-sm text-[#D4573A]/90 font-medium">
                            {item.name}
                          </span>
                          <span className="text-sm font-bold text-[#D4573A]/60 tabular-nums">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Action bar */}
                  <div className="mt-4 flex flex-wrap items-center gap-4 p-4 border border-dashed border-white/20 bg-white/[0.03]">
                    <span className="text-sm text-white/50">
                      Bundle{" "}
                      <span className="font-bold text-[#D4573A]">Smoky BBQ</span>{" "}
                      +{" "}
                      <span className="font-bold text-[#D4573A]">
                        Classic Pepperoni
                      </span>{" "}
                      at{" "}
                      <span className="font-bold text-[#D4573A]">15% off</span>
                    </span>
                    <button className="ml-auto text-xs font-bold uppercase tracking-wider bg-[#D4573A] text-white px-5 py-2.5 hover:bg-[#D4573A]/90 transition-colors cursor-pointer">
                      Push live to menu
                    </button>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-10 md:gap-16 mt-10">
                {[
                  { value: "30–45h", label: "research to handoff" },
                  { value: "4", label: "features shipped from 16 ideas" },
                  { value: "3", label: "tabs, zero clutter" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl md:text-4xl font-bold tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#8B7355] mt-1 tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://www.figma.com/proto/Gr36KdFlDjSByvvFiei5H3/SliceSync_Aryan-Arora?page-id=0%3A1&node-id=29-826&viewport=155%2C167%2C0.74&scaling=scale-down&content-scaling=fixed&starting-point-node-id=29%3A826&show-proto-sidebar=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D4573A] text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#D4573A]/90 transition-colors"
                >
                  Watch the dashboard in action
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://www.figma.com/design/Gr36KdFlDjSByvvFiei5H3/SliceSync_Aryan-Arora?node-id=0-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#1A1209]/20 text-[#1A1209] px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#1A1209]/5 transition-colors"
                >
                  Open the Figma file
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-12 py-20 md:py-32 border-t border-[#1A1209]/10">
        <div className="max-w-[1400px]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B7355] mb-16">
              About
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <Reveal delay={0.1}>
              <p className="text-xl md:text-2xl leading-[1.4] tracking-[-0.01em]">
                I&apos;m a designer who codes and a developer who designs.
                I care about systems, motion, and the small details that make
                things feel right.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-10">
                <div>
                  <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8B7355] mb-4">
                    Tools I reach for
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Figma", "Tailwind"].map(
                      (tool) => (
                        <span
                          key={tool}
                          className="text-sm px-3 py-1.5 border border-[#1A1209]/15 text-[#1A1209]"
                        >
                          {tool}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8B7355] mb-4">
                    Always exploring
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["AI interfaces", "Creative coding", "Spatial design"].map(
                      (topic) => (
                        <span
                          key={topic}
                          className="text-sm px-3 py-1.5 border border-[#1A1209]/15 text-[#1A1209]"
                        >
                          {topic}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 md:px-12 py-20 md:py-32 border-t border-[#1A1209]/10"
      >
        <div className="max-w-[1400px]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B7355] mb-8">
              Get in Touch
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="mailto:hello@tako.dev"
              className="inline-flex items-center gap-3 text-[clamp(2rem,5vw,5rem)] font-bold tracking-[-0.03em] hover:text-[#D4573A] transition-colors duration-200"
            >
              hello@tako.dev
              <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-[#1A1209]/10">
        <div className="max-w-[1400px] flex items-center justify-between">
          <span className="text-xs text-[#8B7355]">&copy; 2026 tako</span>
          <a
            href="https://x.com/designtako"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8B7355] hover:text-[#1A1209] transition-colors duration-200"
          >
            @designtako
          </a>
        </div>
      </footer>
    </div>
  );
}
