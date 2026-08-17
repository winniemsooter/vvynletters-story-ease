import { CONTACT_EMAIL } from "@/data/portfolio";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-sans text-[0.78rem] font-medium uppercase tracking-[0.28em]">
              Wynletters
            </p>
            <p className="eyebrow mt-4">Ghostwriting / Books / Thought Leadership</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4 md:col-start-9">
            <ul className="grid grid-cols-2 gap-3">
              {[
                { label: "Work", href: "#work" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Email", href: `mailto:${CONTACT_EMAIL}` },
                { label: "LinkedIn", href: "https://www.linkedin.com/" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="eyebrow transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="eyebrow mt-16 border-t border-border pt-6">
          Copyright {new Date().getFullYear()} Wynletters
        </p>
      </div>
    </footer>
  );
};
