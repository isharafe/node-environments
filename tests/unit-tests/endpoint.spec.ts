import app from "../../src";
// import supertest from "supertest";

const supertest = require("supertest");
const server = app;
const request = supertest(server);

it("Gets the root endpoint", async () => {
    // Sends GET Request to / endpoint
    const response = await request.get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("environment: test. env value: undefined");
    // expect(response.body.message).toBe("pass!");
    // done();
});
