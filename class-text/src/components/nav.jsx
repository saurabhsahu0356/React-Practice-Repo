import React from 'react'

const nav = (props) => {
  console.log(props);
  return (
    <div style={{backgroundColor:props.color}} className=' mb-2 flex items-center justify-between text-white px-7 py-3 '>
       <h2>{props.title} </h2>
       <div className='flex gap-10' >
        {props.links.map(function(elem){
          return <h4>{elem}</h4>
        })}
       </div>
    </div>
  )
}

export default nav

