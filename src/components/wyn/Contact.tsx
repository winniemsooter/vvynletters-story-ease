import { useState } from "react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { CONTACT_EMAIL } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Please add a valid email").max(255),
  company: z.string().trim().max(150).optional(),
  need: z.string().trim().max(300).optional(),
  projectType: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Please add a short message").max(2000),
});

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 font-sans text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-0";

const labelClass = "eyebrow block";

export const Contact = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const values = Object.fromEntries(form.entries());
    const parsed = schema.safeParse(values);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        next[String(i.path[0])] = i.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    const d = parsed.data;
    const body = [
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Company / Role: ${d.company ?? "-"}`,
      `Needs help writing: ${d.need ?? "-"}`,
      `Project type: ${d.projectType ?? "-"}`,
      "",
      d.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Ghostwriting enquiry — ${d.name}`
    )}&body=${encodeURIComponent(body)}`;

    toast({ title: "Enquiry ready to send", description: "Your email client is opening." });
  };

  return (
    <section id="contact" className="border-t border-border bg-foreground py-24 text-background md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="display text-[2.8rem] leading-[1.02] md:text-[5rem]">
              You bring the ideas.
              <br />
              I'll bring the words.
            </h2>
            <p className="mt-10 max-w-lg font-sans text-lg leading-relaxed text-background/70">
              For books, thought leadership, and high-value content, let's talk about what you're
              trying to say—and how we can make it worth reading.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-12 inline-block border-b border-background pb-1 font-display text-2xl transition-opacity hover:opacity-70 md:text-3xl"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <p className="eyebrow text-background/60">Start a conversation</p>
            <form onSubmit={onSubmit} noValidate className="mt-8 space-y-8 text-background">
              {[
                { id: "name", label: "Name", type: "text", required: true },
                { id: "email", label: "Email", type: "email", required: true },
                { id: "company", label: "Company / Role", type: "text" },
                { id: "need", label: "What do you need help writing?", type: "text" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className={`${labelClass} text-background/60`}>
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required={f.required}
                    maxLength={300}
                    className={`${fieldClass} border-background/25 text-background focus:border-background`}
                  />
                  {errors[f.id] && (
                    <p className="mt-2 font-sans text-xs text-background/70">{errors[f.id]}</p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="projectType" className={`${labelClass} text-background/60`}>
                  Project type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  defaultValue="Book"
                  className={`${fieldClass} border-background/25 text-background focus:border-background [&>option]:text-foreground`}
                >
                  <option>Book</option>
                  <option>Thought leadership</option>
                  <option>Business articles</option>
                  <option>LinkedIn / personal brand</option>
                  <option>Editorial & content</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={`${labelClass} text-background/60`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  maxLength={2000}
                  className={`${fieldClass} resize-none border-background/25 text-background focus:border-background`}
                />
                {errors.message && (
                  <p className="mt-2 font-sans text-xs text-background/70">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="border-b border-background pb-1 font-sans text-[0.72rem] uppercase tracking-[0.22em] transition-opacity hover:opacity-60"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
