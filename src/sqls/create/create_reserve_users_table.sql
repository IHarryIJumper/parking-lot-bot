CREATE TABLE reserve_users
(
	user_id varchar(80) references users(id),
	last_parked date,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);