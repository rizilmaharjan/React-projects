require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const workoutRoutes = require("./routes/workouts");

// express
const app = express();

// middleware
app.use(cors())
app.use(express.json());
app.use((req, res, next) => {
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db

const start = async()=>{
    try {
        const connectDB = await mongoose.connect(process.env.MONGO_URI);
        if (connectDB.connection.readyState === 1) {
          // listen for requests
          app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
          });
        }
      } catch (error) {
        console.log(error);
      }
      

}
start();


