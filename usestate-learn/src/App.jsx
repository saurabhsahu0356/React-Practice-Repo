import React, { useActionState, useState } from 'react'

const App = () => {

const [num, setnum] = useState(0)

  function btnclicked(){
  
    setnum(num +1)
  }

  
  function declicked(){
      setnum(num -1)
  }
  
  return (
    <div>
      <h1>{num}</h1>
      <div className='container'>
       <button onClick={btnclicked}> Increse</button>
       <button onClick={declicked}> Decrese </button>
       <button onClick={()=>{
           setnum(num +5 )
       }}>jump by 5 </button>
      </div>
    </div>
  )
}

export default App

