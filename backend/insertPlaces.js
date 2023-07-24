const mongoose = require('mongoose');
const Place = require('./Place');
const places = require('./PlacesJson')




mongoose.connect('mongodb+srv://admin:Vw1CeaPGCaLrvOIc@cluster0.ayed85h.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));



async function insertPlaces() {
    try {
      await Place.insertMany(places);
      console.log('Data has been inserted!');
    } catch (error) {
      console.error(error);
    } finally {
      // Closing the connection allows the script to exit
      mongoose.connection.close();
    }
  }
  
  insertPlaces();