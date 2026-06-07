import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Landmark Group" },
      { name: "description", content: "Talk to Landmark Group about investments, residences, partnerships, and careers." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

type FormValues = { name: string; email: string; phone: string; subject: string; message: string };

function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's start a conversation." description="Whether you're an investor, future resident, or potential partner — we'd love to hear from you." />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-5">
            <div className="p-8 rounded-3xl glass border border-gold/20">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Head Office</div>
              <h3 className="font-display text-2xl mb-6">Landmark Group</h3>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-4"><MapPin className="size-5 text-gold flex-shrink-0 mt-0.5" /><span className="text-muted-foreground leading-relaxed">Level-6 & 7, 49 Siddique Tower,<br />Mohakhali Commercial Area,<br />Dhaka-1212, Bangladesh</span></li>
                <li className="flex gap-4"><Phone className="size-5 text-gold flex-shrink-0 mt-0.5" /><a href="tel:+8801981666777" className="hover:text-gold transition-colors">+880 1981 666 777</a></li>
                <li className="flex gap-4"><Mail className="size-5 text-gold flex-shrink-0 mt-0.5" /><a href="mailto:landmarkldltd@gmail.com" className="hover:text-gold transition-colors break-all">landmarkldltd@gmail.com</a></li>
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden border border-border h-80">
              <iframe
                title="Landmark Group location"
                src="https://www.google.com/maps?q=Mohakhali%20Commercial%20Area%2C%20Dhaka%201212%2C%20Bangladesh&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 p-8 md:p-10 rounded-3xl border border-border bg-card space-y-5"
          >
            <h3 className="font-display text-3xl">Send us a message</h3>

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full Name" error={errors.name?.message}>
                <input {...register("name", { required: "Required", maxLength: 100 })} className="field" placeholder="Your full name" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input type="email" {...register("email", { required: "Required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" }, maxLength: 255 })} className="field" placeholder="you@example.com" />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input {...register("phone", { required: "Required", maxLength: 25 })} className="field" placeholder="+880" />
              </Field>
              <Field label="Subject" error={errors.subject?.message}>
                <input {...register("subject", { required: "Required", maxLength: 150 })} className="field" placeholder="How can we help?" />
              </Field>
            </div>

            <Field label="Message" error={errors.message?.message}>
              <textarea rows={5} {...register("message", { required: "Required", maxLength: 2000 })} className="field resize-none" placeholder="Tell us about your project, inquiry, or partnership idea…" />
            </Field>

            <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-gold text-primary font-semibold shadow-gold hover:scale-[1.02] transition-transform disabled:opacity-60">
              {sent ? <><CheckCircle2 className="size-4" /> Message sent</> : <>{isSubmitting ? "Sending…" : "Send Message"} <Send className="size-4" /></>}
            </button>
          </motion.form>
        </div>
      </section>

      <style>{`
        .field { width: 100%; padding: 0.85rem 1rem; border-radius: 0.75rem; background: color-mix(in oklab, var(--color-muted) 50%, transparent); border: 1px solid var(--color-border); outline: none; transition: all .2s; font-size: 0.95rem; color: var(--color-foreground); }
        .field:focus { border-color: var(--color-gold); box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-gold) 25%, transparent); }
        .field::placeholder { color: var(--color-muted-foreground); }
      `}</style>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      {children}
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
