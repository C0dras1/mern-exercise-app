import React, {useState, useEffect} from 'react'
import axios from 'axios'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

function EditExercise(props) {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [date, setDate] = useState(new Date() )
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/exercises/'+props.match.params.id)
      .then(res => {
        setUsername(res.data.username)
        setDescription(res.data.description)
        setDuration(res.data.duration)
        setDate(new Date(res.data.date))
      })
      .catch(err => console.log(err))

    axios.get('http://localhost:5000/users/')
      .then(res => {
        if (res.data.length > 0) {
          setUsers(res.data.map(user => user.username))
          setUsername(res.data[0].username)
        }
      })
  }, [])

  const handleUsernameChange= e => setUsername(e.target.value)

  const handleDescriptionChange= e => setDescription(e.target.value)

  const handleDurationChange= e => setDuration(e.target.value)

  const handleDateChange= date => setDate(date)

  const handleSubmit = e => {
    e.preventDefault()

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date
    }
    console.log(exercise)

    axios.post('http://localhost:5000/exercises/update/'+props.match.params.id, exercise)
      .then(res => console.log(res.data))

    window.location = "/"
  }

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <select
          name="username"
          required
          value={username}
          onChange={handleUsernameChange}>
          {users.map(user => <option key={user} value={user}>{user}</option> )}
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

          <input type="submit" value="Edit Exercise Log" />
      </form>
    </div>
  )
}

export default EditExercise