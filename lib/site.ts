export const siteConfig = {
  name: "SaySimons",
  description:
    "A personality-driven dating app that removes ambiguity and helps people build real connections.",
  email: "hello@saysimons.com",
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/saysimons" },
    { label: "LinkedIn", href: "https://linkedin.com/company/saysimons" },
    { label: "X", href: "https://x.com/saysimons" },
  ],
} as const;

export const navigationLinks = [
  { label: "Mission", href: "/mission" },
  { label: "Founders", href: "/founders" },
  { label: "FAQ", href: "/faq" },
  { label: "Join", href: "/join" },
] as const;

export const featureCards = [
  {
    title: "Personality-first matching",
    description:
      "Start with how people think, communicate, and relate instead of reducing compatibility to a split-second swipe.",
  },
  {
    title: "Guided profiles that say more",
    description:
      "SaySimons helps people express who they actually are, so matches begin with substance instead of surface-level guessing.",
  },
  {
    title: "Better conversations, earlier",
    description:
      "Structured conversation support helps matches move past endless small talk and into something more honest and alive.",
  },
  {
    title: "Clarity without losing authenticity",
    description:
      "AI is used to surface insight, highlight alignment, and reduce ambiguity without replacing real human communication.",
  },
  {
    title: "Built to lead to real dates",
    description:
      "The product supports the full journey from setup to planning a date, not just keeping people busy inside the app.",
  },
] as const;

export const journeySteps = [
  {
    step: "01",
    title: "Setup",
    description:
      "Guided prompts help users show their personality, communication style, and dating intent with more clarity.",
  },
  {
    step: "02",
    title: "Matching",
    description:
      "Matches are shaped around compatibility and understanding, not just momentum or volume.",
  },
  {
    step: "03",
    title: "Chatting",
    description:
      "Structured support keeps conversations from stalling and helps both people move past polite uncertainty.",
  },
  {
    step: "04",
    title: "Planning real dates",
    description:
      "The goal is a better transition into real life, with clearer intent and less awkward guesswork along the way.",
  },
] as const;

export const trustPillars = [
  {
    title: "Psychology-led",
    description:
      "SaySimons is being shaped by expertise in human behavior, communication, and what actually helps people connect.",
  },
  {
    title: "AI with restraint",
    description:
      "Technology should create clarity, not perform the relationship for you. We use AI to support the human part, not replace it.",
  },
  {
    title: "Early-stage, intentionally built",
    description:
      "We are building carefully, validating the concept early, and staying honest about what trust looks like at this stage.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "This feels like the first dating app that actually understands how people connect.",
    attribution: "Early concept feedback",
  },
  {
    quote: "It removes the awkward guessing part of dating.",
    attribution: "Waitlist conversation",
  },
  {
    quote: "It feels more intentional than any app I’ve used.",
    attribution: "Prospective user",
  },
] as const;

export const founders = [
  {
    name: "Hayley Simon, PhD",
    role: "Co-Founder",
    bio: "Hayley Simon is a clinical psychologist and behavioral lead behind SaySimons, bringing a research-driven understanding of how people communicate, connect, and build relationships. She currently works in private practice, where she focuses on helping individuals better understand their emotional patterns, navigate relationships, and communicate with more clarity and intention.\n\nThe idea for SaySimons was shaped by a question that continued to surface in her work. After watching her brother struggle with dating apps that felt difficult to interpret, Hayley began to recognize a broader pattern. Many people weren’t struggling with connection itself, they were struggling with how little structure existed around expressing interest, reading intent, and understanding one another. What should feel intuitive often turned into guesswork.\n\nHayley earned her Ph.D. in School Psychology from Fordham University, where her research focused on social dynamics, communication patterns, and the ways digital environments influence relationships. At SaySimons, she leads the behavioral design of the product, ensuring that psychological insight is translated into an experience that feels grounded, natural, and genuinely useful.",
    emphasis: "Head of Psycology",
    imageSrc: "/images/founders/hayley.jpeg",
  },
  {
    name: "Zachary Simon",
    role: "Co-Founder",
    bio: "Zachary Simon is the co-founder and technical lead behind SaySimons, a personality-driven dating platform. With a background in building data-driven systems and automation tools, his work has consistently centered on solving complex, real-world problems through thoughtful, practical technology.\n\nThe idea for SaySimons began with a simple observation that didn’t sit right. After watching his brother navigate dating apps filled with vague profiles and stalled conversations, Zachary noticed how online dating has become so impersonal. People were left guessing about interest, intent, and compatibility, and that ambiguity had become normalized. Rather than accept it, he set out to build a product that made those signals easier to understand.\n\nZachary graduated with honors from Colgate University with a bachelor’s degree in computer science, where he built a strong foundation in systems and software development. At SaySimons, he now leads both product and engineering, shaping an experience that turns behavioral insight into something structured, intuitive, and actually useful.\n\nHe is currently pursuing a Master's of Science in Artificial Intelligence at the University of Texas at Austin, where his focus is on how intelligent systems can better help people.",
    emphasis: "Head of Technology",
    imageSrc: "/images/founders/zach.jpeg",
  },
] as const;

export const faqItems = [
  {
    question: "What is SaySimons?",
    answer:
      "SaySimons is a dating platform designed to make people easier to understand. It focuses on surfacing intent, personality, and compatibility earlier so conversations start with substance instead of guesswork.",
  },
  {
    question: "How is it different from other dating apps?",
    answer:
      "Most apps optimize for browsing. SaySimons is designed to reduce ambiguity. Profiles are more expressive, signals are clearer, and interactions are structured to help conversations actually go somewhere.",
  },
  {
    question: "What does 'clarity' actually mean in the app?",
    answer:
      "Clarity means you’re not left guessing. You get better insight into how someone communicates, what they’re looking for, and how they engage before and during conversation.",
  },
  {
    question: "Will this feel slower than other apps?",
    answer:
      "It’s more intentional, not slower. The goal is fewer, better interactions instead of endless scrolling and dead-end conversations.",
  },
  {
    question: "Is SaySimons focused on serious relationships only?",
    answer:
      "It’s built for people who value intention and honesty. That can lead to serious relationships, but the core focus is on better interactions, not forcing a specific outcome.",
  },
  {
    question: "How does matching work?",
    answer:
      "Matching is based on more than surface-level attraction. It considers how people communicate, what they value, and how compatible their intentions are.",
  },
  {
    question: "What happens after a match?",
    answer:
      "The app guides the early interaction so conversations don’t stall. Instead of starting from nothing, you begin with context that makes it easier to connect naturally.",
  },
  {
    question: "Does SaySimons use AI?",
    answer:
      "Yes, but only to support understanding. It helps surface patterns and insights, not generate messages or replace your voice.",
  },
  {
    question: "Will AI ever speak for me or write my messages?",
    answer:
      "No. The product is built around authentic communication. AI is used to guide, not to impersonate.",
  },
  {
    question: "How are profiles different?",
    answer:
      "Profiles are designed to make people more legible. Instead of just photos and short prompts, they highlight lifestyle, communication style, and compatibility signals.",
  },
  {
    question: "Is there a swipe feature?",
    answer:
      "No traditional swipe loop. The experience is structured to prioritize thoughtful discovery over rapid, low-signal decisions.",
  },
  {
    question: "How does the waitlist work?",
    answer:
      "The waitlist helps shape early access. You’ll get updates, opportunities to test features, and a chance to influence how the product evolves.",
  },
  {
    question: "When will the app launch?",
    answer:
      "We’re currently building and refining the experience. Early access will roll out in stages to ensure quality from the start.",
  },
  {
    question: "Who is SaySimons for?",
    answer:
      "People who are tired of ambiguity in dating and want a clearer, more thoughtful way to meet someone.",
  },
  {
    question: "What problem are you actually solving?",
    answer:
      "Most dating apps leave people guessing about interest, intent, and compatibility. SaySimons is built to remove that guesswork and make interactions more meaningful from the start.",
  },
] as const;
