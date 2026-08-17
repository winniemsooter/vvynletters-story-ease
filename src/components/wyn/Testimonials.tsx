import { Reveal } from "./Reveal";
import { testimonials } from "@/data/portfolio";

/** Remove <Testimonials /> from Index.tsx until real client quotes are available. */
export const Testimonials = () => {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <p className="eyebrow">Words from clients</p>

        <ul className="mt-14 grid gap-px border-t border-border bg-border md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={i} className="bg-background py-10 md:px-8">
              <Reveal delay={i * 80}>
                <blockquote className="font-display text-xl leading-snug text-muted-foreground md:text-2xl">
                  {t.quote}
                </blockquote>
                <footer className="mt-8">
                  <p className="eyebrow">{t.name}</p>
                  <p className="eyebrow mt-2">{t.role}</p>
                </footer>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
