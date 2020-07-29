DROP DATABASE IF EXISTS stormn;

CREATE DATABASE stormn;

\c stormn;

CREATE TABLE beers
(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20)NOT NULL,
    registration_date TIMESTAMP,
);

-- registration_date TIMESTAMP added after so will need to update rest of files