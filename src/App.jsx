import Header from './components/Header'
import Paginate from './components/Paginate'
import Container from './components/Container'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import CardList from './components/CardList'
import './AppStyle.css'
import { fetchByQuery, fetchPopular } from './services/fetchFilms'
import Skeleton from './components/Skeleton'
import { useLocation, useSearchParams } from 'react-router-dom'
import ModalAuth from './components/ModalAuth/ModalAuth'
import useLocalStorage from './hooks/useLocalStorage'
import { ThemeProvider } from './Provider/ThemeProvider'

const App = () => {
  const [films, setFilms] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [isError, setIsError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isAuthOpen, setAuthOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query')
  const { pathname } = useLocation()
  const { watchedList, queueList, addFilm, removeFilm, isExists } =
    useLocalStorage()

  const toggleAuth = () => {
    setAuthOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (query) {
      const fetchFilms = async () => {
        setLoading(true)
        const response = await fetchByQuery(query, page)
        setLoading(false)
        setFilms(response)
        setPageCount(response)
        if (response.length < 1) {
          setIsError(true)
          return
        }
        setIsError(false)
      }
      fetchFilms()
      return
    }
    const fetchPopularFilms = async () => {
      setLoading(true)
      const response = await fetchPopular()
      setLoading(false)
      setFilms(response)
    }
    fetchPopularFilms()
  }, [page, query])

  return (
    <ThemeProvider>
      <Header setAuthOpen={setAuthOpen} isError={isError} />
      <ModalAuth toggleModal={toggleAuth} isAuthOpen={isAuthOpen} />
      <Container>
        {isLoading ? (
          <Skeleton />
        ) : (
          <CardList
            list={
              pathname === '/watched'
                ? watchedList
                : pathname === '/queue'
                ? queueList
                : films
            }
            addFilm={addFilm}
            removeFilm={removeFilm}
            isExists={isExists}
          />
        )}
      </Container>
      {films.length > 0 && pageCount > 1 && (
        <Paginate pageCount={pageCount} setPage={setPage} page={page} />
      )}
      <Footer />
    </ThemeProvider>
  )
}

export default App
