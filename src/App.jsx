import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Add from './component/Add'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <h1>Welcome to Products App</h1>
    <Navbar/>
    <br>
      </br>
      <Routes>

      <Route path='/'element={<Home/>}></Route>
    
    <Route path='/add' element={<Add item={{
      title:'hair dryer',
      description:'appliance',
      price:'3000',
      category:'ELECTRONIC DEVICE'
      }}/>}></Route>

      </Routes>
      </>
    // <Home/>
  
    
  
  )
}

export default App