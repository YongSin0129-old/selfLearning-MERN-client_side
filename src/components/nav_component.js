import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../services/auth.service'

const NavComponent = props => {
  const { currentUser } = props
  const Navigate = useNavigate()

  const handleLogout = () => {
    const confirmLogoug = window.confirm('確定要登出嗎？')
    if (!confirmLogoug) return
    AuthService.logout()
    window.alert('logout successful , you are direct to homepage now')
    Navigate('/')
    window.location.reload()
  }

  return (
    <div>
      <nav>
        <nav className='navbar navbar-expand navbar-light bg-light'>
          <div className='container-fluid'>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className='nav-link active' to='/'>
                    Home
                  </Link>
                </li>
                {!currentUser && (
                  <li className='nav-item'>
                    <Link className='nav-link' to='/register'>
                      Register
                    </Link>
                  </li>
                )}
                {!currentUser && (
                  <li className='nav-item'>
                    <Link className='nav-link' to='/login'>
                      Login
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className='nav-item'>
                    <Link className='nav-link' to='/profile'>
                      Profile
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className='nav-item'>
                    <Link className='nav-link' to='/course'>
                      Course
                    </Link>
                  </li>
                )}
                {currentUser && currentUser.user.role === 'instructor' && (
                  <li className='nav-item'>
                    <Link className='nav-link' to='/postCourse'>
                      postCourse
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li onClick={handleLogout} className='nav-item'>
                    <Link className='nav-link' to='#'>
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  )
}

export default NavComponent
