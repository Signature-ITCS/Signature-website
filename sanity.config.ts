"use client";

/**
 * Sanity Studio configuration, mounted at /studio.
 * Only members invited to the Sanity project can sign in and edit content.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "signature",
  title: "Signature Blog",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("post").title("Blog posts"),
            S.divider(),
            S.documentTypeListItem("category").title("Categories"),
            S.documentTypeListItem("author").title("Authors"),
          ]),
    }),
    // GROQ query playground, handy for debugging; only visible to signed-in editors.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
