import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const postsCollection = defineCollection({
  schema: ({ image }) => z.object({
    cover: image(),
  }),
});

export const collections = {
  posts: postsCollection,
};