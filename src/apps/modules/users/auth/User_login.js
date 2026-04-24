import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

function User_login() {

    const mynav = useNavigate();

    const [login, updatelogin] = useState({
        emailid: "",
        password: ""
    });

    const updatelogininfo = (d) => {
        const { name, value } = d.target;
        updatelogin(prev => ({
            ...prev,
            [name]: value
        }));
    }


    const Myformsubmit = () => {
      
        axios.post('http://localhost:8700/userlogin', login,{withCredentials: true}).then((d) => {
            console.log(d);
            if (d.data.mystatus === 290) {
                toast.error(d.data.msg, { position: "top-left", theme: 'dark', autoClose: 2000 });
            }
            if (d.data.mystatus === 292) {
                toast.error(d.data.msg, { position: "top-left", theme: 'dark', autoClose: 2000 });
            }
            if (d.data.mystatus === 420) {
                toast.error(d.data.msg, { position: "top-left", theme: 'dark', autoClose: 2000 });
            }
            if (d.data.mystatus === 200) {
                toast.success(d.data.msg, { position: "top-left", theme: 'dark', autoClose: 2000 });
                setTimeout(() => {
                    mynav("/dashboard");
                }, 2000);
            }
        })

    }



    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 bg-light shadow p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <p className="h2">Sign In</p>
                                <ToastContainer />
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label"> <MdOutlineEmail /> Email address</label>
                                    <input type="email" className="form-control" value={login.emailid} onInput={updatelogininfo} name='emailid' />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label"><TbLockPassword /> Password</label>
                                    <input type="password" className="form-control" value={login.password} onInput={updatelogininfo} name='password' />
                                </div>
                            </div>

                            <div className="col-md-12 text-center">
                                <div className="mb-3">
                                    <input type="button" className="btn btn-success" value="login" onClick={Myformsubmit} />
                                    <input type="reset" className="btn btn-danger ms-2" value="cancel" />
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