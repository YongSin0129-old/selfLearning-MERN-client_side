import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import courseService from '../services/course.service'

const CourseComponent = props => {
  const { currentUser } = props
  const [courseData, setCourseDate] = useState(null)
  const Navigate = useNavigate()
  const style = { padding: '3rem' }

  useEffect(() => {
    courseService
      .getCourse()
      .then(res => {
        setCourseDate(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {!currentUser && (
        <div style={style}>
          <h1>you must login</h1>
          <button
            className='btn btn-primary'
            onClick={() => {
              Navigate('/login')
            }}
          >
            login
          </button>
        </div>
      )}

      {currentUser && currentUser.user.role === 'student' && (
        <h1>welcome {currentUser.user.role}</h1>
      )}

      {currentUser && currentUser.user.role === 'instructor' && (
        <div>
          <h1>welcome {currentUser.user.role}</h1>
          {courseData?.map((data, i) => {
            return <p key={i}>{data.title}</p>
          })}
        </div>
      )}
    </div>
  )
}

export default CourseComponent
