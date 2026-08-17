/**
 * Portfolio content source.
 * Replace these placeholder entries with real projects — no component edits needed.
 * `image` accepts an imported asset or a URL string; omit it for a text-only entry.
 */

export type WorkCategory =
  | "BOOKS"
  | "BUSINESS & THOUGHT LEADERSHIP"
  | "ARTICLES"
  | "LINKEDIN / PERSONAL BRAND"
  | "EDITORIAL";

export interface WorkProject {
  id: string;
  title: string;
  category: WorkCategory;
  client: string;
  description: string;
  typeOfWork: string;
  wordCount?: string;
  image?: string;
  /** Internal sample text or an external URL. */
  sampleUrl?: string;
  ctaLabel?: string;
}

export const workProjects: WorkProject[] = [
  {
    id: "book-ghostwriting",
    title: "A Business Book for a Second-Time Founder",
    category: "BOOKS",
    client: "Founder / Private client",
    description:
      "A full-length manuscript built from interviews, internal documents, and a decade of operating experience.",
    typeOfWork: "Book ghostwriting — structure, drafting, revision",
    wordCount: "62,000 words",
    ctaLabel: "Read Sample",
  },
  {
    id: "founder-thought-leadership",
    title: "Founder Thought Leadership Programme",
    category: "BUSINESS & THOUGHT LEADERSHIP",
    client: "Technology company",
    description:
      "A running series of essays that turned one founder's operating philosophy into a public point of view.",
    typeOfWork: "Essays, opinion pieces, editorial planning",
    wordCount: "1,400–2,200 words per piece",
    ctaLabel: "Read Sample",
  },
  {
    id: "business-article-series",
    title: "Business Article Series",
    category: "ARTICLES",
    client: "B2B brand",
    description:
      "Research-driven articles written for a professional readership, produced on a monthly publishing rhythm.",
    typeOfWork: "Research, interviews, drafting, editing",
    wordCount: "12 articles",
    ctaLabel: "Read Sample",
  },
  {
    id: "personal-brand-content",
    title: "Personal Brand Content for an Executive",
    category: "LINKEDIN / PERSONAL BRAND",
    client: "Executive / Consultant",
    description:
      "Short-form writing that sounds like the person behind the profile — considered, specific, never generic.",
    typeOfWork: "LinkedIn ghostwriting, narrative positioning",
    wordCount: "Ongoing engagement",
    ctaLabel: "View Project",
  },
  {
    id: "long-form-article",
    title: "Long-form Feature Article",
    category: "EDITORIAL",
    client: "Independent publication",
    description:
      "A reported feature written under my own byline, structured around a single argument and its evidence.",
    typeOfWork: "Reporting, structure, long-form writing",
    wordCount: "4,800 words",
    ctaLabel: "Read Sample",
  },
  {
    id: "manuscript-project",
    title: "Memoir-Adjacent Manuscript",
    category: "BOOKS",
    client: "Expert / Private client",
    description:
      "Lived experience and professional expertise shaped into a coherent, publishable manuscript.",
    typeOfWork: "Developmental structure and ghostwriting",
    wordCount: "38,000 words",
    ctaLabel: "Read Sample",
  },
];

export const services = [
  {
    label: "BOOK GHOSTWRITING",
    copy: "20,000–80,000+ word manuscripts for experts, founders, consultants, and authors.",
  },
  {
    label: "THOUGHT LEADERSHIP",
    copy: "Articles and essays that turn expertise into clear, credible points of view.",
  },
  {
    label: "BUSINESS ARTICLES",
    copy: "Research-driven articles written for brands, companies, and professional audiences.",
  },
  {
    label: "LINKEDIN GHOSTWRITING",
    copy: "Strategic personal-brand content that sounds like the person behind the profile.",
  },
  {
    label: "EDITORIAL & CONTENT",
    copy: "Long-form content, essays, newsletters, website copy, and other high-value written assets.",
  },
];

export const bookProcess = [
  {
    n: "01",
    label: "DISCOVER",
    copy: "Understand the author's expertise, audience, argument, and voice.",
  },
  {
    n: "02",
    label: "STRUCTURE",
    copy: "Turn ideas, conversations, research, and notes into a compelling manuscript architecture.",
  },
  {
    n: "03",
    label: "WRITE",
    copy: "Ghostwrite in the author's voice while maintaining clarity, rhythm, and consistency.",
  },
  {
    n: "04",
    label: "REFINE",
    copy: "Edit, strengthen, and polish the manuscript until it reads as one coherent work.",
  },
  {
    n: "05",
    label: "DELIVER",
    copy: "A professionally structured manuscript ready for the next stage of publishing.",
  },
];

export const faqs = [
  {
    q: "What does a ghostwriter actually do?",
    a: "I do the thinking, structuring, and writing so your ideas arrive as finished work — published under your name, in your voice.",
  },
  {
    q: "How do you capture my voice?",
    a: "Through conversation, recordings, and anything you've already written. I study how you explain and argue, then write the way you would on your clearest day.",
  },
  {
    q: "Can you ghostwrite an entire book?",
    a: "Yes. Most manuscripts run between 20,000 and 80,000 words, from first outline to final draft.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "Founders, consultants, coaches, executives, subject-matter experts, and companies publishing under a brand name.",
  },
  {
    q: "How does the process work?",
    a: "Brief, research, draft, revision, final delivery. You supply the raw material; I handle everything between.",
  },
  {
    q: "Can I see writing samples?",
    a: "Yes — selected work is shown on this page, and I can share samples relevant to your subject on request.",
  },
  {
    q: "How do we get started?",
    a: "Send a short note about what you're trying to say. We'll talk through scope, timeline, and fit before anything else.",
  },
];

export const testimonials = [
  { quote: "[CLIENT TESTIMONIAL]", name: "[CLIENT NAME]", role: "[ROLE / COMPANY]" },
  { quote: "[CLIENT TESTIMONIAL]", name: "[CLIENT NAME]", role: "[ROLE / COMPANY]" },
  { quote: "[CLIENT TESTIMONIAL]", name: "[CLIENT NAME]", role: "[ROLE / COMPANY]" },
];

export const CONTACT_EMAIL = "hello@wynletters.com";
