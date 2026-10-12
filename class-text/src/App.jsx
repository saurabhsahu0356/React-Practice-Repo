import React from 'react'
import Nav from './components/nav'
const App = () => {
  return (
    <div>
   <Nav title='Page' color ='red'links={['Home','About','Acoount','contact']} />
    <Nav title='cahiwala' color='blue' links={['Home','service','Corses','Images']} />
     <Nav title='Modi ji' color= 'green' links={['Home','Product','Acoount','Seller']} />
    </div>
  )
}

export default App

