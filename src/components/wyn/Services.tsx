import { Reveal } from "./Reveal";
import { services } from "@/data/portfolio";

export const Services = () => {
  return (
    <section id="services" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <p className="eyebrow">Services</p>
        <h2 className="display mt-6 text-[2.6rem] leading-none md:text-[4rem]">What I write</h2>

        <ol className="mt-16 border-t border-border">
          {services.map((s) => (
            <li key={s.label} className="border-b border-border">
              <Reveal>
                <div className="grid gap-3 py-9 md:grid-cols-12 md:gap-8">
                  <h3 className="eyebrow md:col-span-4">{s.label}</h3>
                  <p className="font-sans text-lg leading-relaxed text-muted-foreground md:col-span-7">
                    {s.copy}
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
