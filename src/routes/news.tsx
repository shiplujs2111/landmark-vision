import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { articles } from "@/lib/site-data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights — Landmark Group" },
      { name: "description", content: "Perspectives on Bangladesh real estate, investment, and urban development." },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: News,
});

function News() {
  const [feat, ...rest] = articles;
  return (
    <>
      <PageHero eyebrow="News & Insights" title="Perspectives on building the next Bangladesh." description="Ideas, analysis, and stories from across our group and industry." />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid lg:grid-cols-2 gap-10 items-center mb-20"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={feat.image} alt={feat.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Featured · {feat.category}</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight group-hover:text-gold transition-colors">{feat.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{feat.excerpt}</p>
              <div className="mt-6 text-sm text-muted-foreground">{feat.date}</div>
            </div>
          </motion.a>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <motion.a
                key={a.slug}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.06 }}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-gold/40 transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={a.image} alt={a.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-gold">
                    <span>{a.category}</span>
                    <span className="text-muted-foreground">{a.date}</span>
                  </div>
                  <h3 className="font-display text-xl mt-3 group-hover:text-gold transition-colors">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article <ArrowUpRight className="size-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
