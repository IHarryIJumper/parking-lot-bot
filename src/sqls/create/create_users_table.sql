CREATE TABLE users
(
	id varchar(80) NOT NULL PRIMARY KEY,
	username varchar(80),
	first_name varchar(80),
	last_name varchar(80),
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);