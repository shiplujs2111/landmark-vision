import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface">
      <div className="absolute inset-x-0 top-0 h-px gradient-gold opacity-60" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 lg:grid-cols-4">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md gradient-gold grid place-items-center font-display text-primary text-xl font-bold">L</div>
            <div>
              <div className="font-display text-lg font-semibold">LANDMARK</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Group</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building Bangladesh's future through innovation, excellence, and sustainable development across real estate, industry, and media.
          </p>
          <div className="flex gap-3">
            {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-gold hover:text-gold transition-colors">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base mb-5 text-gold">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[["About","/about"],["Projects","/projects"],["Ventures","/ventures"],["Why Us","/why-us"],["News","/news"]].map(([l,h]) => (
              <li key={h}><Link to={h} className="hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-5 text-gold">Business Ventures</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {["Landmark Town Ltd.","Landmark Consortium","GSSL","Orleans Leather","Projonmo Sangbad","SS Bajaj"].map((v) => (
              <li key={v} className="hover:text-gold transition-colors cursor-pointer">{v}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-5 text-gold">Contact</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin className="size-4 mt-0.5 text-gold flex-shrink-0" /><span>Level-6 & 7, 49 Siddique Tower,<br />Mohakhali C/A, Dhaka-1212, Bangladesh</span></li>
            <li className="flex gap-3"><Phone className="size-4 mt-0.5 text-gold flex-shrink-0" /><a href="tel:+8801981666777" className="hover:text-gold">+880 1981 666 777</a></li>
            <li className="flex gap-3"><Mail className="size-4 mt-0.5 text-gold flex-shrink-0" /><a href="mailto:landmarkldltd@gmail.com" className="hover:text-gold">landmarkldltd@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Landmark Group. All rights reserved.</div>
          <div className="flex gap-6"><a href="#" className="hover:text-gold">Privacy</a><a href="#" className="hover:text-gold">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
