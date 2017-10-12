// const command = process.argv[2]
const command = process.argv.slice([2]).join().replace(/\,/g, ' ')
const { queryFunctions, pgp } = require('./db/db.js')
require('console.table');

const processCommands = () => {
  switch (command) {
    case 'guests':
      return queryFunctions.list()
        .then( (value) => {
          let outerArr = []
          for(let i = 0; i < value.length; i++) {
            let arr = []
            arr.push('|  ' + value[i].id, value[i].name, value[i].email)
            outerArr.push(arr)
          }
          pgp.end()
          console.table(['ID','Name','Email'], outerArr)
        })
      
    case 'rooms':
      return queryFunctions.listAll()
        .then( (value) => {
          let outerArr = [];
          for (let i = 0; i < value.length; i++) {
            let arr = []
            arr.push('|  ' + value[i].room_number, value[i].capacity, value[i].available)
            outerArr.push(arr)
          }
          pgp.end()
          console.table(['Room Number', 'Capacity', 'Available'], outerArr)

        })

    case 'rooms --available':
      return queryFunctions.listAvailable()
        .then( (value) => {
          let outerArr = [];
          for (let i = 0; i < value.length; i++) {
            let arr = []
            arr.push('|  ' + value[i].room_number, value[i].capacity, value[i].available)
            outerArr.push(arr)
          }
          pgp.end()
          console.table(['Room Number', 'Capacity', 'Available'], outerArr)
        })
    case 'bookings':
        return queryFunctions.bookings()
          .then((value) => {
            console.log(value)
          })
  }
}

  processCommands(command)

