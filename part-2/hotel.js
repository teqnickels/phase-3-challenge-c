const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/hotel_db`)

const listGuests = 'SELECT * FROM guests'
const listAllRooms = "SELECT room_number, capacity, CASE WHEN check_out < '20170831' THEN 'true' WHEN check_out > '20170831' THEN 'false' END AS available FROM rooms JOIN bookings ON rooms.id = bookings.room_id"
const listRoomsAvailable = "SELECT room_number, capacity, 'true' as available FROM rooms JOIN bookings ON rooms.id = bookings.room_id WHERE check_out < '20170831'"
