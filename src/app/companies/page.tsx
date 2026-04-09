import Link from "next/link";
import { YCHeader, YCFooter } from "@/components/yc/YCHeader";

const COMPANIES = [
  { name: "Airbnb", batch: "W09", desc: "Book unique homes and experiences", industry: "Marketplace" },
  { name: "Stripe", batch: "S09", desc: "Online payments infrastructure", industry: "Fintech" },
  { name: "Coinbase", batch: "S12", desc: "Buy and sell cryptocurrency", industry: "Crypto" },
  { name: "Doordash", batch: "S13", desc: "Restaurant delivery on demand", industry: "Marketplace" },
  { name: "Reddit", batch: "S05", desc: "The front page of the internet", industry: "Social" },
  { name: "Instacart", batch: "S12", desc: "Grocery delivery from local stores", industry: "Marketplace" },
  { name: "Dropbox", batch: "S07", desc: "File hosting and sync", industry: "SaaS" },
  { name: "Twitch", batch: "W07", desc: "Live streaming for gamers", industry: "Media" },
  { name: "Gusto", batch: "W12", desc: "Payroll, benefits, and HR for SMBs", industry: "Fintech" },
  { name: "Brex", batch: "W17", desc: "Corporate cards for startups", industry: "Fintech" },
  { name: "Faire", batch: "W17", desc: "Wholesale marketplace for retailers", industry: "B2B" },
  { name: "Rappi", batch: "W16", desc: "On-demand delivery in Latin America", industry: "Marketplace" },
  { name: "Razorpay", batch: "W15", desc: "Payments and banking for businesses", industry: "Fintech" },
  { name: "Cruise", batch: "W14", desc: "Self-driving car technology", industry: "Hardware" },
  { name: "GitLab", batch: "W15", desc: "DevOps platform for the entire SDLC", industry: "Devtools" },
  { name: "Segment", batch: "S11", desc: "Customer data infrastructure", industry: "Devtools" },
  { name: "Webflow", batch: "W13", desc: "Visual website builder", industry: "SaaS" },
  { name: "PagerDuty", batch: "S10", desc: "Real-time incident response", industry: "Devtools" },
  { name: "Algolia", batch: "W14", desc: "Search and discovery API", industry: "Devtools" },
  { name: "Weave", batch: "W14", desc: "Communication platform for SMBs", industry: "SaaS" },
  { name: "Mixpanel", batch: "S09", desc: "Product analytics", industry: "Devtools" },
  { name: "Mashgin", batch: "W15", desc: "Self-checkout with computer vision", industry: "Hardware" },
  { name: "Boom", batch: "W16", desc: "Supersonic commercial aircraft", industry: "Hardware" },
  { name: "Helion", batch: "S14", desc: "Fusion energy", industry: "Hardware" },
];

const INDUSTRIES = ["All", "Fintech", "Marketplace", "Devtools", "SaaS", "B2B", "Hardware", "Social", "Media", "Crypto"];

export default function CompaniesPage() {
  return (
    <>
      <YCHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-5xl font-bold tracking-tight text-[#1a1a1a]">
            YC Startup Directory
          </h1>
          <p className="mt-4 text-lg text-[#525252]">
            5,000+ funded startups. Filter by batch, industry, location, and more.
          </p>

          {/* Filter chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind}
                className="px-4 py-1.5 text-sm border border-[#eaeaea] rounded-full hover:border-[#FF6600] hover:text-[#FF6600] transition-colors"
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search companies…"
              className="w-full md:max-w-md px-4 py-3 border border-[#eaeaea] focus:border-[#FF6600] focus:outline-none text-base"
            />
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPANIES.map((co) => (
              <Link
                key={co.name}
                href="/companies"
                className="block border border-[#eaeaea] p-5 hover:border-[#FF6600] hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="font-bold text-xl text-[#1a1a1a]">{co.name}</div>
                  <div className="text-xs text-[#888] bg-[#f5f5f5] px-2 py-0.5 rounded">{co.batch}</div>
                </div>
                <p className="mt-2 text-sm text-[#525252]">{co.desc}</p>
                <div className="mt-3 inline-block text-xs text-[#FF6600] uppercase tracking-wider">
                  {co.industry}
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
