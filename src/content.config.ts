import { defineCollection } from "astro:content";
import { glob, file } from 'astro/loaders';
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    cover: image(),
    coverAlt: z.string()
  })
});

const bookCollection = defineCollection({
  loader: file("src/content/books/lectures.json"),
  schema: ({ image }) => z.object({
    name: z.string(),
    author : z.string(),
    year: z.number(),
    image: image(),
    imageAlt: z.string(),
    note: z.string(),
  })
})

export const collections = { 
  blog : blogCollection,
  books: bookCollection,
};