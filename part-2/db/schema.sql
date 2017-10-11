DROP DATABASE IF EXISTS hotel_db;
CREATE DATABASE hotel_db;

\c hotel_db;

DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms (
id SERIAL PRIMARY KEY, 
room_number VARCHAR(4),
capacity INT
);

DROP TABLE IF EXISTS guests;
CREATE TABLE guests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  room_number866 485 4639
);

DROP TABLE IF EXISTS bookings;
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY, 
  room_id INTEGER REFERENCES rooms (id),
  guest_id INTEGER REFERENCES guests (id),
  check_in DATE,
  check_out DATE 
);

COPY rooms(id, room_number, capacity) FROM '/Users/debrenamcewen/guild/phase-3-challenge-c/part-2/seed/rooms.csv' DELIMITER ',' CSV HEADER;
COPY guests(id, name, email) FROM '/Users/debrenamcewen/guild/phase-3-challenge-c/part-2/seed/guests.csv' DELIMITER ',' CSV HEADER;
COPY bookings(id, room_id, guest_id, check_in, check_out) FROM '/Users/debrenamcewen/guild/phase-3-challenge-c/part-2/seed/bookings.csv' DELIMITER ',' CSV HEADER;

