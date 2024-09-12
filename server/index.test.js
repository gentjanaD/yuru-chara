const request = require("supertest");
const app = require("./index");
const mongoose = require("mongoose");
const { db } = require("./models/model.mascots");

    describe("Test the root path", () => {
        test("It should response the GET method", async() => {
          const response = await request(app).get("/mascots");
          expect(response.statusCode).toBe(200);
        });
      });
    


// describe("Test the root path", () => {
//   test("It should response the GET method", async() => {
//     const response = await request(app).get("/mascots");
//     expect(response.statusCode).toBe(200);
//   });
// });

describe("POST /mascots", () => {
    describe("", () => {
  
      test("should respond with a 201 status code", async () => {
        const response = await request(app).post("/mascots").send({
            name: "mascot",
            japanese: "tokio",
            mascot: "mascot"
        })
        expect(response.statusCode).toBe(201)
      })
      test("should specify json in the content type header", async () => {
        const response = await request(app).post("/mascots").send({
          name: "mascot",
          japanese: "tokio",
          mascot: "mascot"
        })
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
      })
      test("response has Id", async () => {
        const response = await request(app).post("/mascots").send({
            name: "mascot",
            japanese: "tokio",
            mascot: "mascot"
        })
        expect(response.body._id).toBeDefined()
      })
    }) 
});

//Put testing 

describe("PUT /mascots/:id", function () {
    const id = "615ae27bde94be018bcdc4fc"
    it("Respond with 200", function (done) {

        request(app)
            .put(`/mascots/${id}`)
            .set('Accept', 'application/json')
            .expect(200, done);

    });
});
