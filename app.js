import express from "express"
import students from "./data/students.json"
import _ from "lodash"
import studentRoutes from "./routes/studentRoutes"

const PORT = 3000

const server = express();

const buildURL = (version , path) => `/api/${version}/${path}`;
const STUDENT_BASE_URL = buildURL('v1', 'students')


server.use(STUDENT_BASE_URL, studentRoutes)



server.listen(3000, ( )=> {
    console.log(`server started on port ${PORT}`)

});