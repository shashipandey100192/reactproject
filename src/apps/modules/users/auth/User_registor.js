import React from 'react'
import { Link } from 'react-router-dom'

function User_registor() {
  return (
    <div className="container mt-3">
    <div className="row justify-content-center">
        <div className="col-md-7 bg-light shadow p-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="h2 mt-3 mb-5">New User Registor</p>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">  Email address</label>
                            <input type="email" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label"> User Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label"> DOB</label>
                            <input type="date" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label"> Mobile No</label>
                            <input type="tel" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select className='form-select'>
                                <option hidden>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label"> Profile Pic</label>
                            <input type="text" className="form-control" placeholder='url only'/>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label"> Password</label>
                            <input type="password" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-12 text-center">
                        <div className="mb-3">
                            <input type="button" className="btn btn-success" value="Registor Now"/>
                            <Link to="/usermanagement" className='ms-5'>login</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default User_registor