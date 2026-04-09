import Link from "next/link";
import { YCHeader, YCFooter } from "@/components/yc/YCHeader";

const ESSAYS = [
  { author: "Paul Graham", title: "How to Get Startup Ideas", time: "12 min read" },
  { author: "Paul Graham", title: "Do Things That Don't Scale", time: "8 min read" },
  { author: "Paul Graham", title: "Maker's Schedule, Manager's Schedule", time: "5 min read" },
  { author: "Sam Altman", title: "Startup Playbook", time: "30 min read" },
  { author: "Jessica Livingston", title: "What Founders Do", time: "10 min read" },
  { author: "Michael Seibel", title: "How to Talk to Users", time: "7 min read" },
  { author: "Dalton Caldwell", title: "Default Alive or Default Dead?", time: "6 min read" },
  { author: "Aaron Epstein", title: "How to Apply and Succeed at Y Combinator", time: "9 min read" },
];

export default function LibraryPage() {
  return (
    <>
      <YCHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-5xl font-bold tracking-tight text-[#1a1a1a]">
            The YC Library
          </h1>
          <p className="mt-4 text-lg text-[#525252] max-w-3xl">
            Essays, talks, podcasts and videos to help you start and grow your startup. Free
            forever, no signup required.
          </p>

          <h2 className="mt-16 text-2xl font-bold text-[#1a1a1a]">Essential reading</h2>
          <div className="mt-6 divide-y divide-[#eaeaea]">
            {ESSAYS.map((essay) => (
              <Link
                key={essay.title}
                href="/library"
                className="flex items-center justify-between py-5 hover:text-[#FF6600] transition-colors"
              >
                <div>
                  <div className="text-xl font-semibold text-[#1a1a1a] hover:text-[#FF6600] transition-colors">
                    {essay.title}
                  </div>
                  <div className="mt-1 text-sm text-[#888]">{essay.author}</div>
                </div>
                <div className="text-sm text-[#888]">{essay.time}</div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-[#fafafa] border border-[#eaeaea] p-8">
            <h3 className="text-2xl font-bold text-[#1a1a1a]">Startup School</h3>
            <p className="mt-3 text-[#525252]">
              Free online program with lectures from top YC partners and successful founders.
              Self-paced. Over 40 hours of content.
            </p>
            <Link
              href="/library"
              className="mt-5 inline-block bg-[#FF6600] text-white px-6 py-3 font-semibold hover:bg-[#e65c00] transition-colors"
            >
              Start learning
            </Link>
          </div>
        </div>
      </section>
      <YCFooter />
    </>
  );
}
