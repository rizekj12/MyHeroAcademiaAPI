import express from "express"
import students from "../data/students.json"
import _ from "lodash"

const router = express.Router()

router.get('/', (req, res) => {
    res.json(students)
})

router.get(`/:id`, (req , res) => {
const student = _.find(students, student => student.id === req.params.id);
if (student) {
    res.json(student)
} else {
    res.send(`User ${req.params.id} does not exist`)
}
})

router.post('/', (req,res) => {
console.log('handling post request...')
res.end()
})

router.put('/', (req,res) => {
console.log('handling put request...')
res.end()
})

router.delete('/', (req,res) => {
console.log('handling delete request...')
res.end()
})

router.get('/route-handlers', (req, res, next)=>{
res.send('learning route-handlers is fun')
next()
},(req, res, next)=>{
console.log('second handler!')
next()
},(req,res)=>{
console.log('third handler!!')
}
)

module.exports = router;