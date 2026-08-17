import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SiteNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:h-20 md:px-10"
      >
        <a href="#top" className="flex items-center gap-3">
          <img src="/wl-logo.png" alt="Wynletters monogram" className="h-7 w-7 object-contain" width={28} height={28} />
          <span className="font-sans text-[0.78rem] font-medium uppercase tracking-[0.28em]">Wynletters</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-[0.8rem] tracking-[0.06em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden border-b border-foreground pb-1 font-sans text-[0.68rem] uppercase tracking-[0.22em] transition-opacity hover:opacity-60 md:inline-block"
        >
          Let's Talk
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="font-sans text-[0.68rem] uppercase tracking-[0.22em] md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-8 pt-4 md:hidden">
          <ul className="space-y-4">
            {[...links, { label: "Let's Talk", href: "#contact" }].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-2xl"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
