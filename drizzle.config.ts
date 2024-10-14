import type { Config } from "drizzle-kit";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd());
export default {
  strict: true,
  verbose: true,
  out: "./.drizzle",
  dialect: "postgresql",
  schema: "./src/lib/server/schema.ts",
  dbCredentials: {
    url: env.VITE_LOCAL_DB, // env.VITE_CLOUD_DB
  },
} satisfies Config;
