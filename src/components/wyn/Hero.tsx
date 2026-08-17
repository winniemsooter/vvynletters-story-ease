import heroManuscript from "@/assets/hero-manuscript.jpg";

const credentials = [
  { figure: "40+", label: "Books" },
  { figure: "1,200+", label: "Articles" },
  { figure: "200+", label: "Bylines" },
];

export const Hero = () => {
  return (
    <section id="top" className="relative pt-28 md:pt-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Ghostwriting / Books / Thought Leadership</p>

            <h1 className="display mt-8 text-[3.1rem] leading-[0.95] sm:text-[4.5rem] lg:text-[6.2rem]">
              Your ideas.
              <br />
              Written like they matter.
            </h1>

            <p className="mt-10 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
              I ghostwrite books and thought-leadership content for founders, experts, consultants,
              and business owners who want their ideas to carry further.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <a
                href="#work"
                className="border-b border-foreground pb-1 font-sans text-[0.72rem] uppercase tracking-[0.22em] transition-opacity hover:opacity-60"
              >
                View the Work
              </a>
              <a
                href="#contact"
                className="border-b border-transparent pb-1 font-sans text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                Let's Talk
              </a>
            </div>

            <dl className="mt-20 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
              {credentials.map((c) => (
                <div key={c.label}>
                  <dt className="sr-only">{c.label}</dt>
                  <dd>
                    <span className="display block text-2xl md:text-3xl">{c.figure}</span>
                    <span className="eyebrow mt-2 block">{c.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative">
              <img
                src={heroManuscript}
                alt="Overlapping typeset manuscript pages on warm ivory paper"
                width={1200}
                height={1504}
                className="h-[380px] w-full object-cover sm:h-[520px] lg:h-[680px]"
              />
              <figcaption className="eyebrow mt-4 block">Manuscript in progress — pages 01–04</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
