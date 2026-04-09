import Link from "next/link";
import { YCHeader, YCFooter } from "@/components/yc/YCHeader";

const LAUNCHES = [
  { co: "Modal", title: "GPU compute, by the second", upvotes: 412, batch: "S22" },
  { co: "Mintlify", title: "AI-powered docs that write themselves", upvotes: 387, batch: "W22" },
  { co: "Pylon", title: "B2B customer support that scales", upvotes: 354, batch: "S22" },
  { co: "Trigger.dev", title: "Background jobs without the headache", upvotes: 298, batch: "S22" },
  { co: "Outerbase", title: "The interface for your database", upvotes: 271, batch: "W23" },
  { co: "Rivet", title: "Open-source Backblaze for your data", upvotes: 245, batch: "S22" },
];

export default function LaunchesPage() {
  return (
    <>
      <YCHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-5xl font-bold tracking-tight text-[#1a1a1a]">Launch YC</h1>
          <p className="mt-4 text-lg text-[#525252] max-w-3xl">
            New launches from Y Combinator companies. Like Product Hunt, but for YC startups.
          </p>

          <div className="mt-12 space-y-3">
            {LAUNCHES.map((l) => (
              <Link
                key={l.title}
                href="/launches"
                className="flex items-center gap-5 border border-[#eaeaea] p-5 hover:border-[#FF6600] transition-colors"
              >
                <div className="flex flex-col items-center justify-center w-16">
                  <div className="text-2xl font-bold text-[#FF6600]">▲</div>
                  <div className="text-sm font-semibold text-[#1a1a1a]">{l.upvotes}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="font-bold text-lg text-[#1a1a1a]">{l.co}</div>
                    <div className="text-xs text-[#888] bg-[#f5f5f5] px-2 py-0.5 rounded">{l.batch}</div>
                  </div>
                  <div className="mt-1 text-[#525252]">{l.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <YCFooter />
    </>
  );
}
