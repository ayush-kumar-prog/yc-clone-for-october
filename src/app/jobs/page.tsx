import Link from "next/link";
import { YCHeader, YCFooter } from "@/components/yc/YCHeader";

const JOBS = [
  { co: "Stripe", role: "Senior Backend Engineer", loc: "SF, NY, London", type: "Full-time", salary: "$200k–$320k + equity" },
  { co: "Brex", role: "Product Designer", loc: "Remote (US)", type: "Full-time", salary: "$170k–$230k + equity" },
  { co: "Faire", role: "Founding ML Engineer", loc: "SF Bay Area", type: "Full-time", salary: "$220k–$340k + equity" },
  { co: "Webflow", role: "Frontend Engineer (React)", loc: "Remote (Worldwide)", type: "Full-time", salary: "$150k–$220k + equity" },
  { co: "Mixpanel", role: "Data Engineer", loc: "Hybrid SF", type: "Full-time", salary: "$180k–$260k + equity" },
  { co: "Algolia", role: "Solutions Architect", loc: "NY, Paris", type: "Full-time", salary: "$160k–$220k + equity" },
  { co: "Boom", role: "Aerospace Test Engineer", loc: "Denver, CO", type: "Full-time", salary: "$140k–$200k + equity" },
  { co: "Helion", role: "Plasma Physicist", loc: "Everett, WA", type: "Full-time", salary: "$180k–$280k + equity" },
  { co: "PagerDuty", role: "Site Reliability Engineer", loc: "Remote (US)", type: "Full-time", salary: "$170k–$240k + equity" },
  { co: "Razorpay", role: "Director of Product", loc: "Bangalore", type: "Full-time", salary: "₹1.2cr–₹2cr + equity" },
];

export default function JobsPage() {
  return (
    <>
      <YCHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-5xl font-bold tracking-tight text-[#1a1a1a]">
            Work at a YC startup
          </h1>
          <p className="mt-4 text-lg text-[#525252] max-w-3xl">
            Explore jobs at 5,000+ funded startups. From seed-stage teams to public companies, all
            backed by Y Combinator.
          </p>

          <div className="mt-8 flex gap-3 flex-wrap">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 min-w-[200px] px-4 py-3 border border-[#eaeaea] focus:border-[#FF6600] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Location"
              className="flex-1 min-w-[200px] px-4 py-3 border border-[#eaeaea] focus:border-[#FF6600] focus:outline-none"
            />
            <button className="bg-[#FF6600] text-white px-8 py-3 font-semibold hover:bg-[#e65c00] transition-colors">
              Search
            </button>
          </div>

          <div className="mt-10 space-y-3">
            {JOBS.map((job) => (
              <Link
                key={`${job.co}-${job.role}`}
                href="/jobs"
                className="block border border-[#eaeaea] p-5 hover:border-[#FF6600] transition-colors"
              >
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div>
                    <div className="text-xs text-[#888] uppercase tracking-wider">{job.co}</div>
                    <div className="text-xl font-bold text-[#1a1a1a] mt-1">{job.role}</div>
                    <div className="mt-2 text-sm text-[#525252]">
                      {job.loc} · {job.type}
                    </div>
                  </div>
                  <div className="text-sm text-[#FF6600] font-semibold">{job.salary}</div>
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
