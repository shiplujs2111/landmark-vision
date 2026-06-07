import { motion } from "framer-motion";
import { Particles } from "./Particles";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden gradient-hero text-primary-foreground dark:text-foreground">
      <Particles count={20} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--color-gold)_18%,transparent),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 gradient-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">{eyebrow}</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.02] max-w-4xl">{title}</h1>
          {description && <p className="mt-6 text-lg md:text-xl text-primary-foreground/75 dark:text-muted-foreground max-w-2xl leading-relaxed">{description}</p>}
        </motion.div>
      </div>
    </section>
  );
}
