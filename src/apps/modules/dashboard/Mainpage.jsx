import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Mainpage() {
  const [user, updateuser] = useState([]);

  const getdata = () => {
    axios.get('http://localhost:8700/emp').then((d) => {
      console.log(d.data);
      updateuser(d.data);
    })
  }
  useEffect(() => {
    getdata()
  }, []);

const deletedata = (a)=>{
  axios.delete(`http://localhost:8700/emp/${a}`).then((r)=>{
    console.log(r);
    getdata();
  })

}


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-3'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>

        <div className='col-md-8 mt-3'>
          <div class="card mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-4 mt-3'>
          <div class="card mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">card’s content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-12 mt-3'>
          <div class="card mb-3 shadow border">
            <div class="card-body">

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">sno</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Username</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Actions</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {user.map((u)=>{
                    return(
                      <tr>
                    <th scope="row">{u.id}</th>
                    <td>{u.emailid}</td>
                    <td>{u.dob}</td>
                    <td>{u.gender}</td>
                    <td>{u.username}</td>
                    <td>{u.mobileno}</td>
                    <td> 
                      <span class="badge text-bg-primary">View</span>
                      <span class="badge text-bg-danger" onClick={()=>deletedata(u.id)}>Del</span>
                      <span class="badge text-bg-warning">Edit</span>


                    </td>
                  </tr>
                    )
                  })}
                  

                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Mainpage