import React from 'react'
import { Link } from 'react-router-dom'

function User_login() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1>login page layout</h1>
                <Link to="registor">create new  user</Link>
            </div>
        </div>
    </div>
  )
}

export default User_login