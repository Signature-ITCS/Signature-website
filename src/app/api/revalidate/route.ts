import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { SANITY_TAG } from "@/sanity/client";

/**
 * Called by a Sanity webhook whenever content is published, updated or deleted,
 * so the blog updates within seconds without redeploying.
 * Requests are rejected unless they carry a valid signature for SANITY_REVALIDATE_SECRET.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "Revalidation secret is not configured" }, { status: 500 });
  }

  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret, true);
    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    // Serve fresh content on the very next request.
    revalidateTag(SANITY_TAG, { expire: 0 });
    return NextResponse.json({ revalidated: true, type: body?._type ?? null, now: Date.now() });
  } catch (error) {
    console.error("Revalidation webhook failed", error);
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
