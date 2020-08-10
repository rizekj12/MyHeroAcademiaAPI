import express from "express"
import characters from "./data/characters.json"
import _ from "lodash"
import characterRoutes from "./routes/characterRoutes"

const PORT = 3000

const server = express();

const buildURL = (version , path) => `/api/${version}/${path}`;
const CHARACTER_BASE_URL = buildURL('v1', 'characters')


server.use(STUDENT_BASE_URL, characterRoutes)



server.listen(3000, ( )=> {
    console.log(`server started on port ${PORT}`)

});