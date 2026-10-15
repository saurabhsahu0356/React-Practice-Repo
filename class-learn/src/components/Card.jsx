import React from 'react'

const Card = (props) => {
  return (
     <div className='w-[23vw] px-8 py-8  bg-white p-5 flex flex-col items-center  text-center rounded-xl text-black'>
      <img className='h-17 w-17 rounded-full object-cover object-center'  src={props.elem.userUrl}></img>
      <h1 className='text-2xl mt-2 font-semibold'> {props.elem.userName}</h1>
      <h5 className=' text-blue-500 font-semibold  text-lg my-2'>{ props.elem.userRole} </h5>
      <p className='text-sm font-medium leading-tight'>{ props.elem.userDEC}</p>
      <button onClick={(idx)=>{
        props.deleteElement(props.idx)
      }} className='px-4 py-2 rounded bg-red-400 text-white font-semibold mt-3 text-xs cursor-pointer active:scale-95'> Delete </button>
    </div>
  )
}

export default Card
