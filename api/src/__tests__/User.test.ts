import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'

 describe("Users", () => {
     beforeAll(async () => {
         const Connection = await createConnection();
         await Connection.runMigrations();
     })

     it("Should be able to create a new table", async () => {
        const response = await request(app).post("/users").send({
            email: "edu@edu.com",
            name:"edu test"
        })

        expect(response.status).toBe(201)
     })

     it("Should NOT be able to create a new User with an existent e-mail", async () => {
        const response = await request(app).post("/users").send({
            email: "edu@edu.com",
            name:"edu test"
        })

        expect(response.status).toBe(400)
     })
 })