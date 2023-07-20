const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String, default: 'https://www.thetechedvocate.org/wp-content/uploads/2023/03/52.jpg'},
  cuisines: { type: String, required: true },
  city: { type: String, default: undefined},
  state: { type: String, default: undefined },
  founded:{type: Number, min:[1673, "Surely no that old?!"], max:[new Date().getFullYear(), " Hey, this year is in the future!"]}
})
placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}


module.exports = mongoose.model('Place', placeSchema)
