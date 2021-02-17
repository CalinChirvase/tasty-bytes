import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

const createUser = async (username, name, password) => {
  const user = {
    username: username,
    name: name,
    password: password
  }
  const response = await axios.post(baseUrl, user)
  return response.data
}

export default { createUser }