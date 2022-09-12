import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseComponent = props => {
  const { currentUser } = props
  const Navigate = useNavigate()
  const style = { padding: '3rem' }

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
        <h1>welcome {currentUser.user.role}</h1>
      )}
    </div>
  )
}

export default CourseComponent
