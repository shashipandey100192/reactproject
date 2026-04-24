import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function UserTable(props) {
    const [user, updateuser] = useState([]);

  const getdata = () => {
   
    axios.get('http://localhost:8700/alluserlist',{withCredentials: true}).then((d) => {
      console.log(d.data.emplist);
      updateuser(d.data.emplist);
    })
  }

  useEffect(() => {
    getdata()
  }, []);




const deletedata = async (a)=>{
  await axios.delete(`http://localhost:8700/userdelete/${a}`).then((r)=>{
    console.log(r);
    getdata();
  })

}

  return (
    <div class="card mb-3 shadow border">
            <div class="card-body">
    <p>Employee List: [ {user.length} ]</p>
    
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">sno</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Username</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Pass</th>
                    <th scope="col">Profile</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((u)=>{
                    return(
                      <tr>
                    <th scope="row">{u._id}</th>
                    <td>{u.emailid}</td>
                    <td>{u.dob}</td>
                    <td>{u.gender}</td>
                    <td>{u.username}</td>
                    <td>{u.mobileno}</td>
                    <td>{u.password}</td>
                    <td><img src={u.picture} width="30" alt={u.username}/></td>
                    <td> 
                      <span class="badge text-bg-primary btn">View</span>
                      <span class="badge text-bg-danger ms-1 btn" onClick={()=>deletedata(u._id)}>Del</span>
                      <Link to={"edituser/"+u._id} class="badge text-bg-warning ms-1 btn">Edit</Link>


                    </td>
                  </tr>
                    )
                  })}
                  

                </tbody>
              </table>
            </div>
          </div>
  )
}

export default UserTable