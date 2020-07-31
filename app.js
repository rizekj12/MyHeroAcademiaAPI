import express from "express"
import students from "./data/students.json"

const PORT = 3000

const server = express();

const buildURL = (version , path) => `/api/${version}/${path}`;
const STUDENT_BASE_URL = buildURL('v1', 'students')


server.get(STUDENT_BASE_URL, (req, res) => {
        res.json(students)
})

server.post(STUDENT_BASE_URL, (req,res) => {
    console.log('handling post request...')
    res.end()
})

server.put(STUDENT_BASE_URL, (req,res) => {
    console.log('handling put request...')
    res.end()
})

server.delete(STUDENT_BASE_URL, (req,res) => {
    console.log('handling delete request...')
    res.end()
})



server.listen(3000, ( )=> {
    console.log(`server started on port ${PORT}`)

});