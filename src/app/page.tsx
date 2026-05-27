import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight text-foreground">
            tako
          </a>
          <div className="flex items-center gap-8">
            <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-6 text-xs font-semibold tracking-wider uppercase">
            Product Designer & Developer
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
            I build digital products that live at the edge of design and code.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-xl leading-relaxed">
            Currently crafting interfaces, systems, and experiences.
            Always learning. Always shipping.
          </p>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      {/* Work */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <Badge variant="secondary" className="mb-10 text-xs font-semibold tracking-wider uppercase">
          Selected Work
        </Badge>

        <Card className="group overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300">
          <CardContent className="p-0">
            {/* Project Header */}
            <div className="p-6 md:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="secondary" className="text-xs">
                  Design + Dev
                </Badge>
                <Badge variant="outline" className="text-xs">
                  2026
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Case Study
                </Badge>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                SliceSync
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
                A single pane of glass for a regional pizza network that was running on instinct,
                three spreadsheets, and whatever the POS would export.
              </p>
            </div>

            {/* Project Preview - Dark themed dashboard mock */}
            <div className="mx-6 md:mx-8 lg:mx-10 mb-6 md:mb-8 lg:mb-10 rounded-xl overflow-hidden bg-[#16110D] border border-white/10">
              <div className="p-4 border-b border-white/10 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <span className="ml-3 text-xs text-white/40 font-medium">Menu performance · this week</span>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Top sellers */}
                  <div className="rounded-lg border border-white/10 bg-white/5 overflow-hidden">
                    <div className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/40 border-b border-white/10">
                      Top sellers
                    </div>
                    {[
                      { name: "Classic Pepperoni", value: "412", highlight: true },
                      { name: "Margherita", value: "388" },
                      { name: "Veggie Delight", value: "254" },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className={`flex items-center justify-between px-4 py-2.5 border-b border-white/5 last:border-0 ${
                          item.highlight ? "bg-[#D4573A]/10" : ""
                        }`}
                      >
                        <span className={`text-sm ${item.highlight ? "text-[#D4573A] font-semibold" : "text-white/80"}`}>
                          {item.name}
                        </span>
                        <span className="text-sm font-bold text-white/60 tabular-nums">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  {/* Slow sellers */}
                  <div className="rounded-lg border border-white/10 bg-white/5 overflow-hidden">
                    <div className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/40 border-b border-white/10">
                      Slow sellers
                    </div>
                    {[
                      { name: "Smoky BBQ", value: "41", low: true },
                      { name: "Four Cheese", value: "58", low: true },
                      { name: "Pesto Chicken", value: "63", low: true },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 last:border-0 bg-[#D4573A]/5"
                      >
                        <span className="text-sm text-[#D4573A] font-medium">{item.name}</span>
                        <span className="text-sm font-bold text-[#D4573A]/80 tabular-nums">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Action bar */}
                <div className="mt-4 flex flex-wrap items-center gap-3 p-4 rounded-lg border border-dashed border-white/20 bg-white/5">
                  <span className="text-sm text-white/60">
                    Bundle <span className="font-bold text-[#D4573A]">Smoky BBQ</span> +{" "}
                    <span className="font-bold text-[#D4573A]">Classic Pepperoni</span> at{" "}
                    <span className="font-bold text-[#D4573A]">15% off</span>
                  </span>
                  <Button size="sm" className="bg-[#D4573A] hover:bg-[#D4573A]/90 text-white ml-auto">
                    Push live to menu
                  </Button>
                </div>
              </div>
            </div>

            {/* Key metrics */}
            <div className="px-6 md:px-8 lg:px-10 pb-6 md:pb-8 lg:pb-10">
              <div className="flex flex-wrap gap-6 md:gap-10">
                {[
                  { value: "30–45h", label: "research to handoff" },
                  { value: "4", label: "features shipped from 16 ideas" },
                  { value: "3", label: "tabs, zero clutter" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="https://www.figma.com/proto/Gr36KdFlDjSByvvFiei5H3/SliceSync_Aryan-Arora?page-id=0%3A1&node-id=29-826&viewport=155%2C167%2C0.74&scaling=scale-down&content-scaling=fixed&starting-point-node-id=29%3A826&show-proto-sidebar=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#D4573A] px-4 py-2 text-sm font-medium text-white hover:bg-[#D4573A]/90 transition-colors"
                >
                  Watch the dashboard in action
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://www.figma.com/design/Gr36KdFlDjSByvvFiei5H3/SliceSync_Aryan-Arora?node-id=0-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                >
                  Open the Figma file
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <Badge variant="secondary" className="mb-10 text-xs font-semibold tracking-wider uppercase">
          About
        </Badge>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            I&apos;m a designer who codes and a developer who designs.
            I care about systems, motion, and the small details that make
            things feel right.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Tools I reach for
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Figma", "Tailwind"].map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Always exploring
              </h3>
              <div className="flex flex-wrap gap-2">
                {["AI interfaces", "Creative coding", "Spatial design"].map((topic) => (
                  <Badge key={topic} variant="secondary" className="text-sm">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <Badge variant="secondary" className="mb-10 text-xs font-semibold tracking-wider uppercase">
          Get in Touch
        </Badge>
        <a
          href="mailto:hello@tako.dev"
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground hover:text-[#D4573A] transition-colors inline-flex items-center gap-3"
        >
          hello@tako.dev
          <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">&copy; 2026 tako</span>
          <a
            href="https://x.com/designtako"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            @designtako
          </a>
        </div>
      </footer>
    </div>
  );
}
