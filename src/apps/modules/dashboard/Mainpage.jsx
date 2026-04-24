import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Mycustomgraph } from './Graphpage';
import UserTable from './UserTable';
import Eyetable from './Eyetable';
import { useSelector,useDispatch } from 'react-redux';
import { increment,changename } from '../reduxpage/Myfunctions';

function Mainpage() {

  const [user, updateuser] = useState([]);
  

  const getdata = () => {
    axios.get('http://localhost:8700/alluserlist',{withCredentials: true}).then((d) => {
      console.log(d.data.emplist);
      updateuser(d.data.emplist);

    })
  }
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-md-3 mt-5'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Total Emps</h5>
              <h4 class="card-text">{user.length}</h4>
              
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-5'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Males Emps</h5>
              <p class="card-text">{user.filter((m)=>{return m.gender==="Male"}).length}</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 mt-5'>
          <div class="card text-bg-primary mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Females Emps</h5>
              <p class="card-text">{user.filter((m)=>{return m.gender==="Female"}).length}</p>
            </div>
          </div>
        </div>
        
       
       
        
        

        <div className='col-md-7 mt-3'>
          <div class="card mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              {/* <Mycustomgraph/> */}
            </div>
          </div>
        </div>
        <div className='col-md-5 mt-3'>
          <div class="card mb-3 shadow border">
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              {/* <Eyetable userlist={cgreen}></Eyetable> */}
            </div>
          </div>
        </div>
        <div className='col-md-12 mt-3'>
          <UserTable></UserTable>
        </div>

      </div>
    </div>
  )
}

export default Mainpage