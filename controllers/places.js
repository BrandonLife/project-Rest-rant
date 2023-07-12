const router = require("express").Router();
const places = require('../models/places')

router.get("/", (req, res) => {

  res.render("places/index", { places });
});

router.get('/new', (req, res)=>{
  res.render('places/new')
})
router.post('/', (req, res)=>{

  if(!req.body.pic){
    req.body.pic= 'https://upload.wikimedia.org/wikipedia/commons/3/36/Southwest_Raleigh%2C_Raleigh%2C_NC%2C_USA_-_panoramio.jpg' 
  }
  if(!req.body.city){
    req.body.city = "Anytown"
  }
  if(!req.body.state){
    req.body.state = "USA"
  }
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router;
