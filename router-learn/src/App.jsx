import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Course from './pages/course'
import Koder from './pages/Koder'


const App = () => {
  return (
    <div>
    <div className='flex justify-between px-7 bg-pink-900  mb-10'>
      <h1> Navbar </h1>
      <div className='flex gap-8'>
       <NavLink to='/' style={({isActive})=>({
        color:isActive?'red': 'white'
       })}> home pages

       </NavLink>
        <Link to='/about'> About pages</Link>
         <Link to='/course'> course pages</Link>
      </div>
    </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path ='/course' element={<Course/>} />
        <Route path ='/course/koder' element={<Koder/>} />

      </Routes>
    </div>
  )
}

export default App


