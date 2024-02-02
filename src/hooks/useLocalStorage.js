import { useEffect, useState } from 'react'

const useLocalStorage = ({ forceUpdate }) => {
  console.log('forceUpdate: ', forceUpdate)
  const [watchedList, setWatchedList] = useState(
    JSON.parse(localStorage.getItem('watched')) || []
  )
  const [queueList, setQueueList] = useState(
    JSON.parse(localStorage.getItem('queue')) || []
  )

  const addFilm = (film, category) => {
    if (category === 'watched') {
      setWatchedList((prevState) => [...prevState, film])
      return
    }

    setQueueList((prevState) => [...prevState, film])
  }

  const removeFilm = (id, category) => {
    if (category === 'watched') {
      setWatchedList((prevState) => prevState.filter((film) => film.id !== id))
      return
    }

    setQueueList((prevState) => prevState.filter((film) => film.id !== id))
  }

  const isExists = (id, category) => {
    if (category === 'watched') {
      return watchedList.some((film) => film.id === id)
    }

    return queueList.some((film) => film.id === id)
  }

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watchedList))
  }, [watchedList])

  useEffect(() => {
    localStorage.setItem('queue', JSON.stringify(queueList))
  }, [queueList])

  return { watchedList, queueList, addFilm, removeFilm, isExists }
}

export default useLocalStorage
