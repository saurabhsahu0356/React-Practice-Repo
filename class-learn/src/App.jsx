import React, { useState } from 'react'
import Card from './components/card';


const App = () => {
  const[userName, setuserName]= useState('');
  const[userUrl, setuserUrl]=   useState('');
  const[userRole, setuserRole]= useState('');
  const[userDEC, setuserDec]=   useState('');


  const[allUser, setallUser]=   useState([]);

  function submitForm(e){
    e.preventDefault()

    let oldUser= [...allUser]
    oldUser.push({userName, userDEC, userUrl,userRole})

    console.log(oldUser)
    setallUser(oldUser)

      setuserName('')
      setuserDec ('')
      setuserRole ('')
      setuserUrl ('')
  }
  let deleteElement = (idx)=>{
      let copyUser= [...allUser]
      copyUser.splice(idx,1)
      setallUser(copyUser)

  }
  return (
    <div className='h-screen bg-black text-white'> 
      <form onSubmit={(e)=>{
        submitForm(e)
      }} className='flex flex-wrap px-2 py-2  '>

        <input 
        value = {userName}
        onChange={(e)=>{
           setuserName(e.target.value)
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-3 lg: w-[48%]' 
        type="text" 
        placeholder="Enter your text" />

         <input 
          value = {userUrl}
          onChange={(e)=>{
           setuserUrl(e.target.value)
        }}
         className='border-2 text-xl font-semibold px-5 py-2 rounded m-3 lg:w-[48%]'
          type="text" 
          placeholder="img Url" />

          <input 
             value = {userRole}
            onChange={(e)=>{
            setuserRole(e.target.value)
               }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-3 lg:w-[48%]'
           type="text"
            placeholder="Enter role" />

           <input 
              value = {userDEC}
             onChange={(e)=>{
             setuserDec(e.target.value)
                 }}
           className='border-2 text-xl font-semibold px-5 py-2 rounded m-3 lg:w-[48%]' 
           type="text"
            placeholder="Enter Decription" />

           <button 
           className='px-5 py-2 text-xl font-semibold active:scale-95 cursor-pointer bg-emerald-700 rounded m-3 w-[98%]' >Create User </button>
        
      </form>

      <div className='flex  gap-4 flex-wrap px-4 py-10 '>

     {allUser.map(function(elem, idx){
       return <Card idx={idx} elem={elem} deleteElement={deleteElement}/>
     })}
     
      </div>   

    </div>
  )
}

export default App

