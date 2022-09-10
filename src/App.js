import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavComponent from './components/nav_component'
import HomeComponent from './components/home_component'
import RegisterComponent from './components/register_component'

const App = () => {
  return (
    <div>
      <NavComponent />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
      </Routes>
    </div>
  )
}

export default App
