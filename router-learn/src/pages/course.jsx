import React from 'react'
import { Outlet } from 'react-router-dom'

const course = () => {
  return (
    <div>
           <h1 className='text-3xl underline font-bold fixed left-[50vw] -translate-x-1/2'> course pages </h1>
       <Outlet/>
    </div>
  )
}

export default course
