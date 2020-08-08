import React, { useState } from 'react'

function CreateUser() {
  const [username, setUsername] = useState('')

  const handleUsernameChange= e => setUsername(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    const user = {username: username}
    console.log(user)

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