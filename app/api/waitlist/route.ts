import { NextResponse } from "next/server";

import { storeWaitlistEntry, waitlistSchema } from "@/lib/waitlist";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      const errors = Object.fromEntries(
        Object.entries(parsed.error.flatten().fieldErrors).flatMap(([key, value]) =>
          value?.[0] ? [[key, value[0]]] : [],
        ),
      );

      return NextResponse.json(
        {
          message: "Please review the highlighted fields and try again.",
          errors,
        },
        { status: 400 },
      );
    }

    const result = await storeWaitlistEntry(parsed.data);

    if (result.status === "duplicate") {
      return NextResponse.json({
        message:
          "You’re already on the waitlist. We’ll reach out when there’s something to share.",
      });
    }

    return NextResponse.json(
      {
        message:
          "You’re on the waitlist. We’ll keep you posted as SaySimons gets closer to launch.",
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      {
        message:
          "We couldn’t save your signup right now. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
