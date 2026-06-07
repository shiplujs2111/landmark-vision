import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { projects } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Landmark Group" },
      { name: "description", content: "Signature residential, commercial, and mixed-use developments across Bangladesh." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const filters = ["All", "Residential", "Commercial", "Mixed-Use", "Ongoing", "Completed"] as const;

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = useMemo(() => {
    if (active === "All") return projects;
    if (active === "Ongoing" || active === "Completed") return projects.filter((p) => p.status === active);
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <PageHero eyebrow="Our Portfolio" title="Twelve landmark developments and counting." description="Browse our portfolio of residential, commercial, and mixed-use projects across Dhaka and beyond." />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium border transition-all",
                  active === f
                    ? "gradient-gold border-transparent text-primary shadow-gold"
                    : "border-border hover:border-gold/50 hover:text-gold"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((p, i) => (
                <motion.article
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: (i % 6) * 0.05, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-gold/40 hover:shadow-elegant transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest glass text-white">{p.status}</div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-gold text-primary font-semibold">{p.category}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl">{p.name}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><MapPin className="size-3 text-gold" /> {p.location}</span>
                      <span className="inline-flex items-center gap-1"><Calendar className="size-3 text-gold" /> {p.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed line-clamp-2">{p.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.amenities.slice(0, 3).map((a) => (
                        <span key={a} className="text-[11px] px-2.5 py-1 rounded-full border border-border">{a}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
