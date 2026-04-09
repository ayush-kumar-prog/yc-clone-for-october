import Link from "next/link";
import { YCHeader, YCFooter } from "@/components/yc/YCHeader";

const POSTS = [
  {
    title: "Announcing the Summer 2026 batch",
    excerpt: "We accepted 247 companies into the Summer 2026 batch. Here's what we look for.",
    author: "Garry Tan",
    date: "April 1, 2026",
  },
  {
    title: "How to do a Demo Day",
    excerpt: "Tactical advice on the most important 2 minutes of your YC experience.",
    author: "Michael Seibel",
    date: "March 28, 2026",
  },
  {
    title: "Requests for Startups: AI for the physical world",
    excerpt: "We want more YC companies building AI for manufacturing, energy, and logistics.",
    author: "Diana Hu",
    date: "March 15, 2026",
  },
  {
    title: "The state of biotech in YC",
    excerpt: "We've funded over 200 biotech companies. Here's what we've learned.",
    author: "Surbhi Sarna",
    date: "March 9, 2026",
  },
  {
    title: "Lessons from a $100M acquisition",
    excerpt: "A YC founder shares the playbook from negotiating their exit.",
    author: "Tom Blomfield",
    date: "February 27, 2026",
  },
  {
    title: "Why your first 10 customers matter more than your next 1,000",
    excerpt: "On obsessing over the small details that create real word of mouth.",
    author: "Dalton Caldwell",
    date: "February 14, 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <YCHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-5xl font-bold tracking-tight text-[#1a1a1a]">YC Blog</h1>
          <p className="mt-4 text-lg text-[#525252]">
            Updates, advice, and stories from Y Combinator and the YC community.
          </p>

          <div className="mt-12 space-y-8">
            {POSTS.map((post) => (
              <Link
                key={post.title}
                href="/blog"
                className="block border-b border-[#eaeaea] pb-8 hover:text-[#FF6600] transition-colors group"
              >
                <h2 className="text-2xl font-bold text-[#1a1a1a] group-hover:text-[#FF6600] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-[#525252]">{post.excerpt}</p>
                <div className="mt-3 text-sm text-[#888]">
                  {post.author} · {post.date}
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
