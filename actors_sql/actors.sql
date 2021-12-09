DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
id SERIAL PRIMARY KEY,
name TEXT,
age INT,
oscars INT
);


/* EXERCISES */

onion=# INSERT INTO actors (name, age, oscars) VALUES ('Leornardo DiCaprio', 41, 1);
-- .
-- .
-- etc.

/* Which queries .1 & .2 */

onion=# SELECT * FROM actors WHERE oscars > 1;

onion=# SELECT * FROM actors WHERE age > 30;



