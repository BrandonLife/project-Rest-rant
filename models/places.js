const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String, default: undefined},
  cuisines: { type: String, required: true },
  city: { type: String, default: undefined},
  state: { type: String, default: undefined },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)
