import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'


function User_edit() {
    const mynav = useNavigate();
    const { id } = useParams();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [user, updateuser] = useState({
        emailid: "",
        username: "",
        dob: "",
        mobileno: "",
        gender: "",
        picture: "",
        pass: ""
    })


    const getsingleuser = async () => {
        await axios.get(`http://localhost:8700/singleuser/${id}`).then((r) => {
            console.log(r);
            updateuser(r.data.user);
        })
    }

    useEffect(() => {
        getsingleuser();
    }, []);

    const updatelogininfo = (d) => {
        const { name, value } = d.target;
        updateuser(prev => ({
            ...prev,
            [name]: value
        }));
    }

//  const updatelogininfo1 = (e) => {
//         const pic = e.target.files[0];
//         const { name, value } = e.target;
//         if (pic) {
//             const imageUrl = URL.createObjectURL(pic);
//             console.log(imageUrl);
//            updateuser(prev => ({
//             ...prev,
//             [name]: value
//         }));
//         }
//     };








    const formsubmit = async (d) => {
        await axios.patch(`http://localhost:8700/edituser/${id}`, d).then((r) => {
            console.log(r);
                if(r.data.mystatus===210)
                {
                    toast.success(r.data.msg,{autoClose:2000,theme:"dark",position:"top-left"});
                    setTimeout(()=>{
                        mynav('/dashboard');
                    },2000)
                }

        })

    }










    return (
        <form onSubmit={handleSubmit(formsubmit)} className='mt-5'>
            <div className="container-fluid mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-12 bg-light shadow p-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p className="h2 mt-3 mb-5">User Edit page</p>
                                    <ToastContainer />
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">  Email address</label>
                                        <input type="email" className="form-control"
                                            value={user.emailid} name='emailid'
                                            onInput={updatelogininfo} disabled />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                   
                                    <div className="mb-3">
                                        <label className="form-label"> User Name</label>
                                        <input type="text" className="form-control" {...register("username", { required: true })} value={user.username} name='username' onInput={updatelogininfo} />
                                        {errors.username && <p className='text-danger'>username is required</p>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label"> DOB</label>
                                        <input type="date" className="form-control" {...register("dob")} value={user.dob} name='dob' onChange={updatelogininfo} />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label"> Mobile No</label>
                                        <input type="tel" className="form-control" {...register("mobileno")} value={user.mobileno} name='mobileno' onInput={updatelogininfo} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Gender</label>
                                        <select className='form-select' {...register("gender")} value={user.gender} name='gender' onChange={updatelogininfo}>
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
                                        <input type="text" className="form-control" placeholder='url only' {...register("picture")} value={user.picture} name='picture' onInput={updatelogininfo} />
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label"> Password</label>
                                        <input type="password" className="form-control" {...register("pass", { required: true, minLength: 5, pattern: /^[0-9]{3}@[a-z]{3}$/ })} value={user.pass} name='pass' onInput={updatelogininfo} />
                                        {errors.pass?.type === "required" && <p className='text-danger'>password id is required</p>}
                                        {errors.pass?.type === "minLength" && <p className='text-info'>password minimun 5 charectors required</p>}
                                        {errors.pass?.type === "pattern" && <p className='text-warning'>statring 3 dit last 3 cha</p>}

                                    </div>
                                </div>

                                <div className="col-md-12 text-center">
                                    <div className="mb-3">
                                        <input type="submit" className="btn btn-success" value="Update Now" />

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

export default User_edit