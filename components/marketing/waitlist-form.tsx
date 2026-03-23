"use client";

import { useRef, useState, useTransition } from "react";
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
    <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Join the waitlist
        </p>
        <h2 className="headline-display text-4xl font-semibold text-foreground">
          Be first to hear when SaySimons opens up.
        </h2>
        <p className="text-base leading-7 text-muted-foreground">
          We&apos;ll use this list for launch updates, early access, and occasional
          product feedback invitations.
        </p>
      </div>

      <form ref={formRef} action={handleSubmit} className="mt-8 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Hayley"
            autoComplete="given-name"
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
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email ? (
            <p id="email-error" className="text-sm text-[#d87522]">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>

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
