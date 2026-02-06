import { defineCollection } from "astro:content";
import { glob } from 'astro/loaders';
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog"}),
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    cover: image()
  }),
});

export const collections = { blog };