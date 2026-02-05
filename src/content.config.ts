import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    cover: image()
  }),
});

export const collections = {
  posts: blogCollection,
};