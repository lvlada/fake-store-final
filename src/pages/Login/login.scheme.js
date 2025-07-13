import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3, "Korisničko ime je obavezno"),
  password: z
    .string()
    .min(6, "Lozinka mora imati najmanje 6 karaktera")
    .max(32, "Lozinka ne sme imati više od 32 karaktera"),
});
