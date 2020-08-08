import React, { useState } from 'react'
import axios from 'axios'

function CreateUser() {
  const [username, setUsername] = useState('')

  const handleUsernameChange= e => setUsername(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    const user = {username: username}
    console.log(user)

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data))

    setUsername('')
  }
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input 
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        <input 
          type="submit"
          value="Create User"
        />
      </form>
    </div>
  )
}

export default CreateUser