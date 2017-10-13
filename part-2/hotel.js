const command = process.argv[2]
let arg = process.argv.slice([3]).join().replace(/\,/g, ' ')
const { queryFunctions, pgp } = require('./db/db.js')
require('console.table');

const processCommands = () => {

  console.log(command)
  if(!command) {
    throw 'Must Enter Command'
  }

  switch (command) {
    case 'guests':
      return queryFunctions.list()
        .then( (value) => {
          let outerArr = []
          for(let i = 0; i < value.length; i++) {
            let arr = []
            arr.push( value[i].id, value[i].name, value[i].email)
            outerArr.push(arr)
          }
          pgp.end()
          console.table(['ID','Name','Email'], outerArr)
        })

    case 'rooms':
    if(arg) {
      console.log()
      return queryFunctions.listAvailable()
        .then( (value) => {
          let outerArr = [];
          for (let i = 0; i < value.length; i++) {
            let arr = []
            arr.push(value[i].room_number, value[i].capacity, value[i].available)
            outerArr.push(arr)
          }
          pgp.end()
          console.table(['Room Number', 'Capacity', 'Available'], outerArr)
        })
    } else {
      return queryFunctions.listAll()
        .then((value) => {
          let outerArr = [];
          for (let i = 0; i < value.length; i++) {
            let arr = []
            arr.push(value[i].room_number, value[i].capacity, value[i].available)
            outerArr.push(arr)
          }
          pgp.end()
          console.table(['Room Number', 'Capacity', 'Available'], outerArr)

        })   
       }

    case 'bookings':
       if(arg) {
         arg = arg.toUpperCase()
         return queryFunctions.single(arg)
          .then((value) => {
            let outerArr = [];
            for (let i = 0; i < value.length; i++) {
              let arr = []
              arr.push(value[i].room_number, value[i].name, value[i].check_in, value[i].check_out)
              outerArr.push(arr)
            }
            pgp.end()
            console.table(['Room Number', 'Guest Name', 'Check-In', 'Check-Out'], outerArr)
          })
       }else{
         return queryFunctions.bookings()
           .then((value) => {
             let outerArr = [];
             for (let i = 0; i < value.length; i++) {
               let arr = []
               arr.push(value[i].room_number, value[i].name, value[i].check_in, value[i].check_out)
               outerArr.push(arr)
             }
             pgp.end()
             console.table(['Room Number', 'Guest Name', 'Check-In', 'Check-Out'], outerArr)
           })
       }

       default:
         throw 'Command must be one of the following: guests, rooms, bookings'
  }
}

  processCommands(command)

