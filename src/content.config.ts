import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.object({
      src: image(),
      alt: z.string(),
    }).optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

export const collections = { blog };
