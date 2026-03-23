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
  { label: "Product", href: "/product" },
  { label: "Founders", href: "/founders" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact" },
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
    bio: "Background in psychology and human behavior. Focused on relationships, communication, and understanding how people connect.",
    emphasis: "Behavioral insight",
  },
  {
    name: "Zach Simon",
    role: "Co-Founder",
    bio: "AI Engineer focused on building intelligent systems that solve real human problems.",
    emphasis: "Technical execution",
  },
] as const;

export const faqItems = [
  {
    question: "What is SaySimons?",
    answer:
      "SaySimons is a personality-driven dating app built to remove ambiguity and help people build real connections with more clarity and intention.",
  },
  {
    question: "How is SaySimons different from other dating apps?",
    answer:
      "Most dating apps are built around swiping, shallow profiles, and engagement loops. SaySimons is focused on understanding, compatibility, and helping conversations move somewhere real.",
  },
  {
    question: "Is SaySimons available now?",
    answer:
      "Not yet. We’re currently building the product and using the waitlist to shape early access with people who want a more intentional dating experience.",
  },
  {
    question: "How does the waitlist work?",
    answer:
      "Joining the waitlist lets us keep you updated on launch progress, early access opportunities, and research or feedback moments as the product develops.",
  },
  {
    question: "Does SaySimons use AI?",
    answer:
      "Yes, but carefully. We use AI to create clarity and insight, not to replace authentic conversation or speak for users.",
  },
  {
    question: "Is SaySimons for serious dating only?",
    answer:
      "It’s for people who are intentional and want something real. That does not mean rigid or formal. It means the product is designed for clarity, honesty, and meaningful connection.",
  },
] as const;
