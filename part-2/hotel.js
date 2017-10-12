const command = process.argv[2]
const arg = process.argv.slice([3]).join().replace(/\,/g, ' ')
const queryFunctions = require('./db/db.js')
require('console.table');

const processCommands = () => {
  switch (command) {
    case 'guests':
      return queryFunctions.list().then((value) => {
        console.log(value)
        })
      }
    break;
  }


const writeToConsole = (value) => {

}
processCommands()