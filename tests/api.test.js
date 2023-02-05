const request = require('supertest');

const app = require('../src/app');

//* Get all users endpoint
describe('GET /users', () => {

    it("respond with json containing a list of all users",  (done) => {
      request(app)
        .get("/users")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });


});

describe('GET /users/:id', () => {
    it('respond with json containing a single user',  done => {
        request(app)
          .get("/users/U0001")
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200, done);
    });

  it('respond with json "User U0001 Found" when the user exists', done => {
         request(app)
          .get('/users/U0001')
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .expect('"User U0001 Found"')
          .end((err) => {
            if(err) return done(err);
            done();
          });
  });


    it("respond with json 'User not found!' when the user does not exists", done => {
        request(app)
          .get("/users/nonexistinguser")
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(404)
          .expect('"User not found!"')
          .end((err) => {
            if (err) return done(err);
            done();
          });
    });
});


describe('POST /users',  () => {

   it('response with 201 craeted',  (done) => {
        const data = {
            username: 'fazt',
            password: 'password123'
        };
          request(app)
            .post('/users')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err)
                    return done(err);
                done();
            });
    });

    it('respond with code 40 on bad request', done => {
     const data = {};
      request(app)
        .post("/users")
        .send(data)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(400)
        .expect('"User not created"')
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
});



