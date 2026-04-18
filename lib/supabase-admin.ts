import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabaseClient: SupabaseClient | undefined;

function getRequiredEnv(name: "SUPABASE_URL") {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getSupabasePublishableKey() {
  const value =
    process.env.SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!value) {
    throw new Error(
      "Missing required environment variable: SUPABASE_PUBLISHABLE_KEY or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    );
  }

  return value;
}

function validateSupabasePublishableKey(key: string) {
  if (key.startsWith("sb_publishable_")) {
    return key;
  }

  const [, payload] = key.split(".");

  if (!payload) {
    return key;
  }

  try {
    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      role?: string;
    };

    if (decoded.role && decoded.role !== "anon") {
      throw new Error(
        `SUPABASE_PUBLISHABLE_KEY must be a publishable key, received role "${decoded.role}".`,
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }

  return key;
}

export function getSupabaseServerClient() {
  if (!supabaseClient) {
    supabaseClient = createClient(
      getRequiredEnv("SUPABASE_URL"),
      validateSupabasePublishableKey(getSupabasePublishableKey()),
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );
  }

  return supabaseClient;
}
