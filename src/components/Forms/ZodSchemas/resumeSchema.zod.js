import { email, z } from "zod";

const resumeSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be atleast 2 characters")
    .max(100, "Name too long"),

  email: z.email("Invalid email address"),

  photo: z.any()
    .refine((fileList) => fileList[0] instanceof File, "Please upload a valid file")
    .optional(),

  headline: z
    .string()
    .min(3, "Headline must be atleast 3 characters")
    .max(200, "Headline too long"),

  profileLink: z.url("Profile url must ").optional().or(z.literal("")),

  address: z
    .string()
    .min(2, "Address must be atleast 2 characters")
    .max(400, "Address too long")
    .optional()
    .or(z.literal("")),

  profileSummary: z
    .string()
    .min(5, "Profile Summary must be atleast 5 characters")
    .max(500, "Profile Summary too long"),

  skills: z
    .array(
      z.object({
        name: z
          .string()
          .min(1, "Skill-name must be atleast 1 character")
          .max(100, "Skill-name too long"),
      })
    )
    .min(1, "Atleast 1 skill is required"),

  experience: z
    .array(
      z.object({
        company: z.string().min(1, "Company name is required"),
        role: z.string().min(1, "Role is required"),
        startDate: z.string().min(1, "Start date is required"),
        endDate: z.string().optional().or(z.literal("")),
        description: z
          .string()
          .min(10, "Description must be at least 10 characters"),
      })
    )
    .optional(),

  education: z
    .array(
      z.object({
        degree: z.string().min(1, "Degree is required"),
        institution: z.string().min(1, "Institution name is required"),
        graduationDate: z.string().min(1, "Graduation date is required"),
      })
    )
    .min(1, "At least one education entry is required"),

  project: z
    .array(
      z.object({
        name: z.string().min(1, "Project name is required"),
        description: z
          .string()
          .min(10, "Project description must be at least 10 characters"),
        link: z
          .url("Invalid project URL")
          .optional()
          .or(z.literal("")),
      })
    )
    .optional(),

  certification: z
    .array(
      z.object({
        name: z.string().min(1, "Certification name is required"),
        issuedBy: z.string().min(1, "Issuer name is required"),
        link: z
          .url("Invalid certification URL")
          .optional()
          .or(z.literal("")),
      })
    )
    .optional(),
});

export default resumeSchema;
