import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "./env";

/** Every Sanity query is tagged so the publish webhook can refresh them all at once. */
export const SANITY_TAG = "sanity";

const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      // Freshness comes from Next.js caching + on-demand revalidation, so read straight from the API.
      useCdn: false,
      perspective: "published",
    })
  : null;

/**
 * Read-only fetch of published content. No token is used, so drafts and private
 * data can never leak to the website. Returns `fallback` if Sanity isn't connected yet.
 */
export async function sanityFetch<T>(query: string, params: QueryParams = {}, fallback: T): Promise<T> {
  if (!client) return fallback;
  try {
    const result = await client.fetch<T>(query, params, {
      // Hourly safety net in case a webhook is ever missed; the webhook normally refreshes instantly.
      next: { revalidate: 3600, tags: [SANITY_TAG] },
    });
    return result ?? fallback;
  } catch (error) {
    console.error("Sanity fetch failed", error);
    return fallback;
  }
}
