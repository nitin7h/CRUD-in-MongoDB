const express = require("express")
require('dotenv').config()
const cors = require("cors")
const router = require("./routes/router")
const { dbConnection } = require("./database/connection")

const url = process.env.URL
const port = process.env.PORT

const app = express()


//Plugin Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//Database Connection
dbConnection(url)

//Routes
app.use("/", router)

app.listen(port, () => {
    console.log(`Port listening on  http://localhost:${port} `);
})