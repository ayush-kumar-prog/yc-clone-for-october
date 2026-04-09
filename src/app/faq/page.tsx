import { YCHeader, YCFooter } from "@/components/yc/YCHeader";

const FAQ = [
  {
    q: "How much does YC invest?",
    a: "YC invests $500,000 in every company we accept. The deal is split into two parts: $125,000 on a post-money SAFE in return for 7% of the company, and $375,000 on an uncapped SAFE with a Most Favored Nation clause.",
  },
  {
    q: "How long is the YC program?",
    a: "Three months. The batch is in person in San Francisco from approximately January–March (Winter batch), April–June (Spring batch), July–September (Summer batch), or October–December (Fall batch).",
  },
  {
    q: "Do I need a co-founder to apply?",
    a: "No. Solo founders are welcome and many YC companies were started by solo founders. However, most successful startups have 2-4 co-founders, and we strongly encourage finding one before or during the program.",
  },
  {
    q: "Do I need a working product to apply?",
    a: "No, but it helps. We accept companies at every stage, from idea to post-revenue. The most important thing is that we believe in the founders.",
  },
  {
    q: "Does YC fund non-US companies?",
    a: "Yes. We fund companies from all over the world and we have founders from over 100 countries. You'll need to be in San Francisco for the duration of the batch.",
  },
  {
    q: "What kinds of companies does YC fund?",
    a: "Almost every kind. Software, hardware, biotech, fintech, climate, robotics, dev tools, consumer apps, marketplaces, and more. We've funded everything from social networks to nuclear fusion.",
  },
  {
    q: "What happens after the batch?",
    a: "Demo Day, where you present to a curated group of investors. Then you continue to have access to YC partners, the YC alumni network, Bookface, and lifetime support for your company.",
  },
  {
    q: "Can I reapply if I'm rejected?",
    a: "Yes, and many companies are accepted on their second or third application. We re-evaluate every application from scratch and don't penalize repeated applications.",
  },
];

export default function FAQPage() {
  return (
    <>
      <YCHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-5xl font-bold tracking-tight text-[#1a1a1a]">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-lg text-[#525252]">
            Everything you wanted to know about Y Combinator. If you don&rsquo;t see your question,
            email us.
          </p>

          <div className="mt-12 space-y-6">
            {FAQ.map((item) => (
              <div key={item.q} className="border-b border-[#eaeaea] pb-6">
                <h3 className="text-xl font-bold text-[#1a1a1a]">{item.q}</h3>
                <p className="mt-2 text-[#525252] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <YCFooter />
    </>
  );
}
