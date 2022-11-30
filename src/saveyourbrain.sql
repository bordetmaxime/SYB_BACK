BEGIN;
DROP TABLE IF EXISTS "user", "box";

CREATE TABLE "user" (
    "user_id" SERIAL PRIMARY KEY,
    "user_firstname" VARCHAR(7) NOT NULL DEFAULT '',
    "user_lastname" VARCHAR(7) NOT NULL DEFAULT '',
    "user_email" VARCHAR(50) NOT NULL DEFAULT '',
    "user_password" VARCHAR(50) NOT NULL DEFAULT '',
    "user_created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "user_updated_at" TIMESTAMPTZ
);



CREATE TABLE "box" (
    "box_id" SERIAL PRIMARY KEY,
    "box_title" VARCHAR(50) NOT NULL DEFAULT '',
    "box_description" VARCHAR(100) NOT NULL DEFAULT '',
    "box_category" VARCHAR(50) NOT NULL DEFAULT '',
    "box_link" VARCHAR(50) NOT NULL DEFAULT '',
    "box_user_id" INTEGER NOT NULL REFERENCES  "user"("user_id") ON DELETE CASCADE,
    "box_created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "box_updated_at" TIMESTAMPTZ
);


INSERT INTO "user" ("user_id", "user_firstname", "user_lastname", "user_email", "user_password")
 VALUES (1, 'maxime', 'bordet', 'maxime.bordet83@gmail.com', 'maximebordet');
INSERT INTO "box" ("box_id", "box_title", "box_description", "box_category", "box_link", "box_user_id")
 VALUES (1, 'Le con é mara', 'rare espece de crustacé', 'débilité', 'www.débilite.fr', 1);
 




COMMIT;