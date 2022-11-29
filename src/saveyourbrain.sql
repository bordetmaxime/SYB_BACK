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
    "box_user_id" INTEGER NOT NULL REFERENCES user("user_id") ON DELETE CASCADE,
    "user_created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "user_updated_at" TIMESTAMPTZ
);


COMMIT;