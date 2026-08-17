import { Reveal } from "./Reveal";
import { workProjects } from "@/data/portfolio";

export const Work = () => {
  return (
    <section id="work" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 className="display mt-6 text-[2.6rem] leading-none md:text-[4rem]">Selected work</h2>
          </div>
          <p className="max-w-sm font-sans text-base text-muted-foreground md:text-right">
            A selection of the work I write, shape, and refine.
          </p>
        </div>

        <ol className="mt-16 border-t border-border">
          {workProjects.map((p, i) => (
            <li key={p.id} className="border-b border-border">
              <Reveal>
                <article className="group grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14">
                  <div className="md:col-span-1">
                    <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="md:col-span-3">
                    <p className="eyebrow">{p.category}</p>
                    <p className="mt-3 font-sans text-sm text-muted-foreground">{p.client}</p>
                  </div>

                  <div className="md:col-span-5">
                    <h3 className="display text-[1.9rem] leading-tight md:text-[2.5rem]">{p.title}</h3>
                    <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    {p.image && (
                      <img
                        src={p.image}
                        alt={`${p.title} — editorial thumbnail`}
                        loading="lazy"
                        className="mt-6 h-56 w-full max-w-md object-cover"
                      />
                    )}
                  </div>

                  <div className="md:col-span-3 md:text-right">
                    <p className="font-sans text-sm text-muted-foreground">{p.typeOfWork}</p>
                    {p.wordCount && (
                      <p className="eyebrow mt-3">{p.wordCount}</p>
                    )}
                    <a
                      href={p.sampleUrl ?? "#contact"}
                      {...(p.sampleUrl?.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="mt-6 inline-block border-b border-foreground pb-1 font-sans text-[0.68rem] uppercase tracking-[0.22em] transition-opacity hover:opacity-60"
                    >
                      {p.ctaLabel ?? "Read Sample"}
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
