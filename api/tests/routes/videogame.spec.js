/* eslint-disable import/no-extraneous-dependencies */
const { expect} = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
//const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);

const videogame = {
  name: 'Super Meaty Boy',
  description: "",
  platform:"WEB",
  genres:"Adventure"
};


describe('Videogame GET', () => {
  it('should get status 200', () => agent.get('/games').expect(200));
  it('should response 100 or more games', () => agent.get("/games").then((res) => {
    expect(res.body).to.have.lengthOf.above(99)
  }))
  it('should return array', () => agent.get("/games").then((res) => {
    expect(res.body instanceof Array).to.be.true;
  }))
});


describe("Genre GET", () => {
  it("should get status 200", () => agent.get("/genre").expect(200))
  it('should return array', () => agent.get("/genre").then((res) => {
    expect(res.body instanceof Array).to.be.true;
  }))
})

describe("Platforms GET", () => {
  it("should get status 200", () => agent.get("/platforms").expect(200))
  it('should return array', () => agent.get("/platforms").then((res) => {
    expect(res.body instanceof Array).to.be.true;
  }))
})








// /* eslint-disable import/no-extraneous-dependencies */
// const { expect } = require('chai');
// const session = require('supertest-session');
// const app = require('../../src/app.js');
// const { Videogame, conn } = require('../../src/db.js');

// const agent = session(app);
// const videogame = {
//   name: 'Super Mario Bros',
// };

// describe('Videogame routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Videogame.sync({ force: true })
//     .then(() => Videogame.create(videogame)));
//   describe('GET /videogames', () => {
//     it('should get 200', () =>
//       agent.get('/videogames').expect(200)
//     );
//   });
// });
