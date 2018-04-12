CREATE TABLE statuses
(
	user_id varchar(80) references users(id),
	status int,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);