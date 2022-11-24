const express = require('express');
const app = express();
const cors = require('cors');
const providerRoute = require('./routes/providersRoute');
const bookingsRoute = require('./routes/bookingsRoute');
const classesRoute = require('./routes/classesRoute');
const groupsRoute = require('./routes/groups');
const informationRoute = require('./routes/information');

require('dotenv').config()

const PORT = process.env.PORT || 8080;

//CORS middleware
app.use(cors());

//Middleware to give access to req.body
app.use(express.json());

//Middleware to serve up static files. Put all images in the public library.
app.use(express.static('assets'));


// Endpoints
app.use("/providers", providerRoute);
app.use('/bookings', bookingsRoute);
app.use('/classes', classesRoute);
app.use('/groups', groupsRoute);
app.use('/information', informationRoute);

app.get('/', (req, res) => {
  res.send("Welcome to Misely Server")
})


//startup the local server. Change port to 8080 if .env is ignored by git.
app.listen(PORT, () => {
  console.log("Server is up and running");
})