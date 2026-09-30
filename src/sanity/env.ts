export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2026-09-01";

/** The blog degrades to an empty "coming soon" state until a Sanity project is connected. */
export const isSanityConfigured = /^[a-z0-9-]+$/.test(projectId);
