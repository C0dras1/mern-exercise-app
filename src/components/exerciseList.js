import React, { useState, useEffect} from 'react'
import axios from 'axios'

import Exercise from './Exercise'

function ExerciseList() {
  const [exercises, setExercises] = useState([])

  const deleteExercise = (id) => {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(res => console.log(res.data))
    setExercises(exercises.filter(el => el._id !== id)
    )}

  useEffect(() => {
    axios.get('http://localhost:5000/exercises')
      .then(res => setExercises(res.data))
      .catch(err => console.log(err))
  }, [])

  const exerciseList = () => {
    return exercises.map(current =>
      <Exercise exercise={current} deleteExercise={deleteExercise} key={current._id} />
    )
  }

  return (
    <div>
      <h3>Existing Exercises</h3>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { exerciseList() }
        </tbody>
      </table>
    </div>
  )
}

export default ExerciseList