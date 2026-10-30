import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const section2 = () => {

  const secData= useContext(ThemeDataContext)
  return (
    <div>
     <h2> Section2 </h2>
     <p>{secData}</p>
    </div>
  )
}

export default section2
