import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import courseService from '../services/course.service'

const CourseComponent = props => {
  const [courseData, setCourseData] = useState(null)
  const { currentUser } = props
  const Navigate = useNavigate()
  const handleTakeToLogin = () => {
    Navigate('/login')
  }

  useEffect(() => {
    courseService
      .getCourse()
      .then(res => {
        setCourseData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleEnroll = e => {
    console.log(e.target.id)
    console.log(e.target.getAttribute('course_id'))
    console.log(currentUser.user._id)
    const studentId = currentUser.user._id
    const courseId = e.target.getAttribute('course_id')
    courseService
      .enrollCourse(studentId, courseId)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div style={{ padding: '3rem' }}>
      {!currentUser && (
        <div>
          <p>You must login first before seeing posts.</p>
          <button
            className='btn btn-primary btn-lg'
            onClick={handleTakeToLogin}
          >
            Take me to login page.
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role === 'instructor' && (
        <div>
          <h1>只有學生可以進入此頁</h1>
        </div>
      )}
      {currentUser && currentUser.user.role === 'student' && (
        <div>
          <h1>Welcome to Student's CourseEnroll Page.</h1>
        </div>
      )}
      {currentUser && courseData && courseData.length !== 0 && (
        <div>
          <p>Data we got back from API.</p>
          {courseData.map((course, i) => (
            <div key={i} className='card' style={{ width: '18rem' }}>
              <div className='card-body'>
                <h5 className='card-title'>{course.title}</h5>
                <p className='card-text'>{course.description}</p>
                <p>Price: {course.price}</p>
                <p>Student: {course.student?.length}</p>
                <button
                  onClick={handleEnroll}
                  className='card-text btn btn-primary'
                  course_id={course._id}
                  id={course._id}
                >
                  Enroll Course
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CourseComponent
