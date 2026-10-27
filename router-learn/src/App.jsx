import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div>
    <div className='flex justify-between px-7 bg-pink-900  mb-10'>
      <h1> Navbar </h1>
      <div className='flex gap-8'>
      <input className='border-2 border-black' type='text'/>
        <Link to='/'> Home pages</Link>
        <Link to='/about'> About pages</Link>
      </div>
    </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App


