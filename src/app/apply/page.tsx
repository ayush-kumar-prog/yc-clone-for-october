import Link from "next/link";
import { YCHeader, YCFooter } from "@/components/yc/YCHeader";

export default function ApplyPage() {
  return (
    <>
      <YCHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1a1a1a]">
            Apply to Y Combinator
          </h1>
          <p className="mt-6 text-xl text-[#525252] leading-relaxed">
            Y Combinator is accepting applications for the Summer 2026 Batch funding cycle. The
            batch will take place from July to September in San Francisco.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="border border-[#eaeaea] p-6">
              <div className="text-xs text-[#888] uppercase tracking-wider">On-time deadline</div>
              <div className="mt-2 text-3xl font-bold text-[#1a1a1a]">May 4, 8pm PT</div>
            </div>
            <div className="border border-[#eaeaea] p-6">
              <div className="text-xs text-[#888] uppercase tracking-wider">Decision date</div>
              <div className="mt-2 text-3xl font-bold text-[#1a1a1a]">By June 5</div>
            </div>
            <div className="border border-[#eaeaea] p-6">
              <div className="text-xs text-[#888] uppercase tracking-wider">Interview window</div>
              <div className="mt-2 text-3xl font-bold text-[#1a1a1a]">May & June</div>
            </div>
            <div className="border border-[#eaeaea] p-6">
              <div className="text-xs text-[#888] uppercase tracking-wider">Batch</div>
              <div className="mt-2 text-3xl font-bold text-[#1a1a1a]">July – September, SF</div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">What you get</h2>
            <ul className="space-y-3 text-[#525252] text-lg">
              <li>• $500,000 investment in your company</li>
              <li>• A dedicated General Partner mentor</li>
              <li>• Weekly group dinners and a small founder cohort</li>
              <li>• Guest speakers from successful YC founders</li>
              <li>• Introductions to the YC investor network during batch</li>
              <li>• Lifetime access to the YC alumni community and Bookface</li>
            </ul>
          </div>

          <div className="mt-16">
            <Link
              href="/"
              className="inline-block bg-[#FF6600] text-white px-12 py-5 rounded-sm font-bold text-lg hover:bg-[#e65c00] transition-colors"
            >
              Start your application
            </Link>
            <p className="mt-4 text-sm text-[#888]">
              It takes ~30 minutes to fill out. You can save and come back later.
            </p>
          </div>
        </div>
      </section>
      <YCFooter />
    </>
  );
}
