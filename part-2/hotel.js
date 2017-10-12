const command = process.argv[2]
const arg = process.argv.slice([3]).join().replace(/\,/g, ' ')
const queryFunctions = require('./db/db.js')
require('console.table');

const processCommands = () => {
  switch (command) {
    case 'guests':
      return queryFunctions.list().then((value) => {
        // console.log(value)
        let outerArr = []
        for(let i = 0; i < value.length; i++) {
          let arr = []
          arr.push('|  ' + value[i].id, value[i].name, value[i].email)
          outerArr.push(arr)
        }
        console.table(['ID','Name','Email'], outerArr)
        })
      }
  }


const writeToConsole = (value) => {

}
processCommands()