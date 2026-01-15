import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    imageAlt: z.string(),
  }),
});

export const collections = {
  thumbnail: blogCollection,
};