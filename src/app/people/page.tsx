import { YCHeader, YCFooter } from "@/components/yc/YCHeader";

const PARTNERS = [
  { name: "Garry Tan", role: "President & CEO", co: "Posterous (S08), Initialized" },
  { name: "Michael Seibel", role: "Group Partner", co: "Justin.tv, Twitch, Socialcam" },
  { name: "Dalton Caldwell", role: "Group Partner", co: "imeem, App.net" },
  { name: "Aaron Epstein", role: "Group Partner", co: "Creative Market" },
  { name: "Tom Blomfield", role: "Group Partner", co: "Monzo, GoCardless" },
  { name: "Diana Hu", role: "Group Partner", co: "Escher Reality (W17)" },
  { name: "Pete Koomen", role: "Visiting Group Partner", co: "Optimizely" },
  { name: "Harj Taggar", role: "Group Partner", co: "Auctomatic, Triplebyte" },
  { name: "Brad Flora", role: "Group Partner", co: "Perfect Audience" },
];

export default function PeoplePage() {
  return (
    <>
      <YCHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-5xl font-bold tracking-tight text-[#1a1a1a]">
            People
          </h1>
          <p className="mt-4 text-lg text-[#525252] max-w-3xl">
            All YC partners were founders themselves. They&rsquo;ve started companies, raised money,
            built teams, and exited. Now they help the next generation do the same.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="border border-[#eaeaea] p-6 hover:border-[#FF6600] transition-colors"
              >
                <div className="w-16 h-16 bg-[#FF6600] text-white flex items-center justify-center font-bold text-xl rounded-full">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="mt-4 text-xl font-bold text-[#1a1a1a]">{p.name}</div>
                <div className="mt-1 text-sm text-[#FF6600] uppercase tracking-wider">{p.role}</div>
                <div className="mt-2 text-sm text-[#525252]">Previously: {p.co}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <YCFooter />
    </>
  );
}
