import Header from './components/Header'
import Paginate from './components/Paginate'
import Container from './components/Container'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CardList from './components/CardList'
import './AppStyle.css'

const App = () => {
  const [films, setFilms] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')

  const fetchFilms = async () => {
    const api_key = '3cfc4cc3ed7c09ed117ed148c7a04c75'
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=${api_key}`
    )
    setFilms(response.data.results)
    setPageCount(response.data.total_pages)
  }

  useEffect(() => {
    fetchFilms()
  }, [page, query])

  useEffect(() => {
    if (films.length < 1) {
      const api_key = '3cfc4cc3ed7c09ed117ed148c7a04c75'
      axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
        .then((response) => {
          setFilms(response.data.results)
        })
    }
  }, [])

  return (
    <div>
      <Header setQuery={setQuery} isError={films.length < 1 && !query } />
      <Container>
        <CardList list={films} />
      </Container>
      {films.length > 0 && pageCount > 1 && (
        <Paginate pageCount={pageCount} setPage={setPage} page={page} />
      )}
      <Footer />
    </div>
  )
}

export default App
