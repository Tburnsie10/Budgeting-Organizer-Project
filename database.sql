
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username character varying(80) NOT NULL UNIQUE,
    password character varying(1000) NOT NULL
);


CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
    expense_name character varying(255),
    amount numeric(10,2),
    expense_date date,
    user_id integer REFERENCES "user"(id)
);

CREATE TABLE income (
    id SERIAL PRIMARY KEY,
    income_name character varying(255),
    amount numeric(10,2),
    income_date date,
    user_id integer REFERENCES "user"(id)
);