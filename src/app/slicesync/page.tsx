"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Pizza,
  Clock,
  MapPin,
  Trophy,
  Check,
  ArrowRight,
  BarChart3,
} from "lucide-react";

/* ─── Grain (zarcerog) ─── */
function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.02]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}

/* ─── Scroll reveal (bornandbredbrand: expo-out) ─── */
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

/* ─── Spoke data (from HTML) ─── */
const SPOKES = {
  bundle: {
    icon: Pizza,
    label: "Pizzas are dying",
    cardTitle: "Pizzas are dying on the menu",
    cardDesc:
      "You keep or kill items on a hunch. You have never actually known which slow sellers are worth saving.",
    problem: `That BBQ pizza you almost pulled last month? You kept it on a hunch. The truth is you have never known which slow sellers are worth saving and which are dead weight. The call has always been gut and last year's habit.`,
    fields: [
      "pizza_name",
      "pizza_category",
      "quantity",
      "line_total",
      "total_amount",
    ],
    matrix: [
      {
        impact: "High",
        low: { name: "Bundle Boost Offers", win: true },
        high: null,
      },
      {
        impact: "Medium",
        low: { name: "Flavor Spotlight Carousel" },
        high: { name: "Remix & Feedback Loop" },
      },
      { impact: "Low", low: { name: "Staff's Secret Pick" }, high: null },
    ],
    cut: "Remix was the clever idea: let customers rebuild a weak pizza and track winners. It was also the heaviest build and the slowest to prove anything. Bundle Boost wins because a manager can run it in seconds and see the result on the next ticket. Ship the lever that changes behavior this shift, not next quarter.",
    buildTitle: "Bundle Boost",
    decision:
      "Friday rush. The BBQ is dragging again. Two clicks: pair it with the Pepperoni everyone already orders, set 15% off, push live. By the second wave of tickets the BBQ is moving. You did not launch a campaign. You made a decision, and the menu changed underneath you.",
    metric:
      "Watch: lift in low-seller units, bundle view-to-order conversion, and revenue per bundle over time.",
    dashboard: {
      title: "Menu performance · this week",
      topSellers: [
        { name: "Classic Pepperoni", value: "412", hot: true },
        { name: "Margherita", value: "388" },
        { name: "Veggie Delight", value: "254" },
      ],
      slowSellers: [
        { name: "Smoky BBQ", value: "41" },
        { name: "Four Cheese", value: "58" },
        { name: "Pesto Chicken", value: "63" },
      ],
      action:
        'Bundle <span class="font-bold text-[#D4573A]">Smoky BBQ</span> + <span class="font-bold text-[#D4573A]">Classic Pepperoni</span> at <span class="font-bold text-[#D4573A]">15% off</span>',
      actionLabel: "Push live to menu",
      outcome: "BBQ + Pepperoni Duo · $18",
      outcomeDetail: "Smoky BBQ units today: 41 → climbing",
    },
  },
  staffing: {
    icon: Clock,
    label: "Staffing is a guess",
    cardTitle: "Staffing is a guess every shift",
    cardDesc:
      "Over-staff and you bleed labor on a dead Tuesday. Under-staff and Friday buries the line. You never see the rush coming.",
    problem: `Every roster you have ever built started as a guess. Staff up and you bleed labor on a dead Tuesday. Staff down and Friday 8pm buries the make-line. You have never seen the rush before it walked through the door.`,
    fields: ["order_date", "order_time", "order_channel", "number_of_items"],
    matrix: [
      {
        impact: "High",
        low: { name: "Time Heatmap", win: true },
        high: { name: "TempoPulse Forecast" },
      },
      { impact: "Medium", low: null, high: { name: "ShiftSwap Marketplace" } },
      { impact: "Low", low: null, high: { name: "Flexi-Task Pods" } },
    ],
    cut: "TempoPulse was tempting: a forecasting engine that reads weather, local events and live order rate sounds like the future. But a manager will not trust a black-box prediction on day one, and I had 30 hours. The heatmap shows them their own history in a shape they instantly believe, then lets them act on it. Earn trust with the visible truth before you sell anyone a forecast.",
    buildTitle: "Time Heatmap with live team allocation",
    decision:
      "It is 4pm. The heatmap is already glowing across 6 to 8. You pull one floater onto the make-line for those two hours before a single rush ticket lands. The line never backs up. The save happened at 4pm, not at 7.",
    metric:
      "Watch: peak-hour wait time, labor cost on slow shifts, and the number of staffing changes actually made from the heatmap.",
    dashboard: {
      title: "Order volume by hour · today",
      heatmap: [
        ["11am", 0.2],
        ["12pm", 0.45],
        ["1pm", 0.4],
        ["2pm", 0.2],
        ["3pm", 0.15],
        ["4pm", 0.25],
        ["5pm", 0.5],
        ["6pm", 0.85],
        ["7pm", 1],
        ["8pm", 0.9],
        ["9pm", 0.55],
        ["10pm", 0.3],
      ],
      action:
        'Peak detected <span class="font-bold text-[#D4573A]">6–8pm</span> · recommend <span class="font-bold text-[#D4573A]">+1 floater</span> on make-line',
      actionLabel: "Apply staffing",
      outcome: "Floater added · 6–8pm make-line",
      outcomeDetail:
        "Projected peak wait: down, before the rush even starts",
    },
  },
  delivery: {
    icon: MapPin,
    label: "Neighborhoods go dark",
    cardTitle: "Whole neighborhoods go late",
    cardDesc:
      "You hear about a failing delivery zone from a one-star review, days later. There has never been a live map of where the promise breaks.",
    problem: `You find out a neighborhood is angry the same way you always have: a one-star review, days late. There has never been a live map of where your delivery promise is quietly breaking, so you only ever fix it after you have already lost the customer.`,
    fields: [
      "delivery_zone",
      "dispatch_time",
      "delivery_time",
      "delivery_status",
      "CSAT",
    ],
    matrix: [
      {
        impact: "High",
        low: { name: "Delay Zone Actions", win: true },
        high: { name: "Dynamic Dispatch Buffer" },
      },
      {
        impact: "Medium",
        low: { name: "Geo-Fenced Alerts" },
        high: { name: "Driver Leaderboard" },
      },
      { impact: "Low", low: null, high: null },
    ],
    cut: "Dynamic Dispatch is where this feature eventually goes: an engine that throttles and reallocates drivers by congestion. It is also automation you do not hand a manager before they trust the data underneath it. Delay Zone Actions gives them the map and one honest lever first: see the hurting zone, do something about it today. The buffer is the v2 once the map has earned its keep.",
    buildTitle: "Delivery Delay Zone Actions",
    decision:
      'Eastside is red again. The same zone that buried you on Friday. One click sends a "we\'re on it" offer to every customer in that grid and switches on live ETA alerts. Next week Eastside is amber, then it is fine. You stopped a churn spiral with a button, not a meeting.',
    metric:
      "Watch: order volume recovered from low-rated zones, CSAT in the targeted zones, and repeat-order churn.",
    dashboard: {
      title: "CSAT by delivery zone",
      zones: [
        { name: "Downtown", score: 4.6, width: "92%" },
        { name: "Riverside", score: 4.4, width: "88%" },
        { name: "Northgate", score: 4.2, width: "84%" },
        { name: "Eastside", score: 3.1, width: "48%", bad: true },
      ],
      action: "Eastside is below target. Launch a targeted offer to that grid?",
      actionLabel: "Launch zone promo",
      outcome: '"We\'re on it" offer sent to Eastside · ETA alerts on',
      outcomeDetail: "Eastside CSAT trend: 3.1 → recovering",
    },
  },
  champion: {
    icon: Trophy,
    label: "Best people are invisible",
    cardTitle: "Your best people are invisible",
    cardDesc:
      "Your fastest driver and your slowest one look identical on every report: a name and a number. You have no way to see or reward who carries the hard zones.",
    problem: `Your best driver and your slowest one show up the same on every report you have: a name and a number. You have never had a way to see who is carrying the zones nobody wants, let alone a way to reward it.`,
    fields: [
      "driver_id",
      "driver_name",
      "delivery_time",
      "on_time_rate",
      "delivery_zone",
    ],
    matrix: [
      {
        impact: "High",
        low: { name: "Local Champion Program", win: true },
        high: null,
      },
      {
        impact: "Medium",
        low: { name: "Hyper-Local Pulse Surveys" },
        high: { name: "Adaptive SLA Targets" },
      },
      {
        impact: "Low",
        low: { name: '"Pizza Patrol" Pop-Ups' },
        high: null,
      },
    ],
    cut: 'Pizza Patrol is the idea that gets applause in a workshop and dies in a calendar. Adaptive SLAs are smart but invisible to the people doing the work. Local Champion takes data you already have and turns it into recognition, which is the cheapest retention lever a manager owns. Make the people behind the numbers visible.',
    buildTitle: "Local Champion leaderboard",
    decision:
      "Marcus runs the Eastside hills nobody wants and still beats target. Until today that lived in one row of a spreadsheet. Now his name is at the top of the board, the team sees it, and your hardest zone has someone who owns it. Retention is not a program. It is being seen.",
    metric:
      "Watch: agent on-time rate and attendance after recognition, and retention in the toughest zones.",
    dashboard: {
      title: "Delivery champions · this week",
      leaderboard: [
        {
          rank: 1,
          name: "Marcus T.",
          badge: "Champion",
          ot: "97%",
          zone: "Eastside hills",
          champ: true,
        },
        { rank: 2, name: "Dana R.", ot: "95%", zone: "Riverside" },
        { rank: 3, name: "Leo M.", ot: "92%", zone: "Downtown" },
        { rank: 4, name: "Priya S.", ot: "90%", zone: "Northgate" },
      ],
      action:
        "Marcus beats target in the zone nobody wants. Spotlight him to the team?",
      actionLabel: "Celebrate champion",
      outcome:
        'Marcus pinned to the team board · "10 min faster than target"',
      outcomeDetail: "The hardest zone now has someone who owns it",
    },
  },
};

const SPOKE_KEYS = ["bundle", "staffing", "delivery", "champion"] as const;

/* ─── Dashboard mock component ─── */
function DashboardMock({ spoke }: { spoke: (typeof SPOKES)[keyof typeof SPOKES] }) {
  const [acted, setActed] = useState(false);
  const d = spoke.dashboard;

  return (
    <div className="bg-[#16110D] border border-black/5 overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <span className="ml-3 text-[10px] text-white/40 font-mono uppercase tracking-widest">
          {d.title}
        </span>
      </div>
      <div className="p-5 md:p-8">
        {/* Bundle dashboard */}
        {"topSellers" in d && d.topSellers && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-white/10 bg-white/[0.02]">
              <div className="px-3 py-2 text-[9px] font-mono font-bold uppercase tracking-[0.15em] text-white/30 border-b border-white/10">
                Top sellers
              </div>
              {d.topSellers.map((i) => (
                <div
                  key={i.name}
                  className={`flex justify-between px-3 py-2 border-b border-white/5 last:border-0 text-xs font-mono ${
                    "hot" in i && i.hot ? "bg-[#D4573A]/10" : ""
                  }`}
                >
                  <span
                    className={
                      "hot" in i && i.hot
                        ? "text-[#D4573A] font-bold"
                        : "text-white/60"
                    }
                  >
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
              {d.slowSellers!.map((i) => (
                <div
                  key={i.name}
                  className="flex justify-between px-3 py-2 border-b border-white/5 last:border-0 bg-[#D4573A]/[0.03] text-xs font-mono"
                >
                  <span className="text-[#D4573A]/80">{i.name}</span>
                  <span className="text-[#D4573A]/50 tabular-nums">
                    {i.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Heatmap dashboard */}
        {"heatmap" in d && d.heatmap && (
          <div className="flex gap-1.5 flex-wrap">
            {d.heatmap.map(([h, v]) => {
              const peak = (v as number) >= 0.85;
              return (
                <div key={h} className="flex-1 min-w-[36px] text-center">
                  <div className="text-[10px] text-white/40 mb-1 font-mono">
                    {h}
                  </div>
                  <div
                    className={`h-10 rounded-md ${
                      peak ? "ring-1 ring-[#D4573A] ring-offset-1 ring-offset-[#16110D]" : ""
                    }`}
                    style={{
                      background: `rgba(31,79,209,${0.12 + (v as number) * 0.7})`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Zone dashboard */}
        {"zones" in d && d.zones && (
          <div className="space-y-2">
            {d.zones.map((z) => (
              <div
                key={z.name}
                className="grid grid-cols-[100px_1fr_40px] items-center gap-3"
              >
                <span className="text-xs font-mono text-white/60 font-semibold">
                  {z.name}
                </span>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      z.bad ? "bg-[#E23B3B]" : "bg-[#1F4FD1]"
                    }`}
                    style={{ width: z.width }}
                  />
                </div>
                <span
                  className={`text-right text-xs font-mono font-bold tabular-nums ${
                    z.bad ? "text-[#E23B3B]" : "text-white/60"
                  }`}
                >
                  {z.score}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Leaderboard dashboard */}
        {"leaderboard" in d && d.leaderboard && (
          <div>
            {d.leaderboard.map((r) => (
              <div
                key={r.rank}
                className={`grid grid-cols-[24px_1fr_60px_80px] items-center gap-2 px-3 py-2.5 border-b border-white/5 last:border-0 text-xs font-mono ${
                  r.champ ? "bg-[#D4573A]/[0.06]" : ""
                }`}
              >
                <span className="text-white/30 font-bold">{r.rank}</span>
                <span className="text-white/80 font-bold flex items-center gap-2">
                  {r.name}
                  {"badge" in r && r.badge && (
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white bg-[#D4573A] px-2 py-0.5">
                      {r.badge}
                    </span>
                  )}
                </span>
                <span className="text-[#1F9E5A] font-bold tabular-nums">
                  {r.ot}
                </span>
                <span className="text-white/40 text-[11px]">{r.zone}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action bar */}
        <div className="mt-4 flex flex-wrap items-center gap-3 p-3 border border-dashed border-white/15 bg-white/[0.02]">
          <span
            className="text-[11px] font-mono text-white/40"
            dangerouslySetInnerHTML={{ __html: d.action }}
          />
          <button
            onClick={() => setActed(true)}
            disabled={acted}
            className="ml-auto text-[10px] font-mono font-bold uppercase tracking-widest bg-[#D4573A] text-white px-4 py-2 hover:bg-[#D4573A]/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-default"
          >
            {acted ? "Done" : d.actionLabel}
          </button>
        </div>

        {/* Outcome */}
        {acted && (
          <div className="mt-3 border border-[#1F9E5A] bg-[#F1FBF5] p-3 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[#15110E]">
              {d.outcome}
            </span>
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-white bg-[#1F9E5A] px-2 py-1 flex items-center gap-1">
              <Check className="w-3 h-3" /> Live
            </span>
          </div>
        )}
        {acted && (
          <div className="mt-2 text-[11px] font-mono font-bold text-[#1F9E5A] flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5" />
            {d.outcomeDetail}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main page ─── */
export default function SliceSyncPage() {
  const [activeSpoke, setActiveSpoke] = useState<string | null>(null);
  const [anchorChoice, setAnchorChoice] = useState<number | null>(null);
  const [showFinale, setShowFinale] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#15110E]">
      <Grain />

      {/* ─── Nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#7A6E64] hover:text-[#15110E] transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to portfolio
          </Link>
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[#D4573A]">
            Case Study
          </span>
        </div>
      </nav>

      {/* ─── 01 · Cold Open (dark hero from HTML) ─── */}
      <section className="bg-[#16110D] text-[#F4ECE2] min-h-screen flex items-center relative overflow-hidden">
        {/* Orange glow (from HTML) */}
        <div
          className="absolute w-[560px] h-[560px] rounded-full top-[-160px] right-[-120px] filter blur-[20px]"
          style={{
            background:
              "radial-gradient(circle, rgba(242,84,27,.35), transparent 60%)",
            animation: "flicker 6s ease-in-out infinite",
          }}
        />
        <div className="max-w-[760px] mx-auto px-6 md:px-12 py-32 relative z-10">
          <Reveal>
            <p className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-[#FF7A3D] mb-6">
              A SliceSync case study · by Aryan Arora
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className="text-white mb-5"
              style={{
                fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                fontSize: "clamp(4rem, 11vw, 10rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
              }}
            >
              SliceSync
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-lg md:text-xl text-[#D9CCBE] leading-relaxed max-w-[620px]">
              A single pane of glass for a regional pizza network that was
              running on instinct, three spreadsheets, and whatever the POS
              would export.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-wrap gap-2.5 mt-7">
              {[
                "#1184 · 2 pies · make-line",
                "#1185 · dine-in · T6",
                "#1187 · DELIVERY · Eastside · 38 min",
                "#1188 · 3 pies · oven",
                "#1189 · DELIVERY · Eastside · 41 min",
              ].map((t, i) => (
                <span
                  key={t}
                  className={`text-[11px] font-mono font-semibold px-3 py-1.5 border ${
                    i === 2 || i === 4
                      ? "border-[#E23B3B]/50 text-[#FF9C8E]"
                      : "border-white/12 text-[#E9DCCD]"
                  } bg-white/[0.06]`}
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="text-base text-[#C9BBAC] mt-7 max-w-[640px] leading-relaxed">
              It is Friday, 7:40pm. You manage this store. Tickets are stacking
              on the rail. A driver is late in Eastside again, and you will not
              hear how angry that customer is until the review lands on Monday.
              You have a feeling the BBQ pizza is dying, but a feeling is all you
              have. Your ops manager wants a cross-store comparison by morning.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-base text-white font-semibold mt-5">
              Tonight, instinct stops being enough.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 inline-flex items-center gap-2.5 text-[#B8A998] text-[12px] font-mono font-semibold uppercase tracking-[0.08em]">
              <div className="w-[18px] h-[28px] border-2 border-[#6b5d4e] rounded-[10px] relative">
                <div
                  className="absolute left-1/2 top-[6px] w-1 h-1 rounded-full bg-[#FF7A3D] -translate-x-1/2"
                  style={{
                    animation: "drop 1.6s ease-in-out infinite",
                  }}
                />
              </div>
              Follow the build
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 02 · The Pile (research) ─── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 max-w-[760px] mx-auto">
        <Reveal>
          <p className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-[#D4573A] mb-4">
            01 · Where I started
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="mb-8"
            style={{
              fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Before a single screen, the spreadsheets.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="border border-black/5 bg-white p-6 md:p-8 mb-6">
            <p className="text-[10px] font-mono font-bold tracking-[0.14em] uppercase text-[#D4573A] mb-3">
              In the store
            </p>
            <p className="text-sm font-mono text-[#43382F] leading-relaxed">
              Every manager you talk to has the same shoebox: Excel sheets they
              have babied for years, and the raw exports their POS spits out at
              close. They trust those numbers because they built them by hand.
              They do not trust anything new.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="border-l-[3px] border-[#1F4FD1] bg-[#E8EEFF] p-6 md:p-8 mb-6">
            <p className="text-[10px] font-mono font-bold tracking-[0.14em] uppercase text-[#1F4FD1] mb-3">
              Design decision
            </p>
            <p className="text-sm font-mono text-[#27324D] leading-relaxed">
              So I did not design first. I went where the work actually lived
              and listed every field a manager already sees, down to the column
              name. SliceSync is built directly on those fields. The first number
              a manager reads in the product is one they already recognize from
              their own sheet, which is how a brand-new tool earns trust on day
              one.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {[
                { name: "order_time", hot: true },
                { name: "pizza_name", hot: true },
                { name: "order_channel" },
                { name: "delivery_zone", hot: true },
                { name: "line_total" },
                { name: "unit_price" },
                { name: "delivery_time", hot: true },
                { name: "driver_id" },
                { name: "tip_amount" },
                { name: "payment_method" },
                { name: "pizza_category", hot: true },
                { name: "discount_amount" },
                { name: "customer_id" },
                { name: "shift_id" },
                { name: "sales_by_staff" },
                { name: "+ 40 more", dim: true },
              ].map((f) => (
                <span
                  key={f.name}
                  className={`text-[11px] font-mono font-semibold px-2.5 py-1 border ${
                    f.hot
                      ? "bg-[#FFEFE6] border-[#F6C9B2] text-[#9A3A12]"
                      : f.dim
                      ? "bg-white border-black/8 text-[#7A6E64]"
                      : "bg-white border-black/8 text-[#43382F]"
                  }`}
                >
                  {f.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <h3 className="text-base font-bold mb-4">
            If you were building their dashboard, what would you anchor it on?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                title: "Your own read of the floor",
                desc: "You know this store better than any export.",
                correct: false,
              },
              {
                title: "A clever new metric",
                desc: "Invent a score that captures everything at once.",
                correct: false,
              },
              {
                title: "The exact fields they already track",
                desc: "The columns living in their sheets today.",
                correct: true,
              },
            ].map((c, i) => (
              <button
                key={c.title}
                onClick={() => setAnchorChoice(i)}
                disabled={anchorChoice !== null}
                className={`text-left p-4 border transition-all duration-200 cursor-pointer disabled:cursor-default ${
                  anchorChoice === null
                    ? "border-black/10 hover:border-[#D4573A]/50 hover:-translate-y-0.5"
                    : anchorChoice === i && c.correct
                    ? "border-[#1F9E5A] bg-[#F1FBF5]"
                    : anchorChoice === i && !c.correct
                    ? "border-black/10 opacity-50"
                    : c.correct
                    ? "border-[#1F9E5A] bg-[#F1FBF5]"
                    : "border-black/10 opacity-50"
                }`}
              >
                <b className="block text-sm font-bold text-[#15110E] mb-1">
                  {c.title}
                </b>
                <span className="text-[12px] font-mono text-[#7A6E64]">
                  {c.desc}
                </span>
              </button>
            ))}
          </div>
          {anchorChoice !== null && (
            <div className="mt-4 border border-black/5 border-l-[3px] border-l-[#1F9E5A] bg-[#F1FBF5] p-4 text-sm font-mono text-[#15110E] font-semibold">
              Right. Instinct does not scale and a clever new metric is a number
              nobody trusts yet. Anchoring to the fields they already use is the
              unglamorous choice that makes everything after it believable. That
              is the whole game.
            </div>
          )}
        </Reveal>
      </section>

      {/* ─── 03 · The Plumbing (sync) ─── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 border-t border-black/5 bg-gradient-to-b from-[#F9F9F9] to-white max-w-[760px] mx-auto">
        <Reveal>
          <p className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-[#D4573A] mb-4">
            02 · Getting the data in
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="mb-5"
            style={{
              fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Trust dies at setup.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-sm font-mono text-[#43382F] leading-relaxed mb-8">
            Every POS vendor speaks a different language. I studied how Looker
            handles OAuth connectors and how Tableau manages API extracts, then
            designed two ways in and one way around.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {[
              {
                pill: "OAuth",
                text: 'Click "Connect POS", approve on the provider\'s screen, done. We pull on a schedule and subscribe to webhooks for real-time updates.',
              },
              {
                pill: "API key",
                text: 'For vendors without OAuth: drop in a key and secret. Configurable sync intervals, plus a "Sync now" button for on-demand refreshes.',
              },
              {
                pill: "Escape hatch",
                text: "Not ready to connect live? Drag in an Excel file and map your columns. Skeptics can try the whole product before trusting it with a connection.",
                escape: true,
              },
            ].map((f) => (
              <div
                key={f.pill}
                className={`border p-5 ${
                  f.escape
                    ? "bg-[#FFEFE6] border-[#F6C9B2]"
                    : "border-black/5 bg-white"
                }`}
              >
                <span
                  className={`text-[10px] font-mono font-bold uppercase tracking-[0.08em] px-2.5 py-1 inline-block mb-3 ${
                    f.escape
                      ? "text-[#9A3A12] bg-white"
                      : "text-[#1F4FD1] bg-[#E8EEFF]"
                  }`}
                >
                  {f.pill}
                </span>
                <p className="text-[13px] font-mono text-[#43382F] leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="border-l-[3px] border-[#1F4FD1] bg-[#E8EEFF] p-6">
            <p className="text-[10px] font-mono font-bold tracking-[0.14em] uppercase text-[#1F4FD1] mb-3">
              Design decision
            </p>
            <p className="text-sm font-mono text-[#27324D] leading-relaxed">
              The escape hatch is the part most analytics tools skip. A manager
              who has guarded their spreadsheets for years will not hand over live
              API access to something they have never used. The Excel uploader
              lets them feel the value first, then connect for real. For city
              ops, the same screen links multiple POS instances into one
              consolidated cross-store view, even when each store runs a
              different platform.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─── 04 · Branch (pick a problem) ─── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 border-t border-black/5">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-[#D4573A] mb-4">
              03 · The five wounds
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="mb-5 max-w-[680px]"
              style={{
                fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Data flowing and trusted. Now the real pain surfaces.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-sm font-mono text-[#43382F] leading-relaxed mb-10 max-w-[680px]">
              Every one of these is currently solved by guessing. You have
              roughly 30 hours. You cannot build all of it, so this is the part
              where a product designer earns their keep. Pick the problem you
              feel tonight, and walk the decision with me.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SPOKE_KEYS.map((key) => {
                const s = SPOKES[key];
                const Icon = s.icon;
                const isActive = activeSpoke === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSpoke(key)}
                    className={`text-left p-6 border transition-all duration-200 cursor-pointer relative ${
                      isActive
                        ? "border-[#D4573A] bg-[#FFF8F5]"
                        : "border-black/10 hover:border-[#D4573A]/50 hover:-translate-y-1"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#FFEFE6] text-[#D4573A] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#15110E] mb-2">
                      {s.cardTitle}
                    </h3>
                    <p className="text-[13px] font-mono text-[#7A6E64] leading-relaxed mb-4">
                      {s.cardDesc}
                    </p>
                    <span className="text-[12px] font-mono font-bold text-[#D4573A] flex items-center gap-1.5">
                      Solve this with me{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 05 · Spoke stage (dynamic content) ─── */}
      {activeSpoke && (
        <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 border-t border-black/5 max-w-[760px] mx-auto">
          {(() => {
            const s = SPOKES[activeSpoke as keyof typeof SPOKES];
            const Icon = s.icon;
            return (
              <>
                <Reveal>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#FFEFE6] text-[#D4573A] flex items-center justify-center flex-none">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold tracking-[0.14em] uppercase text-[#D4573A]">
                        Branch · {s.label}
                      </p>
                      <h2
                        className="mt-1"
                        style={{
                          fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                          fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                          lineHeight: 1.05,
                        }}
                      >
                        {s.cardTitle}.
                      </h2>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className="border border-black/5 bg-white p-5 mb-6">
                    <p className="text-[10px] font-mono font-bold tracking-[0.14em] uppercase text-[#D4573A] mb-2">
                      In the store
                    </p>
                    <p className="text-sm font-mono text-[#43382F] leading-relaxed">
                      {s.problem}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.16}>
                  <div className="border-l-[3px] border-[#1F4FD1] bg-[#E8EEFF] p-5 mb-8">
                    <p className="text-[10px] font-mono font-bold tracking-[0.14em] uppercase text-[#1F4FD1] mb-3">
                      Anchored on
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.fields.map((f) => (
                        <span
                          key={f}
                          className="text-[11px] font-mono font-semibold px-2.5 py-1 bg-[#FFEFE6] border border-[#F6C9B2] text-[#9A3A12]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.16}>
                  <p className="text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-[#7A6E64] mb-3 mt-10">
                    The cut · effort × impact
                  </p>
                  <div className="border border-black/5 overflow-hidden mb-6">
                    <div className="grid grid-cols-[100px_1fr_1fr] bg-[#F9F9F9] border-b border-black/5">
                      <div />
                      <div className="px-3 py-2.5 text-[10px] font-mono font-bold uppercase tracking-[0.06em] text-[#7A6E64] border-r border-black/5">
                        Low effort
                      </div>
                      <div className="px-3 py-2.5 text-[10px] font-mono font-bold uppercase tracking-[0.06em] text-[#7A6E64]">
                        High effort
                      </div>
                    </div>
                    {s.matrix.map((r) => (
                      <div
                        key={r.impact}
                        className="grid grid-cols-[100px_1fr_1fr] border-b border-black/5 last:border-b-0"
                      >
                        <div className="px-3 py-3 text-[10px] font-mono font-bold uppercase tracking-[0.06em] text-[#43382F] bg-[#F9F9F9] border-r border-black/5 flex items-center">
                          {r.impact} impact
                        </div>
                        <div className="px-3 py-3 border-r border-black/5 min-h-[52px] flex flex-wrap gap-1.5 items-center">
                          {r.low ? (
                            r.low.win ? (
                              <span className="text-[12px] font-mono font-bold px-3 py-1.5 bg-[#D4573A] text-white flex items-center gap-1.5">
                                {r.low.name}
                                <span className="text-[9px] bg-white/20 px-1.5 py-0.5">
                                  Shipped
                                </span>
                              </span>
                            ) : (
                              <span className="text-[12px] font-mono font-semibold px-3 py-1.5 border border-black/8 bg-white text-[#43382F]">
                                {r.low.name}
                              </span>
                            )
                          ) : (
                            <span className="text-[12px] font-mono text-[#7A6E64] italic">
                              ·
                            </span>
                          )}
                        </div>
                        <div className="px-3 py-3 min-h-[52px] flex flex-wrap gap-1.5 items-center">
                          {r.high ? (
                            <span className="text-[12px] font-mono font-semibold px-3 py-1.5 border border-black/8 bg-white text-[#43382F]">
                              {r.high.name}
                            </span>
                          ) : (
                            <span className="text-[12px] font-mono text-[#7A6E64] italic">
                              ·
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.16}>
                  <div className="border-l-[3px] border-[#1F4FD1] bg-[#E8EEFF] p-5 mb-8">
                    <p className="text-[10px] font-mono font-bold tracking-[0.14em] uppercase text-[#1F4FD1] mb-3">
                      Why this one shipped
                    </p>
                    <p className="text-sm font-mono text-[#27324D] leading-relaxed">
                      {s.cut}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.16}>
                  <p className="text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-[#7A6E64] mb-3">
                    The build
                  </p>
                  <DashboardMock spoke={s} />
                </Reveal>

                <Reveal delay={0.16}>
                  <p className="text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-[#7A6E64] mb-3 mt-10">
                    The decision · act in seconds
                  </p>
                  <div className="border border-black/5 bg-white p-5 mb-4">
                    <p className="text-[10px] font-mono font-bold tracking-[0.14em] uppercase text-[#D4573A] mb-2">
                      In the store
                    </p>
                    <p className="text-sm font-mono text-[#43382F] leading-relaxed">
                      {s.decision}
                    </p>
                  </div>
                  <p className="text-[13px] font-mono font-semibold text-[#1F4FD1] flex items-start gap-2">
                    <BarChart3 className="w-4 h-4 mt-0.5 flex-none" />
                    {s.metric}
                  </p>
                </Reveal>

                <Reveal delay={0.16}>
                  <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-black/5">
                    <button
                      onClick={() => setShowFinale(true)}
                      className="text-[12px] font-mono font-bold uppercase tracking-widest bg-[#1F4FD1] text-white px-5 py-2.5 hover:bg-[#1F4FD1]/90 transition-colors cursor-pointer flex items-center gap-2"
                    >
                      See the bigger picture{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setActiveSpoke(null);
                        document
                          .getElementById("branch")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-[12px] font-mono font-bold uppercase tracking-widest border border-black/10 text-[#15110E] px-5 py-2.5 hover:bg-black/5 transition-colors cursor-pointer"
                    >
                      Solve another problem
                    </button>
                  </div>
                </Reveal>
              </>
            );
          })()}
        </section>
      )}

      {/* ─── 06 · Finale (zoom out) ─── */}
      {showFinale && (
        <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 border-t border-black/5 max-w-[760px] mx-auto">
          <Reveal>
            <p className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-[#D4573A] mb-4">
              04 · Zoom out
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="mb-7"
              style={{
                fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              From one store to the whole region.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="bg-gradient-to-br from-[#1F4FD1] to-[#15349C] text-white p-8 md:p-10 mb-10">
              <p className="text-[11px] font-mono font-bold tracking-[0.14em] uppercase text-[#A9C0FF] mb-2">
                The city ops manager
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Twelve locations. Three POS vendors. One question every Monday.
              </h3>
              <p className="text-sm font-mono text-[#D6E0FF] leading-relaxed">
                Which stores are sliding, and why? SliceSync links every
                instance into a single consolidated view, even across mismatched
                platforms, so the cross-store comparison that used to take a
                night of copy-paste is just the home screen.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <h3 className="text-base font-bold mb-5">Where it goes next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                {
                  n: "Reactive → Predictive",
                  title: "Recommendations",
                  desc: 'Move from "what happened" to "what should happen next." Suggest which bundle or deal fits a specific zone based on its own sales history.',
                },
                {
                  n: "Optimization",
                  title: "Promotion engine",
                  desc: "Bundles and discounts suggested, A/B tested, and refined per zone or store automatically.",
                },
                {
                  n: "People",
                  title: "Staff Performance Hub",
                  desc: "Grow Local Champion into full staff analytics so a delivery agent's metrics surface wherever their name appears.",
                },
                {
                  n: "Scale",
                  title: "Multi-location intelligence",
                  desc: "Region-level, data-backed strategy for city ops, not just store-by-store views.",
                },
              ].map((f) => (
                <div key={f.title} className="border border-black/5 bg-white p-5">
                  <p className="text-[11px] font-mono font-bold tracking-[0.1em] uppercase text-[#D4573A] mb-2">
                    {f.n}
                  </p>
                  <h4 className="text-base font-bold mb-1">{f.title}</h4>
                  <p className="text-[13px] font-mono text-[#43382F] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <h3 className="text-base font-bold mb-4">
              How we would know it worked
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { b: "Lift", rest: " in low-seller units after Bundle Boost" },
                {
                  b: "Conversion",
                  rest: " of bundle views to orders",
                },
                {
                  b: "Reduction",
                  rest: " in peak-hour prep and wait times",
                },
                {
                  b: "Staffing changes",
                  rest: " made from the heatmap",
                },
                {
                  b: "Order volume",
                  rest: " recovered from low-rated zones",
                },
                { b: "CSAT", rest: " in targeted delivery zones" },
                {
                  b: "Agent attendance",
                  rest: " after recognition",
                },
                { b: "Actions taken", rest: " per session" },
              ].map((m) => (
                <span
                  key={m.b}
                  className="text-[13px] font-mono font-semibold px-4 py-2 border border-black/8 bg-white text-[#43382F]"
                >
                  <b className="text-[#D4573A]">{m.b}</b>
                  {m.rest}
                </span>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {/* ─── 07 · Close (handoff) ─── */}
      <section className="bg-[#16110D] text-[#F4ECE2] px-6 md:px-12 lg:px-24 py-20 md:py-32">
        <div className="max-w-[760px] mx-auto">
          <Reveal>
            <p className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-[#FF7A3D] mb-4">
              05 · The craft
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="text-white mb-5"
              style={{
                fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Built to be handed off.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-sm font-mono text-[#D9CCBE] leading-relaxed mb-8">
              Three tabs: Operations, Performance, Leaderboard. One lightweight
              Figma design system: Inter, bold orange CTAs, calm blue data
              accents, 2xl rounded cards. High-contrast focus rings,
              keyboard-friendly modals, SVG charts with screen-reader tags. Every
              screen scans in seconds, not minutes. Every layer is named and
              annotated so a developer can read the reasoning, not just the
              pixels.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex flex-wrap gap-8 mb-8">
              {[
                { big: "30–45h", lab: "research to handoff" },
                { big: "4", lab: "features shipped from 16 ideas" },
                { big: "3", lab: "tabs, zero clutter" },
              ].map((s) => (
                <div key={s.lab}>
                  <div
                    className="text-white leading-none"
                    style={{
                      fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                    }}
                  >
                    {s.big}
                  </div>
                  <div className="text-[12px] font-mono text-[#B8A998] mt-1 uppercase tracking-widest">
                    {s.lab}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://www.figma.com/proto/Gr36KdFlDjSByvvFiei5H3/SliceSync_Aryan-Arora?page-id=0%3A1&node-id=29-826&viewport=155%2C167%2C0.74&scaling=scale-down&content-scaling=fixed&starting-point-node-id=29%3A826&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4573A] text-white px-5 py-2.5 text-[12px] font-mono font-bold uppercase tracking-widest hover:bg-[#D4573A]/90 transition-colors"
              >
                Watch the dashboard in action
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.figma.com/design/Gr36KdFlDjSByvvFiei5H3/SliceSync_Aryan-Arora?node-id=0-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-2.5 text-[12px] font-mono font-bold uppercase tracking-widest hover:bg-white/8 transition-colors"
              >
                Open the Figma file
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-[12px] font-mono text-[#8c7d6d]">
              Research compressed with ChatGPT, Manus.ai and Convergence. Visual
              exploration with LoveArt.ai and Figr. Designed and prototyped in
              Figma. The AI did the legwork; the calls were mine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-[#16110D] border-t border-white/5 px-6 md:px-12 py-6">
        <div className="max-w-[760px] mx-auto flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#7A6E64] uppercase tracking-widest">
            SliceSync · a design story by Aryan Arora
          </span>
          <Link
            href="/"
            className="text-[10px] font-mono text-[#7A6E64] hover:text-white transition-colors uppercase tracking-widest"
          >
            tako
          </Link>
        </div>
      </footer>

      {/* ─── Keyframes ─── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes flicker{0%,100%{opacity:.7}50%{opacity:1}}
@keyframes drop{0%{opacity:0;top:6px}30%{opacity:1}80%{opacity:0;top:18px}100%{opacity:0}}
`,
        }}
      />
    </div>
  );
}
