import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.object({
      src: image(),
      alt: z.string(),
    }).optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

export const collections = { projects };
