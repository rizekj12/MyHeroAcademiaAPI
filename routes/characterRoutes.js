import express from "express"
import characters from "../data/characters.json"
import _ from "lodash"

const router = express.Router()

let charactersArr = characters

router.get('/', (req, res) => {
    res.json(charactersArr)
})

router.get(`/:id`, (req, res) => {
    const character = _.find(charactersArr, character => character.id === req.params.id);
    if (character) {
        res.json(character)
    } else {
        res.send(`User ${req.params.id} does not exist`)
    }
})

//  trying to make a route that returns lists of characters based on occupation

// router.get(`/characters/:occupation`, (req , res) => {
//     const character = _.find(characters, character => character.occupation === req.params.occupation);
//     if (character) {
//         res.json(character)
//     } else {
//         res.send(`User ${req.params.occupation} does not exist`)
//     }
//     })

router.post('/', (req, res) => {
    console.log('handling post request...')
    console.log(req.body)
    //could do validations
    charactersArr.push(req.body)
    res.status(200).send("Alright!")
})

router.put('/', (req, res) => {
    console.log('handling put request...')
    res.end()
})

router.delete('/', (req, res) => {
    console.log('handling delete request...')
    res.end()
})

router.get('/route-handlers', (req, res, next) => {
    res.send('learning route-handlers is fun')
    next()
}, (req, res, next) => {
    console.log('second handler!')
    next()
}, (req, res) => {
    console.log('third handler!!')
})

router.param('id',(req, res, next, id) => {
    if(isNaN(id)){
        next(`${id} is not a valid number`);
    }

})

module.exports = router;