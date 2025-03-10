import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    /** URL of the database used by Prisma */
    DATABASE_URL: z.string().min(1),
    /** Client ID of GitHub */
    GITHUB_CLIENT_ID: z.string().min(1),
    /** Client Secret of GitHub */
    GITHUB_CLIENT_SECRET: z.string().min(1),
    /** Secret of Better Auth */
    BETTER_AUTH_SECRET: z.string().min(1),
    /** URL of Better Auth */
    BETTER_AUTH_URL: z.string().url(),
  },
});
