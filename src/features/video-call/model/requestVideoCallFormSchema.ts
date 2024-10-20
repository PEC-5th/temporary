import { z } from 'zod';

export const requestVideoCallFormSchema = z.object({
  schedules: z.array(
    z.object({
      date: z.date().optional(),
      time: z.string().optional(),
    }),
  ),
});
