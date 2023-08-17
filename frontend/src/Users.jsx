import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Users() {
    const [users,setUser]=useState([])
    
//fecth data
    useEffect(()=>{
      axios.get("http://localhost:8080")
      .then(result => setUser(result.data))
      .catch(err => console.log(err))
    },[])

    //Delete
    const Delete = (id)=> {
      axios.delete("http://localhost:8080/deleteUser/"+id)
      .then(res => {console.log(res)
        window.location.reload()
        alert("Do you want delete this data !")
      })
      .catch(errr => console.log(errr))
    }
  return (
    <>
    <div className='container'>
        <h2 style={{textAlign:'center'}}>Users List Page</h2>

    <Link to='/create' className='btn btn-success'>Add +</Link>


        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {
    users.map((user)=>{
       return <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>
            < Link to={`/update/${user._id}`} className='btn btn-primary'>Update</Link>
               <button className='btn btn-danger' 
               onClick={(e) => Delete(user._id)}>Delete</button></td>
        </tr>
    })
   }
    
  </tbody>
</table>

    </div>
   
    </>
  )
}
