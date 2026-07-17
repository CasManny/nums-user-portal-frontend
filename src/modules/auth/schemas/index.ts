import * as z from "zod";

// Assuming GenderType is an enum, define it first for Zod validation
export const GenderTypeSchema = z.enum(["M", "F",]);

export const RegisterUserSchema = z.object({
  email: z.email("Invalid email address"),

  password: z.string().min(8, "Password must be at least 8 characters long"),

  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"), // Validates E.164 format

  fullName: z.string().min(1, "Full name is required"),

  gender: GenderTypeSchema,

  address: z.string().min(1, "Address is required"),

    dateOfBirth: z.string("Date of birth is required")
});

export const LoginUserSchema = z.object({
    email: z.email("Email is required"),
    password: z.string().min(1, "Password is required")
})

// Infer the TypeScript type from the schema
export type RegisterUserType = z.infer<typeof RegisterUserSchema>;
export type LoginUserType = z.infer<typeof LoginUserSchema>;
