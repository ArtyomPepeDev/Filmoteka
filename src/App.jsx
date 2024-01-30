import Header from './components/Header'
import Paginate from './components/Paginate'
import Container from './components/Container'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import CardList from './components/CardList'
import './AppStyle.css'
import { fetchByQuery, fetchPopular } from './services/fetchFilms'
import Skeleton from './components/Skeleton'
import { useSearchParams } from 'react-router-dom'

const App = () => {
  const [films, setFilms] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [isError, setIsError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')
  console.log('query: ', query)

  useEffect(() => {
    const fetchFilms = async () => {
      const response = await fetchByQuery(query, page)
      setFilms(response)
      setPageCount(response)
      if (response.length < 1) {
        setIsError(true)
        return
      }
      setIsError(false)
    }
    fetchFilms()
  }, [page, query])

  useEffect(() => {
    if (films.length < 1) {
      setLoading(true)
      fetchPopular()
        .then((data) => setFilms(data))
        .finally(() => setLoading(false))
    }
  }, [])

  return (
    <div>
      <Header isError={isError} />
      <Container>
        {isLoading ? <Skeleton /> : <CardList list={films} />}
      </Container>
      {films.length > 0 && pageCount > 1 && (
        <Paginate pageCount={pageCount} setPage={setPage} page={page} />
      )}
      <Footer />
    </div>
  )
}

export default App
