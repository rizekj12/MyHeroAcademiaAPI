import express from "express"
import characters from "../data/characters.json"
import _ from "lodash"
import mongoose from 'mongoose'

const DB_USER = 'Rizekj1'

const USER_PASSWORD = 'PlusUltra'

const DB_URL = `mongodb+srv://${DB_USER}:${USER_PASSWORD}@cluster0.zcydx.mongodb.net/MyHero?retryWrites=true&w=majority`

const router = express.Router()

let charactersArr = characters

mongoose.connect(DB_URL, { useUnifiedTopology: true })

const db = mongoose.connection

db.once('open', () => {
    console.log('hooray we are connected to Atlas')
})

const CharacterSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    image: String,
    alias: String,
    quirk: String,
    status: String,
    occupation: String,
    age: String,
    height: String,
    birthday: String
})

const CharacterModel = mongoose.model('Character', CharacterSchema)



router.get('/', (req, res) => {
    CharacterModel.find((err, characters) => {
        if (err) res.status(500).send(err)
        res.json(characters)
    })
})

router.get(`/:id`, (req, res) => {
    CharacterModel.findById(req.params.id,(err,character)=>{
        if (err) res.status(500).send(err)
        if (character) {
                res.json(character)
            } else {
                res.status(404).send(`User ${req.params.id} does not exist`)
            }
    })

})

//  trying to make a route that returns lists of characters based on occupation


router.post('/', (req, res) => {
    const id = new mongoose.Types.ObjectId()
    const characterToPersist = Object.assign({
      _id: id  
    }, req.body)
    const character = new CharacterModel(characterToPersist)

    character.save().then((err, character) => {
        if(err) res.status(500).send(err)
        res.json(character)
    })
})

router.put('/:id', (req, res) => {
   CharacterModel.findById(req.params.id, (err,character) => {
   if(err) res.status(500).send(err)
   if (character) {
   character.name = req.body.name
   character.image = req.body.image
   character.alias = req.body.alias
   character.quirk = req.body.quirk
   character.status = req.body.status
   character.occupation = req.body.occupation
   character.save().then((err, character) => {
    if(err) res.status(500).send(err)
    res.json(character)
   })
    }else{
        res.status(404).send(`User ${req.params.id} does not exist`)
    }
   })
})

router.delete('/:id', (req, res) => {
    CharacterModel.findByIdAndRemove(req.params.id, (err, character) => {
        if (err) res.status(500).send(err)
        res.status(200).send(`Character with id ${req.params.id} was deleted`)
    })
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


module.exports = router;