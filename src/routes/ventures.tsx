import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { ventures } from "@/lib/site-data";
import { Building2, Briefcase, Factory, Scissors, Newspaper, Bike, ArrowUpRight } from "lucide-react";

const iconMap = { Building2, Briefcase, Factory, Scissors, Newspaper, Bike };

export const Route = createFileRoute("/ventures")({
  head: () => ({
    meta: [
      { title: "Business Ventures — Landmark Group" },
      { name: "description", content: "Six sister concerns spanning real estate, industry, media, and mobility." },
    ],
    links: [{ rel: "canonical", href: "/ventures" }],
  }),
  component: VenturesPage,
});

function VenturesPage() {
  return (
    <>
      <PageHero eyebrow="Our Ventures" title="Six companies. One conviction." description="Each Landmark venture leads its category — operating with the autonomy of a specialist and the strength of a group." />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {ventures.map((v, i) => {
            const Icon = iconMap[v.icon as keyof typeof iconMap] ?? Building2;
            return (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl p-10 md:p-12 bg-card border border-border hover:border-gold/50 hover:shadow-elegant transition-all"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_80%_0%,color-mix(in_oklab,var(--color-gold)_15%,transparent),transparent_60%)]" />
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-start justify-between">
                    <div className="size-16 rounded-2xl gradient-gold grid place-items-center shadow-gold">
                      <Icon className="size-7 text-primary" />
                    </div>
                    <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-gold group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-2">{v.tagline}</div>
                    <h3 className="font-display text-3xl">{v.name}</h3>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{v.desc}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    {[
                      { l: "Founded", v: ["2004", "2007", "2010", "2013", "2017", "2019"][i] ?? "—" },
                      { l: "Markets", v: ["BD", "BD/Global", "Global"][i % 3] },
                      { l: "Status", v: "Active" },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                        <div className="font-stat font-semibold text-sm mt-1">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
