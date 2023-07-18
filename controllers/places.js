const router = require('express').Router()
const db = require('../models')

router.get('/', async (req, res) => {
  try{
    let places = await db.Place.find()
    res.render('places/index', {places})
  }
  catch(error){
    console.log(error)
    res.render('error404')
  }
  
  
})

router.post('/', async (req, res) => {
  try{
    await db.Place.create(req.body)
    res.redirect('/places')
  }
  catch(error){
    console.log(error)
    res.render('error404')
  }
 
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', async (req, res) => {
  try{
    let {id}= req.params.id
    let place = db.Place.findById(id)
    res.render('places/show', {place} )
  }
  catch(error){
    console.log(error)
    res.render('error404')
  }
 
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
