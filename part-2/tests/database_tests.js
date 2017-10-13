const { queryFunctions } = require('../db/db.js')
// const processCommands = require('../hotel')
const chai = require('chai')
const expect = require('chai').expect();
const should = require('chai').should();

chai.use = require('chai-as-promised')

context('queryFunctions.list()', () => {
    it('List all guests', () => {
      return queryFunctions.list()
      .then((result) => {
          result.length.should.equal(20);
    })
  })

  context('queryFunctions.listAll()', () => {
    it('List all rooms along with their capacity and current availability', () => {
      return queryFunctions.listAll()
      .then((result) => {
          result.length.should.equal(40);
      })
    })
  })

  context('queryFunctions.listAvailable()', () => {
    it('List only available rooms with the --available option', () => {
      return queryFunctions.listAvailable()
      .then((result) => {
          result.length.should.equal(6);
        })
    })
  })

  context('queryFunctions.bookings()', () => {
    it('List all upcoming room bookings (soonest check-in date first)', () => {
      return queryFunctions.bookings()
      .then((result) => {
          result.length.should.equal(34);
      })
    })
  })

  context('queryFunctions.single()', () => {
    it('List room bookings for one room (soonest check-in date first)', () => {
      return queryFunctions.single('2A')
        .then((result) => {
          result.length.should.equal(2);
        })
    })
  })
  
})