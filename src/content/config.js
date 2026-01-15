import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      url: z.string(),
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      image: image(),
      imageAlt: z.string(),
      tags: z.string().array()
    }),
});

export const collections = {
  posts
};