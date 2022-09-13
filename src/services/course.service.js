import axios from 'axios'
const API_URL = 'http://localhost:8080/api/courses'

const getToken = () => {
  if (window.localStorage.getItem('currentUser')) {
    return JSON.parse(window.localStorage.getItem('currentUser')).token
  } else {
    return ''
  }
}

const courseService = {
  getCourse: () => {
    return axios.get(API_URL, {
      headers: { Authorization: getToken() }
    })
  },

  post (title, description, price) {
    return axios.post(
      API_URL,
      { title, description, price },
      {
        headers: {
          Authorization: getToken()
        }
      }
    )
  },

  getCourseByStudentId: StudentId => {
    return axios.get(API_URL + '/coursesByStudentId/' + StudentId, {
      headers: { Authorization: getToken() }
    })
  },

  enrollCourse: (studentId, courseId) => {
    console.log('trigger enroll')
    return axios.post(
      API_URL + '/coursesByStudentId',
      { studentId, courseId },
      {
        headers: { Authorization: getToken() }
      }
    )
  }
}

export default courseService
