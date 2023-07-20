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
    if(error && error.name == "ValidationError"){
      //TODO Generate error message
      let message = "Validation Error: "
      for(let field in error.errors){
        message+= `${field} was ${error.errors[field].value}. `
        
        message+= `${error.errors[field].message}`
      }
      res.render('places/new', {message})
    }else{
      res.render('error404')
    }
  }
 
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', async (req, res) => {
  try{
    let {id}= req.params
    let place = await db.Place.findById(id)
    res.render('places/show', {place} )
  }
  catch(error){
    console.log(error)
    res.render('error404')
  }
 
})


router.get('/:id/edit', async (req, res) => {
  let {id}= req.params
  try{
    let place = await db.Place.findById(id)
    res.render('places/edit', { place })
  }catch(error){
    console.log(error)
    res.render('error404')
  }
})


router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})
router.put('/:id', async (req, res) => {
  let {id}= req.params
  try{
 // Dig into req.body and make sure data is valid
 if (!req.body.pic) {
  // Default image if one is not provided
  req.body.pic = 'https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/fhvbgmtw/a75b8bf9-f8e2-4903-abd2-08913f774cb1.jpg'
}
if (!req.body.city) {
  req.body.city = 'Anytown'
}
if (!req.body.state) {
  req.body.state = 'USA'
}

// Save the new data into places[id]
await db.Place.findByIdAndUpdate(id, req.body)
res.redirect(`/places/${id}`)
  }catch(error){
    console.log(error)
    res.render('error404')
  }
})


router.delete('/:id', async (req, res) => {
 let {id}= req.params
try{
  await db.Place.findByIdAndDelete(id)
  res.redirect('/places')
}catch(error){
console.log(error)
res.render('error404')
}
})


module.exports = router
