import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CODE_API_BASE_URL: z.string().url(),
    NEXT_PUBLIC_DEBOUNCE_INTERVAL_IN_MS: z
      .string()
      .transform((s) => parseInt(s, 10))
      .pipe(z.number().positive()),
    NEXT_PUBLIC_DOMAIN_URL: z.string().url(),
    NEXT_PUBLIC_DOCS_URL: z.string().url(),
    NEXT_PUBLIC_GITHUB_URL: z.string().url(),
    NEXT_PUBLIC_CONTACT_EMAIL: z.string().email(),
    NEXT_PUBLIC_ENVIRONMENT: z.string().optional(),
    NEXT_PUBLIC_GA_ID: z.string().optional()
  },

  runtimeEnv: {
    NEXT_PUBLIC_CODE_API_BASE_URL: process.env.NEXT_PUBLIC_CODE_API_BASE_URL,
    NEXT_PUBLIC_DEBOUNCE_INTERVAL_IN_MS: process.env.NEXT_PUBLIC_DEBOUNCE_INTERVAL_IN_MS,
    NEXT_PUBLIC_DOMAIN_URL: process.env.NEXT_PUBLIC_DOMAIN_URL,
    NEXT_PUBLIC_DOCS_URL: process.env.NEXT_PUBLIC_DOCS_URL,
    NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID
  }
});
