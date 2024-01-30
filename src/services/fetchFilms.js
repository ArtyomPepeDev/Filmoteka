import axios from 'axios'

const api_key = '3cfc4cc3ed7c09ed117ed148c7a04c75'
const baseUrl = 'https://api.themoviedb.org/3/'

export const fetchPopular = async () => {
  const { data } = await axios.get(
    `${baseUrl}/movie/popular?api_key=${api_key}`
  )

  return data.results
}

export const fetchByQuery = async (query) => {
  const { data } = await axios.get(
    `${baseUrl}/search/movie?api_key=${api_key}&query=${query}`
  )

  return data.results
}
