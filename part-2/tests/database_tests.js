const { queryFunctions } = require('../db/db.js')
// const processCommands = require('../hotel')
const chai = require('chai')
const expect = require('chai').expect();
const should = require('chai').should();

chai.use = require('chai-as-promised')

context('queryFunctions.list()', () => {
    it('List all rooms along with their capacity and current availability', () => {
      return queryFunctions.list().then(
        function (result) {
          result.length.should.equal(20);
    })
  })
})