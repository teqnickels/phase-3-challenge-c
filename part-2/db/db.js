const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/hotel_db`)

const listGuests = 'SELECT * FROM guests'
const listAllRooms = `SELECT 
room_number, 
capacity, 
CASE WHEN check_out < DATE(NOW()) THEN 'true' WHEN check_out > DATE(NOW()) THEN 'false' 
END AS available FROM rooms JOIN bookings ON rooms.id = bookings.room_id`

const listRoomsAvailable = `SELECT
  room_number, capacity, 'true' as available 
	FROM rooms 
  JOIN bookings 
	ON rooms.id = bookings.room_id 
  WHERE check_out < DATE(NOW())`

const upcomingBookings = `SELECT
	room_number, name, to_char(check_in, 'DD/MM/YYYY') AS check_in,	to_char(check_out, 'DD/MM/YYYY') AS check_out	
  FROM guests
  INNER JOIN
  bookings ON guests.id = bookings.guest_id
  INNER JOIN
  rooms ON rooms.id = bookings.room_id
  WHERE check_in > CURRENT_DATE
  OR check_out > CURRENT_DATE`

const singleRooms = `SELECT
	room_number, name, to_char(check_in, 'DD/MM/YYYY') AS check_in, to_char(check_out, 'DD/MM/YYYY') AS check_out
  FROM guests
  INNER JOIN
  bookings ON guests.id = bookings.guest_id
  INNER JOIN
  rooms ON rooms.id = bookings.room_id
  WHERE room_number = $1 AND (check_in > CURRENT_DATE OR (check_out > CURRENT_DATE))`

const queryFunctions = {
  list : () => db.any(listGuests),
  listAll: () => db.any(listAllRooms),
  listAvailable: () => db.any(listRoomsAvailable), 
  bookings: () => db.any(upcomingBookings),
  single: (room_number) => db.any(singleRooms, room_number)
}

module.exports = { queryFunctions, pgp }

