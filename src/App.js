import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavComponent from './components/nav_component'
import HomeComponent from './components/home_component'

const App = () => {
  return (
    <div>
      <NavComponent />
      <Routes>
        <Route index element={<HomeComponent />} />
      </Routes>
    </div>
  )
}

export default App
