import axios from 'axios'
const API_URL = 'http://localhost:8080/api/courses'

const courseService = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')),
  getCourse: currentUser => {
    return axios.get(API_URL, {
      headers: { Authorization: courseService.currentUser?.token }
    })
  }
}

export default courseService
