import express from "express"
import cors from "cors"
import { clerkMiddleware } from "@clerk/express"

import "dotenv/config"

import { connectDB } from "./lib/db.js"

const app = express()

const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL

app.use(express.json())

app.use(cors({
    origin: [FRONTEND_URL],
    credentials: true
}))

app.use(clerkMiddleware())



app.get("/health", (req, res) => {
    res.status(200).json({ message: "OK" })
})

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port: ${PORT}`)
})