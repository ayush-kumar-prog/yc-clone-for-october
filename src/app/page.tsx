import Link from "next/link";
import { YCHeader, YCFooter } from "@/components/yc/YCHeader";

export default function Home() {
  return (
    <>
      <YCHeader />

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1a1a1a] leading-[1.05]">
            YC turns builders into formidable founders
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#525252] max-w-3xl mx-auto leading-relaxed">
            &ldquo;A formidable person is one who seems like they&rsquo;ll get what they want, regardless of whatever obstacles are in the way.&rdquo;
            <span className="block mt-2 text-sm text-[#888]">— Paul Graham</span>
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Link
              href="/apply"
              className="bg-[#FF6600] text-white px-8 py-4 rounded-sm font-semibold text-base hover:bg-[#e65c00] transition-colors"
            >
              Apply to YC
            </Link>
            <Link
              href="/companies"
              className="border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 rounded-sm font-semibold text-base hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              See companies
            </Link>
          </div>
        </div>
      </section>

      {/* What is YC */}
      <section className="bg-[#fafafa] border-y border-[#eaeaea]">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">What is YC?</h2>
          <p className="text-lg text-[#525252] leading-relaxed">
            In 2005, Y Combinator developed a new model of startup funding. Four times a year we
            invest $500k in a select group of startups. They move to San Francisco for three months,
            where we work intensively with them to get the company into the best possible shape,
            before they present to a large audience of investors on Demo Day.
          </p>
          <p className="mt-4 text-lg text-[#525252] leading-relaxed">
            But YC doesn&rsquo;t end on Demo Day. We and the YC alumni network continue to help
            founders for the life of their company, and beyond.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#FF6600]">$1.3T</div>
              <div className="mt-3 text-sm text-[#525252] uppercase tracking-wider">
                Combined valuation
              </div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#FF6600]">5,000+</div>
              <div className="mt-3 text-sm text-[#525252] uppercase tracking-wider">
                Companies funded
              </div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#FF6600]">200+</div>
              <div className="mt-3 text-sm text-[#525252] uppercase tracking-wider">
                Companies per batch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured companies */}
      <section className="bg-[#fafafa] border-y border-[#eaeaea]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] text-center mb-2">
            Be in the room with the next…
          </h2>
          <p className="text-center text-[#525252] mb-12">
            Some of the most successful YC companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Airbnb", batch: "W09" },
              { name: "Stripe", batch: "S09" },
              { name: "Coinbase", batch: "S12" },
              { name: "Doordash", batch: "S13" },
              { name: "Reddit", batch: "S05" },
              { name: "Instacart", batch: "S12" },
              { name: "Dropbox", batch: "S07" },
              { name: "Twitch", batch: "W07" },
            ].map((co) => (
              <div
                key={co.name}
                className="bg-white border border-[#eaeaea] p-6 hover:border-[#FF6600] transition-colors"
              >
                <div className="font-bold text-lg text-[#1a1a1a]">{co.name}</div>
                <div className="text-xs text-[#888] mt-1">{co.batch}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#FF6600] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">It&rsquo;s never too early to apply.</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We&rsquo;re currently accepting applications for the Summer 2026 batch.
            On-time deadline is May 4 at 8pm PT.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-[#FF6600] px-10 py-4 rounded-sm font-bold text-lg hover:bg-white/90 transition-colors"
          >
            Apply now
          </Link>
        </div>
      </section>

      <YCFooter />
    </>
  );
}
