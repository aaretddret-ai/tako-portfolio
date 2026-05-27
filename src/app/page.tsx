"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

/* ─── Grain overlay (from zarcerog: 0.8s step-end infinite) ─── */
function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}

/* ─── Floating decorative element (from zarcerog: 8s ease-in-out infinite) ─── */
function FloatElement() {
  return (
    <div
      aria-hidden
      className="absolute top-[15%] right-[8%] w-24 h-24 md:w-40 md:h-40 border border-[#D4573A]/20 opacity-30"
      style={{
        animation: "flor-float 8s ease-in-out infinite",
        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      }}
    />
  );
}

/* ─── Scroll-triggered reveal (from bornandbredbrand: cubic-bezier(0.16,1,0.3,1)) ─── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
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
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Work card background image reveal (from zarcerog: 0.4s opacity) ─── */
function WorkCardImage() {
  return (
    <div className="relative overflow-hidden aspect-[16/9] bg-[#16110D] group/card">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-400 opacity-0 group-hover/card:opacity-100"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 450%22%3E%3Crect fill=%22%2316110D%22 width=%22800%22 height=%22450%22/%3E%3Ctext x=%22400%22 y=%22225%22 text-anchor=%22middle%22 fill=%22%23D4573A%22 font-family=%22monospace%22 font-size=%2218%22 opacity=%220.3%22%3ESliceSync Dashboard%3C/text%3E%3C/svg%3E')",
        }}
      />
      {/* Dashboard mock inside */}
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <span className="ml-3 text-[10px] text-white/40 font-mono uppercase tracking-widest">
            Menu performance · this week
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="border border-white/10 bg-white/[0.02]">
            <div className="px-3 py-2 text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-white/30 border-b border-white/10">
              Top sellers
            </div>
            {[
              { name: "Classic Pepperoni", value: "412", hot: true },
              { name: "Margherita", value: "388" },
              { name: "Veggie Delight", value: "254" },
            ].map((i) => (
              <div
                key={i.name}
                className={`flex justify-between px-3 py-2 border-b border-white/5 last:border-0 text-xs font-mono ${
                  i.hot ? "bg-[#D4573A]/10" : ""
                }`}
              >
                <span className={i.hot ? "text-[#D4573A] font-bold" : "text-white/60"}>
                  {i.name}
                </span>
                <span className="text-white/40 tabular-nums">{i.value}</span>
              </div>
            ))}
          </div>
          <div className="border border-white/10 bg-white/[0.02]">
            <div className="px-3 py-2 text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-white/30 border-b border-white/10">
              Slow sellers
            </div>
            {[
              { name: "Smoky BBQ", value: "41" },
              { name: "Four Cheese", value: "58" },
              { name: "Pesto Chicken", value: "63" },
            ].map((i) => (
              <div
                key={i.name}
                className="flex justify-between px-3 py-2 border-b border-white/5 last:border-0 bg-[#D4573A]/[0.03] text-xs font-mono"
              >
                <span className="text-[#D4573A]/80">{i.name}</span>
                <span className="text-[#D4573A]/50 tabular-nums">{i.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3 p-3 border border-dashed border-white/15 bg-white/[0.02]">
          <span className="text-[11px] font-mono text-white/40">
            Bundle <span className="text-[#D4573A] font-bold">Smoky BBQ</span> +{" "}
            <span className="text-[#D4573A] font-bold">Classic Pepperoni</span> at{" "}
            <span className="text-[#D4573A] font-bold">15% off</span>
          </span>
          <button className="ml-auto text-[10px] font-mono font-bold uppercase tracking-widest bg-[#D4573A] text-white px-4 py-2 hover:bg-[#D4573A]/90 transition-colors cursor-pointer">
            Push live
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5E6D3] text-[#1A1209]">
      <Grain />
      <FloatElement />

      {/* ─── Nav (from harrygeorge: mix-blend-difference) ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <a href="/" className="text-white text-sm font-mono font-bold tracking-wider uppercase">
            tako
          </a>
          <div className="flex items-center gap-8">
            {["work", "about", "contact"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="text-white/50 hover:text-white text-[11px] font-mono uppercase tracking-[0.15em] transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Hero (from withradiance: oversized display type, kentokawazoe: extreme left offset) ─── */}
      <section className="min-h-screen flex items-end px-6 md:px-12 lg:px-24 pb-16 md:pb-24 relative">
        <div className="max-w-[1200px]">
          <Reveal>
            <p className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#8B7355] mb-6">
              Product Designer & Developer
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className="leading-[0.88] tracking-[-0.02em] mb-8"
              style={{
                fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                fontSize: "clamp(3.5rem, 9vw, 9rem)",
              }}
            >
              I build digital products
              <br />
              that live at the edge
              <br />
              of design and code.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-sm font-mono text-[#5C4A35] max-w-md leading-relaxed tracking-wide">
              Currently crafting interfaces, systems, and experiences.
              Always learning. Always shipping.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Work (from zarcerog: work-card-bg-img hover reveal) ─── */}
      <section id="work" className="px-6 md:px-12 lg:px-24 py-20 md:py-32 border-t border-[#1A1209]/10">
        <div className="max-w-[1200px]">
          <Reveal>
            <p className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#8B7355] mb-16">
              Selected Work
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="group cursor-pointer">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {["Design + Dev", "2026", "Case Study"].map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] px-3 py-1.5 border border-[#1A1209]/15 text-[#1A1209]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h2
                className="leading-[0.9] tracking-[-0.01em] mb-4"
                style={{
                  fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                  fontSize: "clamp(2.5rem, 6vw, 6rem)",
                }}
              >
                SliceSync
              </h2>
              <p className="text-[#5C4A35] text-sm font-mono max-w-lg leading-relaxed mb-8 tracking-wide">
                A single pane of glass for a regional pizza network that was
                running on instinct, three spreadsheets, and whatever the POS
                would export.
              </p>

              {/* Dashboard mock */}
              <WorkCardImage />

              {/* Metrics */}
              <div className="flex flex-wrap gap-10 md:gap-16 mt-8">
                {[
                  { value: "30–45h", label: "research to handoff" },
                  { value: "4", label: "features shipped from 16 ideas" },
                  { value: "3", label: "tabs, zero clutter" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="leading-none tracking-[-0.01em]"
                      style={{
                        fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                      }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[10px] font-mono text-[#8B7355] mt-1.5 uppercase tracking-widest">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="https://www.figma.com/proto/Gr36KdFlDjSByvvFiei5H3/SliceSync_Aryan-Arora?page-id=0%3A1&node-id=29-826&viewport=155%2C167%2C0.74&scaling=scale-down&content-scaling=fixed&starting-point-node-id=29%3A826&show-proto-sidebar=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D4573A] text-white px-5 py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest hover:bg-[#D4573A]/90 transition-colors"
                >
                  Watch in action
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.figma.com/design/Gr36KdFlDjSByvvFiei5H3/SliceSync_Aryan-Arora?node-id=0-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#1A1209]/15 text-[#1A1209] px-5 py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest hover:bg-[#1A1209]/5 transition-colors"
                >
                  Figma file
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── About (from cathydolle: minimal type scale) ─── */}
      <section id="about" className="px-6 md:px-12 lg:px-24 py-20 md:py-32 border-t border-[#1A1209]/10">
        <div className="max-w-[1200px]">
          <Reveal>
            <p className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#8B7355] mb-16">
              About
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <Reveal delay={0.08}>
              <p className="text-lg md:text-xl leading-[1.4] tracking-[-0.005em] font-light">
                I&apos;m a designer who codes and a developer who designs.
                I care about systems, motion, and the small details that make
                things feel right.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#8B7355] mb-3">
                    Tools I reach for
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Figma", "Tailwind"].map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-3 py-1 border border-[#1A1209]/10 text-[#1A1209] tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#8B7355] mb-3">
                    Always exploring
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["AI interfaces", "Creative coding", "Spatial design"].map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-3 py-1 border border-[#1A1209]/10 text-[#1A1209] tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Contact (from zarcerog: .contact-link opacity hover) ─── */}
      <section id="contact" className="px-6 md:px-12 lg:px-24 py-20 md:py-32 border-t border-[#1A1209]/10">
        <div className="max-w-[1200px]">
          <Reveal>
            <p className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#8B7355] mb-8">
              Get in Touch
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href="mailto:hello@tako.dev"
              className="inline-flex items-center gap-3 group/contact"
            >
              <span
                className="tracking-[-0.02em] transition-opacity duration-200 group-hover/contact:opacity-70"
                style={{
                  fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                  fontSize: "clamp(2rem, 5vw, 4.5rem)",
                }}
              >
                hello@tako.dev
              </span>
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-opacity duration-200 group-hover/contact:opacity-70" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="px-6 md:px-12 lg:px-24 py-6 border-t border-[#1A1209]/10">
        <div className="max-w-[1200px] flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#8B7355] uppercase tracking-widest">
            &copy; 2026 tako
          </span>
          <a
            href="https://x.com/designtako"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-[#8B7355] hover:text-[#1A1209] transition-colors duration-200 uppercase tracking-widest"
          >
            @designtako
          </a>
        </div>
      </footer>
    </div>
  );
}
