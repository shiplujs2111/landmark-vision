import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { timeline, stats } from "@/lib/site-data";
import { Building, Briefcase, Trees, Cpu } from "lucide-react";

const CityScene = lazy(() => import("@/components/site/CityScene").then(m => ({ default: m.CityScene })));

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Landmark Group" },
      { name: "description", content: "Two decades of building trust, communities, and businesses across Bangladesh." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Two decades of building Bangladesh, brick by brick." description="A diversified conglomerate operating with conviction across real estate, industry, media, and mobility." />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Story</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">Founded on a simple promise: build with integrity.</h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>Landmark Group was founded in 2004 with a singular ambition — to raise the standard of what it means to develop, build, and operate in Bangladesh. Today, two decades on, we operate as a diversified conglomerate spanning six companies and five industries.</p>
            <p>From iconic high-rises in Gulshan and Banani to master-planned communities in Purbachal, from leather goods exported to twenty countries to media platforms shaping public discourse, every Landmark venture is anchored in the same principles: long-term thinking, uncompromising quality, and genuine partnership.</p>
            <p>We measure our work not in square feet or quarterly returns, but in the communities we shape and the trust we keep.</p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeader eyebrow="Mission · Vision · Values" title="What guides us" />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { t: "Our Mission", d: "To create developments and businesses that elevate Bangladesh — economically, socially, and aesthetically." },
              { t: "Our Vision", d: "To be the most trusted diversified group in Bangladesh, recognized internationally for quality and integrity." },
              { t: "Our Values", d: "Integrity, craftsmanship, innovation, sustainability, and respect — for clients, communities, and the country." },
            ].map((x) => (
              <div key={x.t} className="p-8 rounded-2xl bg-card border border-border">
                <div className="size-10 rounded-lg gradient-gold mb-5" />
                <h3 className="font-display text-2xl mb-3">{x.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeader eyebrow="Our Journey" title="Twenty years. Forty milestones." />
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center`}
                >
                  <div className={`md:text-right ${i % 2 ? "md:order-2 md:text-left" : ""} pl-12 md:pl-0`}>
                    <div className="font-stat text-5xl text-gold font-bold">{t.year}</div>
                    <h3 className="font-display text-2xl mt-2">{t.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 max-w-md leading-relaxed">{t.desc}</p>
                  </div>
                  <div className={`hidden md:block ${i % 2 ? "md:order-1" : ""}`} />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-3 rounded-full gradient-gold shadow-gold" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,color-mix(in_oklab,var(--color-gold)_22%,transparent),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeader eyebrow="Signature Section" title="Shaping Skylines. Building Futures." align="left" description="Explore how Landmark Group is reimagining the urban form across Bangladesh — one tower, one community, one venture at a time." />
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { Icon: Building, label: "Residential Projects" },
                { Icon: Briefcase, label: "Commercial Developments" },
                { Icon: Trees, label: "Mixed-Use Communities" },
                { Icon: Cpu, label: "Sustainable Infrastructure" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-xl border border-white/10 glass">
                  <Icon className="size-5 text-gold" />
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-black">
            <Suspense fallback={<div className="w-full h-full grid place-items-center text-gold/70 text-sm">Loading city…</div>}>
              <CityScene />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeader eyebrow="Chairman's Message" title="A word from our leadership" />
          <div className="mt-12 p-10 md:p-14 rounded-3xl border border-gold/30 bg-card shadow-elegant">
            <div className="font-display text-2xl md:text-3xl leading-relaxed italic text-foreground/90">
              "We do not build for the next quarter — we build for the next generation. Every Landmark project is a long-term commitment to the people of Bangladesh, and a pledge to the standards by which our work will be judged decades from now."
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="size-14 rounded-full gradient-gold" />
              <div>
                <div className="font-display text-lg">The Chairman</div>
                <div className="text-sm text-muted-foreground">Landmark Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-stat text-4xl md:text-5xl font-bold text-gold">{s.value}</div>
              <div className="text-xs uppercase tracking-[0.25em] mt-2 text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
