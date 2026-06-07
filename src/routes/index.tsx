import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Award, Globe2, Leaf, ChevronRight } from "lucide-react";
import { Suspense, lazy } from "react";
import heroImg from "@/assets/hero-skyline.jpg";
import { Particles } from "@/components/site/Particles";
import { SectionHeader } from "@/components/site/SectionHeader";
import { projects, stats, ventures } from "@/lib/site-data";

const CityScene = lazy(() => import("@/components/site/CityScene").then(m => ({ default: m.CityScene })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Landmark Group — Building Bangladesh's Future" },
      { name: "description", content: "Diversified Bangladeshi conglomerate in real estate, construction, leather, media, and automotive." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <FeaturedProjects />
      <CityShowcase />
      <VenturesPreview />
      <StatsBand />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,color-mix(in_oklab,var(--color-gold)_22%,transparent),transparent_55%)]" />
      <Particles count={28} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 text-white">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 gradient-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Landmark Group · Since 2004</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.02] max-w-5xl">
            Building Bangladesh's Future Through{" "}
            <span className="text-gradient-gold">Innovation, Excellence,</span> and Sustainable Development
          </h1>
          <p className="mt-7 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
            Creating iconic developments and diversified business solutions that transform communities and inspire growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/projects" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-gold text-primary font-semibold shadow-gold hover:scale-[1.03] transition-transform">
              Explore Projects <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/30 backdrop-blur hover:border-gold hover:text-gold transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 max-w-4xl">
          {stats.map((s) => (
            <div key={s.label} className="glass p-5 md:p-7 bg-black/30">
              <div className="font-stat text-3xl md:text-4xl font-bold text-gold">{s.value}</div>
              <div className="text-xs uppercase tracking-widest mt-1 text-white/70">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest uppercase animate-float">Scroll</div>
    </section>
  );
}

function Pillars() {
  const items = [
    { Icon: Building2, title: "Iconic Real Estate", desc: "Residential, commercial, and mixed-use developments that shape city skylines." },
    { Icon: Award, title: "Quality Without Compromise", desc: "Award-winning craftsmanship, certified processes, and uncompromising materials." },
    { Icon: Globe2, title: "Diversified Expertise", desc: "Six sister concerns spanning real estate, industry, media, and mobility." },
    { Icon: Leaf, title: "Sustainable Growth", desc: "LEED-aligned design, green communities, and responsible business practice." },
  ];
  return (
    <section className="relative py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Why Landmark" title="A foundation built on conviction" description="Two decades of building trust through every brick, every brand, every relationship." />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-gold/40 hover:shadow-elegant transition-all"
            >
              <div className="size-12 rounded-xl gradient-gold grid place-items-center mb-6 shadow-gold">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = projects.slice(0, 6);
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 gradient-gold" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Featured</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold max-w-2xl">Signature developments<br />across Bangladesh</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">View all projects <ArrowRight className="size-4" /></Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-gold/40 transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              </div>
              <div className="absolute top-5 left-5 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest glass text-white">{p.status}</div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">{p.category}</div>
                <h3 className="font-display text-2xl">{p.name}</h3>
                <div className="text-sm text-white/70 mt-1">{p.location}</div>
                <div className="mt-4 flex items-center gap-2 text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ChevronRight className="size-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CityShowcase() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,color-mix(in_oklab,var(--color-gold)_25%,transparent),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 gradient-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Our Promise</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">Shaping Skylines.<br /><span className="text-gradient-gold">Building Futures.</span></h2>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-lg">
            From Gulshan to Purbachal, we design integrated communities and corporate landmarks that endure. Every project is an act of long-term commitment.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">Our story <ArrowRight className="size-4" /></Link>
        </div>
        <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-elegant bg-black">
          <Suspense fallback={<div className="w-full h-full grid place-items-center text-gold/70 text-sm">Loading city…</div>}>
            <CityScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function VenturesPreview() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader eyebrow="Our Group" title="Six ventures. One vision." description="A family of companies advancing Bangladesh across industries." />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ventures.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-7 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all"
            >
              <div className="text-[11px] uppercase tracking-[0.25em] text-gold">{v.tagline}</div>
              <h3 className="font-display text-2xl mt-2">{v.name}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/ventures" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">Discover all ventures <ArrowRight className="size-4" /></Link>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="relative py-20 gradient-hero text-primary-foreground dark:text-foreground overflow-hidden">
      <Particles count={15} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-stat text-4xl md:text-6xl font-bold text-gold">{s.value}</div>
            <div className="text-xs uppercase tracking-[0.25em] mt-2 text-primary-foreground/70 dark:text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center bg-card border border-gold/30 shadow-elegant">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--color-gold)_18%,transparent),transparent_60%)]" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Let's build what's next.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Talk to our investment, residence, and partnership teams about your next project with Landmark Group.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-gold text-primary font-semibold shadow-gold hover:scale-[1.03] transition-transform">
              Start a Conversation <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
