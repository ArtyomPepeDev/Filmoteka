import Header from './components/Header'
import Paginate from './components/Paginate'
import Container from './components/Container'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CardList from './components/CardList'
import './AppStyle.css'
import { fetchPopular } from './services/fetchFilms'

const App = () => {
  const [films, setFilms] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [isError, setIsError] = useState(false)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')

  const fetchFilms = async () => {
    const api_key = '3cfc4cc3ed7c09ed117ed148c7a04c75'
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=${api_key}`
    )
    setFilms(response.data.results)
    setPageCount(response.data.total_pages)
    if (response.data.results.length < 1) {
      setIsError(true)
    } else {
      setIsError(false)
    }
  }

  useEffect(() => {
    fetchFilms()
  }, [page, query])

  useEffect(() => {
    if (films.length < 1) {
      fetchPopular().then((data) => setFilms(data))
    }
  }, [])

  return (
    <div>
      <Header setQuery={setQuery} isError={isError} />
      <Container>
        {isLoading ? <Skeleton/> : <CardList list={films} />}
      </Container>
      {films.length > 0 && pageCount > 1 && (
        <Paginate pageCount={pageCount} setPage={setPage} page={page} />
      )}
      <Footer />
    </div>
  )
}

export default App
