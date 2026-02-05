import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    cover: image()
  }),
});

export const collections = {
  blog: blogCollection,
};