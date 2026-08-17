import { Reveal } from "./Reveal";

const figures = [
  { figure: "40+", label: "Books ghostwritten" },
  { figure: "1,200+", label: "Articles for brands & clients" },
  { figure: "200+", label: "Articles under my own name" },
];

export const Proof = () => {
  return (
    <section className="mt-28 border-t border-border py-20 md:mt-40 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <h2 className="display max-w-4xl text-[2.4rem] leading-[1.02] sm:text-[3.4rem] lg:text-[4.4rem]">
            40+ books.
            <br />
            1,200+ articles.
            <br />
            One writing standard.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-10 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
            I've ghostwritten more than 40 books ranging from approximately 20,000 to 80,000 words,
            alongside more than 1,200 articles for brands and clients. I've also published more than
            200 articles under my own name.
          </p>
        </Reveal>

        <dl className="mt-20 grid gap-12 border-t border-border pt-12 md:grid-cols-3">
          {figures.map((f, i) => (
            <Reveal key={f.label} delay={i * 90}>
              <dt className="display text-[3.4rem] leading-none md:text-[5rem]">{f.figure}</dt>
              <dd className="eyebrow mt-4">{f.label}</dd>
            </Reveal>
          ))}
        </dl>

        <p className="mt-14 max-w-xl font-sans text-sm text-muted-foreground">
          Experience across long-form publishing, business writing, thought leadership, and digital
          content.
        </p>
      </div>
    </section>
  );
};
