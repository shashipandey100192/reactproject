import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Productpage() {

  const [a, b] = useState([]);

  const myapi = () => {
    axios.get('https://dummyjson.com/products?limit=5').then((d) => {
      console.log(d.data.products);
      b(d.data.products);
    });

  }
  useEffect(() => {
    myapi();
  },[])


  return (
    <div className='container-fluid'>
      <div className='row'>

        {a.map((x)=>{
          return(
            <div className='col-md-12'>
          <div class="card">
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{x.title} </h5>
                <p class="card-text">{x.description}</p>
                <a href="#" class="btn btn-primary"></a>
              </div>
          </div>
        </div>

          )

        })}
        
      </div>


    </div>
  )
}

export default Productpage