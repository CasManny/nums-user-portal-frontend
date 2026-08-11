import * as z from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ACCEPTED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];

const documentFileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= MAX_FILE_SIZE, "File size must not exceed 5MB")
  .refine(
    (file) => ACCEPTED_FILE_TYPES.includes(file.type),
    "Only PDF, JPG and PNG files are allowed",
  );

export const personalDetailsSchema = z.object({
  fullname: z.string().trim().min(3, "Full name must be at least 3 characters"),

  email: z.email("Please enter a valid email address"),

  phonenumber: z
    .string()
    .trim()
    .min(11, "Phone number must be at least 11 digits")
    .max(15, "Phone number is too long")
    .regex(/^\+?\d+$/, "Phone number can only contain numbers"),

  gender: z.enum(["MALE", "FEMALE"], {
    error: "Please select your gender",
  }),

  dateOfBirth: z.string().min(1, "Date of birth is required"),

  nationality: z.string().trim().min(2, "Nationality is required"),

  stateOfOrigin: z.string().trim().min(2, "State of origin is required"),

  lga: z.string().trim().min(2, "Local Government Area is required"),
});

export const academicInformationSchema = z.object({
  admissionYear: z.string().min(1, "Please select an admission year"),

  examType: z.enum(["UTME", "DIRECT_ENTRY"]),

  jambRegistrationNumber: z
    .string()
    .min(1, "JAMB registration number is required"),

  schoolName: z.string().min(2, "School name is required"),

  yearOfGraduation: z.string().min(1, "Please select your year of graduation"),

  certificateType: z.string().min(1, "Please select your certificate type"),

  previousProgramme: z.string().optional(),
});

export const programChoiceSchema = z.object({
  facultyId: z.string().min(1, "Please select a faculty"),

  departmentId: z.string().min(1, "Please select a department"),

  programmeId: z.string().min(1, "Please select a programme"),

  degreeType: z.string().min(1, "Please select a degree type"),

  modeOfStudy: z.string().min(1, "Please select your mode of study"),
});

export const documentsSchema = z.object({
  passportPhotograph: documentFileSchema.optional(),

  jambResult: documentFileSchema.optional(),

  oLevelResult: documentFileSchema.optional(),

  birthCertificate: documentFileSchema.optional(),

  identification: documentFileSchema.optional(),
});

export type DocumentsFormType = z.infer<typeof documentsSchema>;

export type ProgramChoiceFormType = z.infer<typeof programChoiceSchema>;

export type AcademicInformationFormType = z.infer<
  typeof academicInformationSchema
>;

export type PersonalDetailsFormType = z.infer<typeof personalDetailsSchema>;
