import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import AuthService from '../services/auth.service'

const LoginComponent = () => {
  const Navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }
  const handleChangePassword = e => {
    setPassword(e.target.value)
  }
  const handleLogin = () => {
    AuthService.login(email, password)
      .then(res => {
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        Navigate('/profile')
      })
      .catch(err => {
        setMessage(err.response.data)
      })
  }

  return (
    <div style={{ padding: '3rem' }} className='col-md-12'>
      <div>
        {message && (
          <div className='alert alert-danger' role='alert'>
            {message}
          </div>
        )}
        <div className='form-group'>
          <label htmlFor='username'>Email</label>
          <input
            onChange={handleChangeEmail}
            type='text'
            className='form-control'
            name='email'
          />
        </div>
        <br />
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={handleChangePassword}
            type='password'
            className='form-control'
            name='password'
          />
        </div>
        <br />
        <div className='form-group'>
          <button onClick={handleLogin} className='btn btn-primary btn-block'>
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent
