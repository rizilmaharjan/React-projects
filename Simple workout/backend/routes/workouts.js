const express = require("express");
const {createWorkout,getWorkouts, getSingleWorkout,deleteWorkout,updateWorkout} = require("../controllers/workoutcontroller")

const router = express.Router();

// this is to get all workouts
router.get("/", getWorkouts)
 

// GET single workout
router.get("/:id", getSingleWorkout);

// POST a new workouts
router.post("/",createWorkout);

// DELETE a new workout
router.delete("/:id", deleteWorkout );
// UPDATE a new workout
router.patch("/:id",updateWorkout);

module.exports = router;
