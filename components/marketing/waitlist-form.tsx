"use client";

import { useRef, useState, useTransition } from "react";
import Link from "next/link";
import { CheckCircle2, LoaderCircle, MailWarning } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormState =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function WaitlistForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formState, setFormState] = useState<FormState>({ type: "idle" });
  const [isPending, startTransition] = useTransition();
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      setFieldErrors({});
      setFormState({ type: "idle" });

      const payload = {
        firstName: String(formData.get("firstName") ?? ""),
        lastName: String(formData.get("lastName") ?? ""),
        email: String(formData.get("email") ?? ""),
      };

      try {
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const result = (await response.json()) as {
          message?: string;
          errors?: Record<string, string>;
        };

        if (!response.ok) {
          if (result.errors) {
            setFieldErrors(result.errors);
          }

          setFormState({
            type: "error",
            message:
              result.message ??
              "Something went wrong while joining the waitlist. Please try again.",
          });
          return;
        }

        setFormState({
          type: "success",
          message:
            result.message ??
            "You're on the list. We'll keep you posted as SaySimons gets closer to launch.",
        });
        formRef.current?.reset();
      } catch {
        setFormState({
          type: "error",
          message:
            "We couldn't submit your information right now. Please try again in a moment.",
        });
      }
    });
  }

  return (
    <div className="rounded-[2rem] border border-[#dbe5f0] bg-white/88 p-6 shadow-[0_22px_54px_-40px_rgba(79,111,149,0.28)] sm:p-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Join the waitlist
        </p>
        <h2 className="headline-display text-[2.2rem] font-semibold leading-[1.02] text-foreground sm:text-4xl">
          Add your name.
        </h2>
        <p className="max-w-[34rem] text-sm leading-6 text-muted-foreground sm:text-base">
          We&apos;ll send launch updates, early access details, and the occasional
          product feedback note.
        </p>
      </div>

      <form ref={formRef} action={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Hayley"
              autoComplete="given-name"
              required
              aria-invalid={Boolean(fieldErrors.firstName)}
              aria-describedby={fieldErrors.firstName ? "firstName-error" : undefined}
            />
            {fieldErrors.firstName ? (
              <p id="firstName-error" className="text-sm text-[#d87522]">
                {fieldErrors.firstName}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Simon"
              autoComplete="family-name"
              required
              aria-invalid={Boolean(fieldErrors.lastName)}
              aria-describedby={fieldErrors.lastName ? "lastName-error" : undefined}
            />
            {fieldErrors.lastName ? (
              <p id="lastName-error" className="text-sm text-[#d87522]">
                {fieldErrors.lastName}
              </p>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email ? (
            <p id="email-error" className="text-sm text-[#d87522]">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>

        <div className="space-y-3 pt-1">
          <Button type="submit" size="lg" className="w-full" disabled={isPending}>
            {isPending ? (
              <>
                <LoaderCircle className="size-4 animate-spin" />
                Joining waitlist...
              </>
            ) : (
              "Join the Waitlist"
            )}
          </Button>
          <p className="text-xs leading-5 text-muted-foreground">
            By joining, you agree to our{" "}
            <Link
              href="/terms"
              className="underline decoration-foreground/30 underline-offset-4 hover:text-foreground"
            >
              Terms of Service
            </Link>{" "}
            and acknowledge our{" "}
            <Link
              href="/privacy"
              className="underline decoration-foreground/30 underline-offset-4 hover:text-foreground"
            >
              Privacy Policy
            </Link>
            . We&apos;ll only use your information for waitlist and launch
            communications unless we tell you otherwise.
          </p>
        </div>
      </form>

      {formState.type === "success" ? (
        <div className="mt-5 rounded-[1.4rem] border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm leading-6 text-emerald-800">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
            <p>{formState.message}</p>
          </div>
        </div>
      ) : null}

      {formState.type === "error" ? (
        <div className="mt-5 rounded-[1.4rem] border border-[#ffd8b5] bg-[#fff4e8] px-4 py-4 text-sm leading-6 text-[#b86016]">
          <div className="flex items-start gap-3">
            <MailWarning className="mt-0.5 size-4 shrink-0" />
            <p>{formState.message}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
