import { Reveal } from "./Reveal";

const principles = [
  { label: "Voice", copy: "I study how you speak, explain, argue, and tell stories." },
  { label: "Clarity", copy: "Complex ideas become easier to understand without becoming simplistic." },
  { label: "Credibility", copy: "Every piece should strengthen the reader's perception of your expertise." },
];

export const Voice = () => {
  return (
    <section className="border-t border-border bg-foreground py-24 text-background md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="display max-w-4xl text-[2.6rem] leading-[1.02] md:text-[5rem]">
            The words should sound like you.
          </h2>
        </Reveal>
        <p className="mt-10 max-w-2xl font-sans text-lg leading-relaxed text-background/70">
          Ghostwriting isn't about replacing someone's voice with mine. It's about understanding how
          they think well enough to write in a way that feels unmistakably theirs.
        </p>

        <dl className="mt-20 grid gap-12 border-t border-background/20 pt-12 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.label} delay={i * 90}>
              <dt className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-background/60">
                {p.label}
              </dt>
              <dd className="mt-4 font-display text-2xl leading-snug md:text-[1.75rem]">{p.copy}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
};
