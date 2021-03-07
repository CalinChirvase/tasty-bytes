import axios from 'axios'
const baseUrl = '/api/comments'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const createComment = async newComment => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newComment, config)
  return response.data
}

const getComments = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { createComment, setToken, getComments }