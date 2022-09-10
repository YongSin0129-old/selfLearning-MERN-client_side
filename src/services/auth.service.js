import axios from 'axios'
const API_URL = 'http://localhost:8080/api/user'

class AuthService {
  login (email, password) {
    return axios.post(API_URL + '/login', { email, password })
  }

  logout () {
    localStorage.removeItem('currentUser')
  }

  register (username, email, password, role) {
    return axios.post(API_URL + '/register', {
      username,
      email,
      password,
      role
    })
  }

  getCurrentUser () {
    return JSON.parse(localStorage.getItem('currentUser'))
  }
}

export default new AuthService()
