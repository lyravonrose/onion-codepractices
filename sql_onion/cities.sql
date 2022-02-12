DROP TABLE IF EXISTS cities;

CREATE TABLE cities (
id SERIAL PRIMARY KEY,
name TEXT,
countries TEXT,
population INT
);