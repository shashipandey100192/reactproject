import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

function User_login() {
  return (
   <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-5 bg-light shadow p-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="h2">Sign In</p>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label className="form-label"> <MdOutlineEmail/> Email address</label>
                            <input type="email" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label className="form-label"><TbLockPassword/> Password</label>
                            <input type="password" className="form-control"/>
                        </div>
                    </div>

                    <div className="col-md-12 text-center">
                        <div className="mb-3">
                            <input type="button" className="btn btn-success" value="login"/>
                            <input type="reset" className="btn btn-danger ms-2" value="cancel"/>
                            <Link to="registor">new user</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default User_login