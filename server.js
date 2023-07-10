const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()


//Controllers
const apartmentController = require(`./controllers/apartmentController`)

const houseController = require(`./controllers/houseController`)

// //Middleware
// app.use(cors())
// app.use(express.json())

//Routes
app.get('/', (req, res) => {
  res.send("working")
})

app.get('/apartments', apartmentController.getApartments) 
app.get('/houses', houseController.getHouses) 
app.get('/apartments/:id', apartmentController.getApartment) 
app.get('/houses/:id', houseController.getHouse) 


app.listen(PORT,() => console.log(`Server runnin on ${PORT}`))
