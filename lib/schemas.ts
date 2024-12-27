import { z } from 'zod';

export const geminiRequestSchema = z.object({
  user: z.object({
    name: z.string().optional(),
    login: z.string(),
    bio: z.string().optional(),
    public_repos: z.number(),
  }),
  totalStars: z.number(),
  languages: z.record(z.number()),
});

export type GeminiRequest = z.infer<typeof geminiRequestSchema>;