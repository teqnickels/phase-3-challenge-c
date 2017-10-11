const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/hotel_db`)

const listGuests = 'SELECT * FROM guests'
const listAllRooms = `SELECT 
  room_number, 
  capacity, 
  CASE
  WHEN check_out < DATE(NOW()) THEN 'true'
  WHEN check_out > DATE(NOW()) THEN 'false'
  END AS available
  FROM rooms
  JOIN bookings 
  ON rooms.id = bookings.room_id`

const listRoomsAvailable = `SELECT
  room_number, 
  capacity, 
  'true' as available 
	FROM rooms 
  JOIN bookings 
	ON rooms.id = bookings.room_id 
  WHERE check_out < DATE(NOW())`
  
const upcomingBookings = `SELECT
	room_number, 
  name, 
	check_in, 
	check_out
  FROM
  guests
  INNER JOIN
  bookings ON guests.id = bookings.guest_id
  INNER JOIN
  rooms ON rooms.id = bookings.room_id
  WHERE check_in > DATE(NOW())
  OR check_out > DATE(NOW())`
