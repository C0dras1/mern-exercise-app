import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">ExerTrack</Link>
      <ul>
        <li><Link to="/">Exercises</Link></li>
        <li><Link to="/create">Create Exercise Log</Link></li>
        <li><Link to="/user">Create User</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar