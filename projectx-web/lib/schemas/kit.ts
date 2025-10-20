import { z } from 'zod';

export const KitLevelSchema = z.enum(['Starter', 'Explorer', 'Advanced', 'Mastery', 'Premium']);
export type KitLevel = z.infer<typeof KitLevelSchema>;

export const StreamsPlusSchema = z.enum([
  'Science',
  'Technology',
  'Robotics',
  'Engineering',
  'Arts',
  'Mathematics',
  'Sustainability',
]);
export type StreamsPlus = z.infer<typeof StreamsPlusSchema>;

export const AgeBandSchema = z.enum([
  '0-5',
  '5-10',
  '10-15',
  '15-20',
  '20-25',
  '25+',
]);
export type AgeBand = z.infer<typeof AgeBandSchema>;

export const DifficultySchema = z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']);
export type Difficulty = z.infer<typeof DifficultySchema>;

export const FAQSchema = z.object({
  question: z.string(),
  answer: z.string(),
});
export type FAQ = z.infer<typeof FAQSchema>;

export const ReviewSchema = z.object({
  id: z.string(),
  author: z.string(),
  rating: z.number().min(1).max(5),
  text: z.string(),
  date: z.string(),
});
export type Review = z.infer<typeof ReviewSchema>;

export const KitSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  ageBands: z.array(AgeBandSchema),
  level: KitLevelSchema,
  streamsPlus: z.array(StreamsPlusSchema),
  components: z.array(z.string()),
  skills: z.array(z.string()),
  durationHours: z.number().positive(),
  price: z.number().positive(),
  inBox: z.array(z.string()),
  images: z.array(z.object({
    url: z.string(),
    alt: z.string(),
  })),
  standards: z.array(z.string()), // e.g., ["CBSE:Science:Class-8", "NGSS:MS-ETS1-2"]
  pdfGuide: z.string().optional(),
  faq: z.array(FAQSchema),
  reviews: z.array(ReviewSchema).optional(),
  featured: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Kit = z.infer<typeof KitSchema>;
