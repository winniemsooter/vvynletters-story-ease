import { Reveal } from "./Reveal";

const steps = [
  { n: "01", label: "Brief" },
  { n: "02", label: "Research" },
  { n: "03", label: "Draft" },
  { n: "04", label: "Revision" },
  { n: "05", label: "Final delivery" },
];

const inputs = [
  "Voice notes",
  "Interviews",
  "Existing documents",
  "Rough ideas",
  "Research",
  "Previous writing",
];

export const Process = () => {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <p className="eyebrow">Process</p>
        <h2 className="display mt-6 max-w-3xl text-[2.4rem] leading-none md:text-[4rem]">
          From conversation to copy.
        </h2>

        <ol className="mt-16 grid gap-px border-t border-border bg-border md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.n} className="bg-background px-0 py-8 md:px-6">
              <Reveal delay={i * 70}>
                <span className="display block text-4xl md:text-5xl">{s.n}</span>
                <span className="eyebrow mt-4 block">{s.label}</span>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-8 border-t border-border pt-12 md:grid-cols-12">
          <p className="font-sans text-base leading-relaxed text-muted-foreground md:col-span-5">
            You don't need a draft, an outline, or a writing habit. Most projects start with a
            conversation and whatever material already exists.
          </p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 md:col-span-6 md:col-start-7">
            {inputs.map((item) => (
              <li key={item} className="eyebrow border-b border-border pb-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
