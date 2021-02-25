import { response } from 'express'
import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'

 describe("Surveys", () => {
     beforeAll(async () => {
         const Connection = await createConnection();
         await Connection.runMigrations();
     })

     it("Should be able to create a new survey", async () => {
        const response = await request(app).post("/survey").send({
            title: "test",
            description:"integration test on survey"
        })

        expect(response.status).toBe(201)
     })

     it("Should be able to get all survey", async () => {
        await request(app).post("/survey").send({
            title: "test2",
            description:"integration test on survey2"
        })

        const response = await request(app).get("/survey")
        expect(response.body.length).toBe(2)
     })
 })