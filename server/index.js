const express = require('express')
const cors = require('cors');
const userRoutes = require('./routes/user')
const activityRoutes = require('./routes/activity')
const authRoutes = require('./routes/auth')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()

const app = express()

app.use(cors(
  {
    origin: true,
    credentials: true
  }
));
app.options('*', cors(
  {
    origin: true,
    credentials: true
  }
));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use(cookieParser());
app.use(bodyParser.json())

//Route
app
  .use("/user", userRoutes)
  .use("/user", authRoutes)
  .use("/activity", activityRoutes)
  .get("/", (req, res) => res.send("Welcome to the API!"))
  .get("/test-stress", (req, res) => {
    res.send("Welcome to the API!"+`${process.env.MESSAGE}`)
  })
  .all("*", (req, res) => res.send("You've tried reaching a route that doesn't exist."))

app.use(errorHandler)

//dB
mongoose
  .connect(process.env.MONGODB_CONN) 
  .then(console.log("Connected to database"))
  .catch((error) => console.error(error))
console.log(process.env.MONGODB_CONN)
//Server / URL
app.listen(process.env.PORT, () => 
  console.log(`Server running on port: http://localhost:${process.env.PORT}`)
)
