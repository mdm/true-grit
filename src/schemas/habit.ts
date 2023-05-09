import { z } from "zod";

export const habitId = z.string().cuid();

export const habitSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  recurrenceRule: z.string(),
  windowDays: z.number(),
});

export const habitUnsavedSchema = habitSchema.omit({ id: true });
