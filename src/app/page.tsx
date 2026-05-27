"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, ArrowRight } from "lucide-react";

/* ─── Grain overlay (from zarcerog) ─── */
function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}

/* ─── Scroll reveal (from bornandbredbrand: expo-out) ─── */
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
        transform: visible ? "none" : "translateY(20px)",
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#15110E]">
      <Grain />

      {/* ─── Nav (from harrygeorge: mix-blend-difference) ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <Link href="/" className="text-white text-sm font-mono font-bold tracking-wider uppercase">
            tako
          </Link>
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

      {/* ─── Hero (from withradiance: oversized type, kentokawazoe: asymmetric) ─── */}
      <section className="min-h-screen flex items-end px-6 md:px-12 lg:px-24 pb-16 md:pb-24 relative">
        {/* Decorative accent line (Figma coral-red) */}
        <div className="absolute top-0 left-6 md:left-12 lg:left-24 w-px h-32 bg-gradient-to-b from-[#D4573A] to-transparent" />

        <div className="max-w-[1200px]">
          <Reveal>
            <p className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#D4573A] mb-6">
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
            <p className="text-sm font-mono text-[#7A6E64] max-w-md leading-relaxed tracking-wide">
              Currently crafting interfaces, systems, and experiences.
              Always learning. Always shipping.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Work (from zarcerog: work-card pattern) ─── */}
      <section id="work" className="px-6 md:px-12 lg:px-24 py-20 md:py-32 border-t border-black/5">
        <div className="max-w-[1200px]">
          <Reveal>
            <p className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#D4573A] mb-16">
              Selected Work
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <Link href="/slicesync" className="group block cursor-pointer">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {["Design + Dev", "2026", "Case Study"].map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono font-bold uppercase tracking-[0.15em] px-3 py-1.5 border border-black/10 text-[#7A6E64]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h2
                className="leading-[0.9] tracking-[-0.01em] mb-4 group-hover:text-[#D4573A] transition-colors duration-300"
                style={{
                  fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                  fontSize: "clamp(2.5rem, 6vw, 6rem)",
                }}
              >
                SliceSync
              </h2>
              <p className="text-[#7A6E64] text-sm font-mono max-w-lg leading-relaxed mb-6 tracking-wide">
                A single pane of glass for a regional pizza network that was
                running on instinct, three spreadsheets, and whatever the POS
                would export.
              </p>

              {/* Dashboard preview */}
              <div className="relative overflow-hidden bg-[#16110D] border border-black/5">
                <div className="p-5 md:p-8">
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
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#D4573A]/0 group-hover:bg-[#D4573A]/5 transition-colors duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-[11px] font-mono font-bold uppercase tracking-widest bg-[#D4573A] px-5 py-2.5 flex items-center gap-2">
                    View case study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Metrics + CTAs */}
              <div className="flex flex-wrap items-end justify-between gap-6 mt-6">
                <div className="flex flex-wrap gap-10 md:gap-16">
                  {[
                    { value: "30–45h", label: "research to handoff" },
                    { value: "4", label: "features from 16 ideas" },
                    { value: "3", label: "tabs, zero clutter" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div
                        className="leading-none tracking-[-0.01em]"
                        style={{
                          fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                          fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                        }}
                      >
                        {s.value}
                      </div>
                      <div className="text-[10px] font-mono text-[#7A6E64] mt-1 uppercase tracking-widest">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#D4573A] flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Explore project
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="px-6 md:px-12 lg:px-24 py-20 md:py-32 border-t border-black/5">
        <div className="max-w-[1200px]">
          <Reveal>
            <p className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#D4573A] mb-16">
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
                  <h3 className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#7A6E64] mb-3">
                    Tools I reach for
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Figma", "Tailwind"].map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-3 py-1 border border-black/10 text-[#43382F] tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-[#7A6E64] mb-3">
                    Always exploring
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["AI interfaces", "Creative coding", "Spatial design"].map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-3 py-1 border border-black/10 text-[#43382F] tracking-wide"
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

      {/* ─── Contact ─── */}
      <section id="contact" className="px-6 md:px-12 lg:px-24 py-20 md:py-32 border-t border-black/5">
        <div className="max-w-[1200px]">
          <Reveal>
            <p className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#D4573A] mb-8">
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
      <footer className="px-6 md:px-12 lg:px-24 py-6 border-t border-black/5">
        <div className="max-w-[1200px] flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#7A6E64] uppercase tracking-widest">
            &copy; 2026 tako
          </span>
          <a
            href="https://x.com/designtako"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-[#7A6E64] hover:text-[#15110E] transition-colors duration-200 uppercase tracking-widest"
          >
            @designtako
          </a>
        </div>
      </footer>
    </div>
  );
}
