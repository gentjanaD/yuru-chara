const request = require("supertest");
const app = require("./index");



describe("Test the root path", () => {
  test("It should response the GET method", async() => {
    const response = await request(app).get("/mascots");
    expect(response.statusCode).toBe(200);
  });
});

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