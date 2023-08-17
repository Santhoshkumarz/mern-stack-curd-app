import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function UpdateUser() {
  const {id} = useParams()
  const [name, setName]=useState()
  const [email, setEmail]=useState()
  const [age, setAge]=useState()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:8080/getUser/"+id)
    .then(result => {console.log(result)
     setName(result.data.name)
     setEmail(result.data.email)
     setAge(result.data.age)
    })
    .catch(err => console.log(err))
  },[])

  const Update=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:8080/updateUser/"+id, {name,email,age} )
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <>
       <h2 style={{textAlign:'center'}}>Update Form</h2>
        <form className='container' onSubmit={Update}>
        <div className="mb-3">
            <label  className="form-label">Name</label>
            <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)} />
        </div>

        <div className="mb-3">
            <label htmlFor='' className="form-label">Email</label>
            <input type="email" className="form-control" value = {email} onChange={(e)=> setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
            <label htmlFor='' className="form-label">Age</label>
            <input type="text" className="form-control" value = {age} onChange={(e)=> setAge(e.target.value)} />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}
