import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function User_registor() {

const {register,handleSubmit,formState: { errors }} = useForm()

const formsubmit = (d)=>{
    console.log(d);
}

  return (
    <form onSubmit={handleSubmit(formsubmit)}>
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
                            <input type="email" className="form-control" {...register("emailid",{required:true})}/>
                            {errors.emailid && <p className='text-danger'>email id is required</p>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label"> User Name</label>
                            <input type="text" className="form-control" {...register("username",{required:true})}/>
                            {errors.username && <p className='text-danger'>username is required</p>}
                        </div>
                    </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label"> DOB</label>
                            <input type="date" className="form-control" {...register("dob")}/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label"> Mobile No</label>
                            <input type="tel" className="form-control" {...register("mobileno")}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select className='form-select' {...register("gender")}>
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
                            <input type="text" className="form-control" placeholder='url only' {...register("picture")}/>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label"> Password</label>
                            <input type="password" className="form-control" {...register("pass",{required:true,minLength:5,pattern:/^[0-9]{3}@[a-z]{3}$/})}/>
                            {errors.pass?.type==="required" && <p className='text-danger'>password id is required</p>}
                             {errors.pass?.type==="minLength" && <p className='text-info'>password minimun 5 charectors required</p>}
                             {errors.pass?.type==="pattern" && <p className='text-warning'>statring 3 dit last 3 cha</p>}

                        </div>
                    </div>

                    <div className="col-md-12 text-center">
                        <div className="mb-3">
                            <input type="submit" className="btn btn-success" value="Registor Now"/>
                            <Link to="/usermanagement" className='ms-5'>login</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</form>

  )
}

export default User_registor