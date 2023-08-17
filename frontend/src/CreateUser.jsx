import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function CreateUser() {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [age,setAge]=useState()
  const navigate = useNavigate()

  const Submit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/createUser",{name,email,age})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }


  return (
    <>
     <h2 style={{textAlign:'center'}}>Create Form</h2>
    <form onSubmit={Submit} className='container'>
        <div className="mb-3">
            <label >Name</label>
            <input type="text"  onChange={(e)=>setName(e.target.value)} className="form-control" />
        </div>

        <div className="mb-3">
            <label >Email</label>
            <input type="email"  onChange={(e)=>setEmail(e.target.value)} className="form-control" />
        </div>

        <div className="mb-3">
            <label >Age</label>
            <input type="text" onChange={(e)=>setAge(e.target.value)} className="form-control" />
        </div>
        
        <button className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}
export default CreateUser;