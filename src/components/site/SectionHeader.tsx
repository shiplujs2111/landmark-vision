import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`max-w-3xl ${alignCls}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 gradient-gold" />
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">{eyebrow}</span>
          <span className="h-px w-8 gradient-gold" />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">{title}</h2>
      {description && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>}
    </motion.div>
  );
}
