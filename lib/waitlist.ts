import { z } from "zod";

import { getSupabaseAdminClient } from "@/lib/supabase-admin";

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
  sourceDetail: z.string().trim().min(1).max(120).optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
export type StoreWaitlistInput = WaitlistInput & {
  consentVersion: string;
};

type StoreWaitlistResult =
  | { status: "created" }
  | { status: "duplicate" };

function isDuplicateEmailError(error: { code?: string } | null) {
  return error?.code === "23505";
}

export async function storeWaitlistEntry(input: StoreWaitlistInput): Promise<StoreWaitlistResult> {
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("waitlist_entries").insert({
    first_name: input.firstName,
    last_name: input.lastName,
    email: input.email,
    source: "website",
    source_detail: input.sourceDetail ?? null,
    consent_version: input.consentVersion,
  });

  if (!error) {
    return { status: "created" };
  }

  if (isDuplicateEmailError(error)) {
    return { status: "duplicate" };
  }

  throw new Error(`Failed to save waitlist entry: ${error.message}`, { cause: error });
}
