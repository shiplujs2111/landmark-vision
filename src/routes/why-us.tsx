import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Award, Building, Layers, ShieldCheck, Smile, Leaf } from "lucide-react";
import { stats } from "@/lib/site-data";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Landmark Group" },
      { name: "description", content: "20+ years, 50+ projects, 5000+ clients. Why investors and homeowners choose Landmark." },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUs,
});

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      setN(Math.floor(end * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return <div ref={ref} className="font-stat text-5xl md:text-7xl font-bold text-gradient-gold">{n.toLocaleString()}{suffix}</div>;
}

function WhyUs() {
  const reasons = [
    { Icon: Award, t: "20+ Years of Excellence", d: "Two decades of delivery, refinement, and trust earned project after project." },
    { Icon: ShieldCheck, t: "A Trusted Brand", d: "An institutional reputation backed by long-standing client and partner relationships." },
    { Icon: Layers, t: "Diversified Expertise", d: "Cross-industry insight from six companies operating in five sectors." },
    { Icon: Building, t: "Quality Assurance", d: "Rigorous QA, certified processes, and verified materials at every stage." },
    { Icon: Smile, t: "Customer Satisfaction", d: "Lifetime relationships built through service, transparency, and follow-through." },
    { Icon: Leaf, t: "Sustainable Development", d: "Green building practices, energy-efficient design, and responsible operations." },
  ];

  const animatedStats = [
    { n: 5000, suffix: "+", l: "Happy Clients" },
    { n: 50, suffix: "+", l: "Projects Delivered" },
    { n: 100, suffix: "+", l: "Acres Developed" },
    { n: 20, suffix: "+", l: "Years Experience" },
  ];

  return (
    <>
      <PageHero eyebrow="Why Choose Us" title="The Landmark difference, by the numbers." description="A reputation built over twenty years and counting." />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {animatedStats.map((s) => (
            <div key={s.l}>
              <Counter end={s.n} suffix={s.suffix} />
              <div className="text-xs uppercase tracking-[0.3em] mt-3 text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader eyebrow="Our Strengths" title="Six reasons to choose Landmark" />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map(({ Icon, t, d }, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all"
              >
                <div className="size-12 rounded-xl gradient-gold grid place-items-center mb-5 shadow-gold">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeader eyebrow="Testimonial" title="What our clients say" />
          <div className="mt-10 p-10 md:p-14 rounded-3xl border border-gold/30 bg-card text-center shadow-elegant">
            <div className="font-display text-2xl md:text-3xl italic leading-relaxed">
              "Landmark delivered our headquarters on time, on budget, and exactly to the standard they promised. Their professionalism is rare in this market."
            </div>
            <div className="mt-6 text-sm text-muted-foreground">— Managing Director, Tier-1 Corporate Tenant</div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-stat text-4xl font-bold text-gold">{s.value}</div>
              <div className="text-xs uppercase tracking-[0.25em] mt-2 text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
