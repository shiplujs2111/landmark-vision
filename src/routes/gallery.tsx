import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { projects } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Landmark Group" },
      { name: "description", content: "Projects, construction progress, corporate events, and CSR moments." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const tabs = ["Projects", "Construction", "Events", "CSR"] as const;

function Gallery() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Projects");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const images = projects.map((p) => p.image);
  // pseudo-different ordering per tab
  const shuffled = [...images].sort(() => 0).slice(0, 9 + tabs.indexOf(tab));

  return (
    <>
      <PageHero eyebrow="Gallery" title="A visual record of what we build." description="From construction sites to completed landmarks and community moments." />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-12">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium border transition-all",
                  tab === t ? "gradient-gold border-transparent text-primary shadow-gold" : "border-border hover:border-gold/50 hover:text-gold"
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {shuffled.map((src, i) => (
              <motion.button
                key={i + tab}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setLightbox(src)}
                className="mb-5 block w-full overflow-hidden rounded-xl group relative"
                style={{ breakInside: "avoid" }}
              >
                <img src={src} alt="" loading="lazy" className="w-full h-auto group-hover:scale-105 transition-transform duration-[1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 grid place-items-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 size-12 rounded-full glass grid place-items-center text-white" onClick={() => setLightbox(null)}>
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-h-[88vh] max-w-[92vw] rounded-xl shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
