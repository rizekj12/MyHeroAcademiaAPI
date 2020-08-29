import express from "express"
import morgan from "morgan"
import characters from "./data/characters.json"
import _ from "lodash"
import characterRoutes from "./routes/characterRoutes"
import bodyParser from "body-parser"

const PORT = 3000

const server = express();

server.use(morgan('tiny'))
server.use(bodyParser.json())

const buildURL = (version , path) => `/api/${version}/${path}`;
const CHARACTER_BASE_URL = buildURL('v1', 'characters')


server.use(CHARACTER_BASE_URL, characterRoutes)



server.listen(3000, ( )=> {
    console.log(`server started on port ${PORT}`)

});