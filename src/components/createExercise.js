import React, { useState, useEffect } from 'react'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

function CreateExercise() {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date() )
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(["test user"])
    setUsername("test user")
  }, [])

  const handleUsernameChange= e => setUsername(e.target.value)

  const handleDescriptionChange= e => setDescription(e.target.value)

  const handleDurationChange= e => setDuration(e.target.value)

  const handleDateChange= date => setDate(date)

  const handleSubmit = e => {
    e.prevent.default();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date
    }
    console.log(exercise)

    window.location = "/"
  }

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <select
          name="username"
          required
          value={username}
          onChange={handleUsernameChange}>
          {
            users.map(user => {
              return (
                <option
                  key={user}
                  value={user}>{user}
                </option>
            )})
          }
        </select>

        <label>Description: </label>
        <input 
          type="text"
          required
          name="description"
          value={description}
          onChange={handleDescriptionChange}
          />
        
        <label>Duration (in minutes): </label>
        <input 
          type="text"
          required
          name="duration"
          value={duration}
          onChange={handleDurationChange}
          />

          <label>Date: </label>
          <DatePicker 
            selected={date}
            onChange={handleDateChange}
          />

          <input type="submit" value="Create Exercise Log" />
      </form>
    </div>
  )
}

export default CreateExercise