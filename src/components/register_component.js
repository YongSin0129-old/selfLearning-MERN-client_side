import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/auth.service'

const RegisterComponent = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')

  const handleUsername = e => {
    setUsername(e.target.value)
  }
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleRole = e => {
    setRole(e.target.value)
  }
  const handleRegister = () => {
    AuthService.register(username, email, password, role)
      .then(() => {
        window.alert('an user has been registered , redirect to login page')
        navigate('/login')
      })
      .catch(err => {
        setMessage(err.response.data)
      })
  }

  return (
    <div style={{ padding: '3rem' }} className='col-md-12'>
      <div>
        {message && (
          <div
            className='alert alert-warning alert-dismissible fade show'
            role='alert'
          >
            {message}
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='alert'
              aria-label='Close'
            />
          </div>
        )}
        <div>
          <label htmlFor='username'>Username</label>
          <input
            onChange={handleUsername}
            type='text'
            className='form-control'
            name='username'
          />
        </div>
        <br />
        <div className='form-group'>
          <label htmlFor='email'>email</label>
          <input
            onChange={handleEmail}
            type='text'
            className='form-control'
            name='email'
          />
        </div>
        <br />
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={handlePassword}
            type='password'
            className='form-control'
            name='password'
          />
        </div>
        <br />
        <div className='form-group'>
          <label htmlFor='role'>role</label>
          <input
            onChange={handleRole}
            type='text'
            className='form-control'
            name='role'
          />
        </div>
        <br />
        <button onClick={handleRegister} className='btn btn-primary'>
          <span>Register</span>
        </button>
      </div>
    </div>
  )
}

export default RegisterComponent
