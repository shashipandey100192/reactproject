import React from 'react'
import { Link } from 'react-router-dom'

function Apperror() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 text-center p-5 errorpage'>
                <h1>404</h1>
                <p>Page Note Found</p>
                <Link to="/usermanagement" className="btn btn-danger">Back to Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Apperror