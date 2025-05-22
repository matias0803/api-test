import z from "zod";

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: "Movie title must be a string",
    required_error: "Movie title is required",
  }),
  year: z.number().int().positive().min(1900).max(2026),
  director: z.string(),
  rate: z.number().min(0).max(10).default(0),
  poster: z.string().url({
    message: "poster must be a valid url",
  }),
  genre: z.array(z.string()),
});

export function validateMovie(object) {
  return movieSchema.safeParse(object);
}
export function validatePartialMovie(object) {
  return movieSchema.partial().safeParse(object);
}
