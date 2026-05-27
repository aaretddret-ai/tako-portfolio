import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "SliceSync — tako",
  description: "A single pane of glass for a regional pizza network.",
};

export default function SliceSyncPage() {
  return (
    <div className="min-h-screen bg-white text-[#15110E]">
      {/* Back nav */}
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

      {/* Embed the full interactive experience */}
      <iframe
        src="/slicesync.html"
        className="w-full border-0"
        style={{ minHeight: "100vh" }}
        title="SliceSync Interactive Case Study"
      />
    </div>
  );
}
