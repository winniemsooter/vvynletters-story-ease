import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <section id="about" className="border-t border-border bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">About</p>
            <h2 className="display mt-6 text-[2.4rem] leading-none md:text-[3.6rem]">
              Behind the words.
            </h2>
          </div>

          <Reveal className="md:col-span-7 md:col-start-6">
            <p className="font-display text-2xl leading-snug md:text-[2rem]">
              I'm a ghostwriter and business writer focused on turning expertise into writing people
              actually want to read.
            </p>
            <p className="mt-8 font-sans text-lg leading-relaxed text-muted-foreground">
              Over the years, I've worked across books, articles, business content, and thought
              leadership—learning how to move between a client's voice, an audience's expectations,
              and the clarity an idea deserves.
            </p>
            <div className="mt-12 border-t border-border pt-6">
              <p className="eyebrow">Based remotely</p>
              <p className="eyebrow mt-3">Available for selected ghostwriting projects</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
