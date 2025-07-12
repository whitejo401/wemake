--> statement-breakpoint
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_profile_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "upvotes" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "gpt_ideas" ALTER COLUMN "views" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "stats" SET DEFAULT '{"views":0,"reviews":0,"upvotes":0}'::jsonb;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_profile_id_users_id_fk" FOREIGN KEY ("profile_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;