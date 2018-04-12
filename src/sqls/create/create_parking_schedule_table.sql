CREATE TABLE parking_schedule
(
	schedule_id SERIAL NOT NULL PRIMARY KEY,
	user_id varchar(80) references users(id),
	date date,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);