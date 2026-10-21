import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const[allUser, setallUser] = useState([])

  async function getData(){

   let response= await axios.get('https://picsum.photos/v2/list')
   console.log(response.data)
          setallUser(response.data)
   }
  return (
    <div>
      <button onClick={getData}> Get DATA </button>
      {allUser.map(function(elem, idx){
           return <h1 key={idx}> {elem.author}</h1>    
      })}
    </div>
  )
}

export default App

