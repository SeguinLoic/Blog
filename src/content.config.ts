import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    cover: image()
  }),
});

export const collections = {
  posts: blogCollection,
};