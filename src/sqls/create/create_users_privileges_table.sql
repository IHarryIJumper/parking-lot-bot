CREATE TABLE users_privileges
(
	user_id varchar(80) references users(id),
	type int,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);