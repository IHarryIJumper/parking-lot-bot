CREATE TABLE parking_info
(
	parking_id SERIAL NOT NULL PRIMARY KEY,
	name varchar(80),
	parking_lots int,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
INSERT INTO parking_info
	(name, lots)
VALUES
	('Default Parking', 0);