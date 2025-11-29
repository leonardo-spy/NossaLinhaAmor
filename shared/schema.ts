import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const milestones = pgTable("milestones", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: text("date").notNull(),
  imageUrl: text("image_url"),
  order: integer("order").notNull().default(0),
});

export const insertMilestoneSchema = createInsertSchema(milestones).omit({
  id: true,
});

export type InsertMilestone = z.infer<typeof insertMilestoneSchema>;
export type Milestone = typeof milestones.$inferSelect;

export const galleryPhotos = pgTable("gallery_photos", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  imageUrl: text("image_url").notNull(),
  caption: text("caption"),
  order: integer("order").notNull().default(0),
});

export const insertGalleryPhotoSchema = createInsertSchema(galleryPhotos).omit({
  id: true,
});

export type InsertGalleryPhoto = z.infer<typeof insertGalleryPhotoSchema>;
export type GalleryPhoto = typeof galleryPhotos.$inferSelect;

export const coupleInfo = pgTable("couple_info", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  partnerOneName: text("partner_one_name").notNull(),
  partnerTwoName: text("partner_two_name").notNull(),
  relationshipStartDate: text("relationship_start_date").notNull(),
  engagementDate: text("engagement_date"),
  heroTitle: text("hero_title").notNull().default("Nossa Jornada de Amor"),
  heroSubtitle: text("hero_subtitle"),
  proposalStory: text("proposal_story"),
});

export const insertCoupleInfoSchema = createInsertSchema(coupleInfo).omit({
  id: true,
});

export type InsertCoupleInfo = z.infer<typeof insertCoupleInfoSchema>;
export type CoupleInfo = typeof coupleInfo.$inferSelect;
