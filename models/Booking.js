const mongooes = require("mongoose");


const NewBooking = new mongooes.Schema({
 
    firstName: String,
    lastName: String,
    email: String,
    Location: String, 
    Tutor: String,
    Time: String
  });
  const Booking = mongooes.model("newBook", NewBooking);
  module.exports = Booking;
   