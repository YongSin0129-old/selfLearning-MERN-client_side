import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavComponent from './components/nav_component'
import HomeComponent from './components/home_component'
import RegisterComponent from './components/register_component'
import LoginComponent from './components/login_component'
import ProfileComponent from './components/profile_component'
import CoursePageStudent from './components/coursePage_student'
import CoursePageStudentEnroll from './components/coursePage_studentEnroll'
import CourseComponent from './components/course_component'
import PostCourseComponent from './components/postCourse_component'
import AuthService from './services/auth.service'

const App = () => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser)

  useEffect(() => {
    setCurrentUser(AuthService.getCurrentUser)
  }, [])

  return (
    <div>
      <NavComponent currentUser={currentUser} />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
        <Route
          path='/login'
          element={<LoginComponent setCurrentUser={setCurrentUser} />}
        />
        <Route
          path='/profile'
          element={<ProfileComponent currentUser={currentUser} />}
        />
        <Route
          path='/coursePage_student'
          element={<CoursePageStudent currentUser={currentUser} />}
        />
        <Route
          path='/coursePage_studentEnroll'
          element={<CoursePageStudentEnroll currentUser={currentUser} />}
        />
        <Route
          path='/course'
          element={<CourseComponent currentUser={currentUser} />}
        />
        <Route
          path='/postCourse'
          element={
            <PostCourseComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
