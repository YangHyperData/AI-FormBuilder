import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://Ai-Content-Generator_owner:kidQCFV9pNe3@ep-jolly-sound-a5zpn4bs.us-east-2.aws.neon.tech/Ai-Form-Builder?sslmode=require',
  }
});