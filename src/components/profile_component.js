import React from 'react'

const ProfileComponent = props => {
  const { currentUser } = props

  return (
    <div style={{ padding: '3rem' }}>
      {!currentUser && <div>You must login before accessing this page.</div>}
      {currentUser && (
        <div>
          <h1>In profile page</h1>
          <header className='jumbotron'>
            <h3>
              <strong>Name : {currentUser.user.username}</strong>
            </h3>
          </header>
          <p>
            <strong>{currentUser.token}</strong>
          </p>
          <p>
            <strong>ID : {currentUser.user._id}</strong>
          </p>
          <p>
            <strong>Email : {currentUser.user.email}</strong>
          </p>
        </div>
      )}
    </div>
  )
}

export default ProfileComponent
