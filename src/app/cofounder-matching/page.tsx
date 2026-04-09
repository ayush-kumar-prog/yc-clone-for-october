import Link from "next/link";
import { YCHeader, YCFooter } from "@/components/yc/YCHeader";

export default function CoFounderMatchingPage() {
  return (
    <>
      <YCHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1a1a1a]">
            Find your co-founder
          </h1>
          <p className="mt-6 text-xl text-[#525252] max-w-3xl mx-auto">
            YC&rsquo;s Co-Founder Matching platform helps you find the perfect partner to start your
            company with. Free, fast, and used by thousands of founders every month.
          </p>
          <div className="mt-10">
            <Link
              href="/cofounder-matching"
              className="inline-block bg-[#FF6600] text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-[#e65c00] transition-colors"
            >
              Create your profile
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] border-y border-[#eaeaea]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold text-[#1a1a1a] text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Build your profile",
                body: "Tell us about your skills, interests, and what you want to build.",
              },
              {
                step: "02",
                title: "Browse founders",
                body: "Filter by skills, location, and the kind of company you want to start.",
              },
              {
                step: "03",
                title: "Connect",
                body: "Send a match request. If they accept, you can chat and explore working together.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white border border-[#eaeaea] p-6">
                <div className="text-4xl font-bold text-[#FF6600]">{s.step}</div>
                <div className="mt-4 text-xl font-bold text-[#1a1a1a]">{s.title}</div>
                <p className="mt-2 text-[#525252]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="text-6xl font-bold text-[#FF6600]">50,000+</div>
          <div className="mt-2 text-[#525252] uppercase tracking-wider text-sm">founders matched</div>
        </div>
      </section>
      <YCFooter />
    </>
  );
}
