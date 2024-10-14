import {
  bigserial,
  jsonb,
  numeric,
  pgEnum,
  pgTable,
  smallserial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm/sql/sql";

export const questionTypes = pgEnum("type", [
  "cards",
  "offer",
  "date",
  "input",
  "email",
  "singleOption",
  "optionalUpload",
  "multipleOption",
]);

export const questions = pgTable("questions", {
  id: smallserial("id").primaryKey(),

  type: questionTypes("type"),
  category: text("category"),
  question: text("question"),
  metadata: jsonb("metadata"),
  options: text("options")
    .array()
    .notNull()
    .default(sql`ARRAY[]::text[]`),
  routes: jsonb("routes"),
});

export const carInfo = pgTable("car_info", {
  type: text("type"),
  param: text("param").primaryKey(),
  options: text("options")
    .array()
    .notNull()
    .default(sql`ARRAY[]::text[]`),
});

export const quote = pgTable("quote", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  home: text("home"),
  phone: text("phone"),
  email: text("email"),
  status: text("status"),
  clickid: text("clickid").unique(),
  insurer: text("insurer"),
  amount: numeric("amount", { precision: 10, scale: 5 }),
  params: jsonb("params").$type<{ [x: string]: string }>(),
  returnParams: jsonb("return_params").$type<{ [x: string]: string }>(),
  address: jsonb("address").$type<{
    city: string;
    state: string;
    line1: string;
    line2: string;
    postal_code: string;
    country: string;
  }>(),
  carInfo: jsonb("carInfo").$type<
    {
      make?: string | undefined;
      year?: string | undefined;
      model?: string | undefined;
      trim?: string | undefined;
      own?: string | undefined;
    }[]
  >(),
  driverInfo: jsonb("driverInfo").$type<
    {
      military: boolean;
      firstName?: string | undefined;
      lastName?: string | undefined;
      gender?: string | undefined;
      birthdate?: string | undefined;
      married?: string | undefined;
      relationship?: string | undefined;
      incidents?:
        | {
            accident: {
              year: string;
              month: string;
              description: string;
              damage: string;
              atFault?: boolean | undefined;
            }[];
            ticket: {
              year: string;
              month: string;
              description: string;
            }[];
            dui: {
              year: string;
              month: string;
              description: string;
            }[];
          }
        | undefined;
    }[]
  >(),
  extra: jsonb("extra").$type<{
    ip: string;
    device: string;
    userAgent: string;
  }>(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "date",
  }).defaultNow(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
    mode: "date",
  }).$onUpdate(() => new Date()),
});
export type QuoteType = typeof quote.$inferSelect;
export type QuestionType = typeof questions.$inferSelect;
export type QuestionTypes = typeof questionTypes.enumValues;
