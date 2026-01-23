import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

function User_login() {

    const [xyz,abc] = useState(500);
    const [one,two] = useState({name:"ravi",age:20,phone:"545454"});
    const mymsg = ()=>{
        abc("update value");
        two({name:"mohan",age:80,phone:"777777777"})
    }

    const [a,b]=useState("username");

    const userinput = (u)=>{
        console.log(u);
        b(u.target.value);
    }



const name="kumar";

  return (
   <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-5 bg-light shadow p-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="h2">Sign In {name}</p>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label className="form-label"> <MdOutlineEmail/> Email address</label>
                            <input type="email" className="form-control" value={a} onInput={userinput}/>
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
                        <p>{xyz}</p>
                        <p>{one.age}</p>
                        <input type='button' value="change" onClick={mymsg}/>

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