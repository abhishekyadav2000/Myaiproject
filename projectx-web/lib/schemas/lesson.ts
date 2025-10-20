import { z } from 'zod';
import { DifficultySchema, AgeBandSchema, StreamsPlusSchema } from './kit';

export const LessonStepSchema = z.object({
  title: z.string(),
  duration: z.number(), // minutes
  instructions: z.string(),
  tips: z.string().optional(),
});
export type LessonStep = z.infer<typeof LessonStepSchema>;

export const DownloadSchema = z.object({
  name: z.string(),
  type: z.enum(['pdf', 'csv', 'docx', 'png']),
  url: z.string(),
});
export type Download = z.infer<typeof DownloadSchema>;

export const AssessmentRubricSchema = z.object({
  criteria: z.array(z.object({
    name: z.string(),
    description: z.string(),
    levels: z.array(z.object({
      level: z.string(),
      points: z.number(),
    })),
  })),
});
export type AssessmentRubric = z.infer<typeof AssessmentRubricSchema>;

export const LessonSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  kitId: z.string().optional(), // Lesson can exist without a kit
  objectives: z.array(z.string()),
  materials: z.array(z.string()),
  steps: z.array(LessonStepSchema),
  durationMinutes: z.number().positive(),
  difficulty: DifficultySchema,
  ageBands: z.array(AgeBandSchema),
  streamsPlus: z.array(StreamsPlusSchema),
  downloads: z.array(DownloadSchema),
  teacherNotes: z.string(),
  assessmentRubric: AssessmentRubricSchema,
  standards: z.array(z.string()), // e.g., ["CBSE:Science:Class-8", "NGSS:MS-ETS1-2"]
  tags: z.array(z.string()),
  featured: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Lesson = z.infer<typeof LessonSchema>;
