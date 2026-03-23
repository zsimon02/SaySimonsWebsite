import { promises as fs } from "node:fs";
import path from "node:path";

import { z } from "zod";

export const waitlistSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Please enter your first name.")
    .max(50, "First name must be 50 characters or fewer.")
    .regex(
      /^[\p{L}' -]+$/u,
      "Use letters, spaces, apostrophes, or hyphens only.",
    ),
  lastName: z
    .string()
    .trim()
    .min(2, "Please enter your last name.")
    .max(50, "Last name must be 50 characters or fewer.")
    .regex(
      /^[\p{L}' -]+$/u,
      "Use letters, spaces, apostrophes, or hyphens only.",
    ),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Email must be 254 characters or fewer.")
    .transform((value) => value.toLowerCase()),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;

type WaitlistEntry = WaitlistInput & {
  id: string;
  joinedAt: string;
  source: "website";
};

const waitlistFile = path.join(process.cwd(), "data", "waitlist-submissions.json");

async function readWaitlistFile() {
  try {
    const file = await fs.readFile(waitlistFile, "utf8");
    return JSON.parse(file) as WaitlistEntry[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function storeWaitlistEntry(input: WaitlistInput) {
  const entries = await readWaitlistFile();
  const existing = entries.find((entry) => entry.email === input.email);

  if (existing) {
    return { status: "duplicate" as const, entry: existing };
  }

  const newEntry: WaitlistEntry = {
    id: crypto.randomUUID(),
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    joinedAt: new Date().toISOString(),
    source: "website",
  };

  await fs.mkdir(path.dirname(waitlistFile), { recursive: true });

  // TODO: Replace this file-based store with a Supabase insert when the
  // production backend is ready. The API contract can stay the same.
  await fs.writeFile(waitlistFile, JSON.stringify([newEntry, ...entries], null, 2));

  return { status: "created" as const, entry: newEntry };
}
