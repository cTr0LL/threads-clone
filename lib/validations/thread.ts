import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z
    .string()
    .min(3, { message: "Minimum 3 characters" })
    .refine((data) => data.trim() !== "", {
      message: "You need a profile picture",
    }),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: z
    .string()
    .min(3, { message: "Minimum 3 characters" })
    .refine((data) => data.trim() !== "", {
      message: "You need a profile picture",
    }),
});