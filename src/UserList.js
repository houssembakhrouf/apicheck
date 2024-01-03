import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'

function UserList() {
    const [listofUSer,setlist]=useState()
    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{setlist(res.data);
        console.log(res)
        })
    },[])

  return (
    <div>
    {listofUSer? listofUSer.map(users=>
    <div>
    <User users={users}/></div>) : null}
    </div>
  )
}

export default UserList