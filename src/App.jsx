import Header from './components/Header/Header'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import CardList from './components/CardList/CardList'
import './AppStyle.css'
import Paginate from './components/Paginate/Paginate'

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

  return (
    <div>
      <Header setQuery={setQuery} />
      <CardList list={films} />
      <Paginate pageCount={pageCount} setPage={setPage} page={page} />
    </div>
  )
}

export default App
