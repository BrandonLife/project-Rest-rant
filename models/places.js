const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String, default: undefined},
  cuisines: { type: String, required: true },
  city: { type: String, default: undefined},
  state: { type: String, default: undefined },
  founded: Number
})
placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}


module.exports = mongoose.model('Place', placeSchema)
