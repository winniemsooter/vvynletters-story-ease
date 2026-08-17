import { Reveal } from "./Reveal";
import { bookProcess } from "@/data/portfolio";

export const Books = () => {
  return (
    <section className="border-t border-border bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="display max-w-3xl text-[2.4rem] leading-[1.03] md:text-[3.8rem]">
            Books, from first idea to final manuscript.
          </h2>
        </Reveal>
        <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
          I work with clients who have the knowledge, experience, or perspective for a book—but not
          the time, structure, or writing process to turn it into one.
        </p>

        <ol className="mt-16 border-t border-border">
          {bookProcess.map((step) => (
            <li key={step.n} className="border-b border-border">
              <Reveal>
                <div className="grid gap-3 py-8 md:grid-cols-12 md:gap-8">
                  <span className="eyebrow md:col-span-2">{step.n} — {step.label}</span>
                  <p className="font-sans text-base leading-relaxed text-muted-foreground md:col-span-8 md:col-start-4">
                    {step.copy}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
