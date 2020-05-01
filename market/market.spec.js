const request = require("supertest");
const auth = require("../auth/auth-router.js");
const db = require("../data/dbConfig.js");
const server = require("../api/server.js");

describe("marketRouter.js Endpoints", () => {

    const testCustomer = {
        id: 123,
        username: "Latale@gmail.com",
        password: "VIP",
        name: "Lamel"
    };

    const testItems = {
        id: 1,
        name: "Blender",
        price: "20.00$",
        category: "Applince",
        location: "Nigeria",
        users_id: 1
    }

    let token;

    beforeEach(async () => {
        token = auth.generateToken(testCustomer)
        await db ("items")
            .truncate()
            .then(() => db("users").truncate())
            return db("users")
            .insert(testCustomer)
            .then(() => db("items").insert(testItems))
    })

    describe("GET /api/market/items/:id", () => {

        it("Should return status 200", async () => {
            const res = await request(server)
                .get(`/api/market/items/:id`)
                .set("Authorization", token)
                expect(res.status).toBe(200)
        })

        it("Should return the object", async () => {
            const res = await request(server)
                .get(`/api/market/items/:id`)
                .set("Authorization", token)
                expect(res.body).toEqual(testItems)
        })
    })
})