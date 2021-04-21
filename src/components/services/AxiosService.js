import axios from 'axios'
import { fetchStudents, setLoading } from '../actions'
import { getLocalStorage } from './LocalStorage'

//eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const logInRequest = (apiEndPoint, userName, password) => {
    const data = {
      userName: userName,
      password: password,
    }
    return axios.post(`http://localhost:8080${apiEndPoint}`, data)
  }

  const fetchStudent = (apiEndPoint, rollNo) => {
    console.log(`http://localhost:8080${apiEndPoint}${rollNo}`)

    return axios.get(
      `http://localhost:8080/rest/webapi${apiEndPoint}${rollNo}`,
      {
        headers: {
          Authorization: `Bearer ${getLocalStorage('authToken')}`,
        },
      }
    )
  }

  //This is a redux-thunk middleware function, used to perform async redux actions
  const getStudentData = () => {
    return function (dispatch) {
      dispatch(setLoading)
      axios
        .get('http://localhost:8080/rest/webapi/students', {
          headers: {
            Authorization: `Bearer ${getLocalStorage('authToken')}`,
          },
        })
        .then((res) => {
          const users = res.data
          dispatch(fetchStudents(users))
        })
        .catch((err) => console.log(err.message))
    }
  }

  return {
    logInRequest: logInRequest,
    getStudentData: getStudentData,
    fetchStudent: fetchStudent,
  }
}
