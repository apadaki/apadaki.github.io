import { defineCollection, z } from 'astro:content';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
}; 