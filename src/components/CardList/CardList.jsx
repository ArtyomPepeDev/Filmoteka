import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardListWrapper } from './CardList.styled'
import CardFilm from '../CardFilm'
import PropTypes from 'prop-types'
import Modal from '../Modal/Modal'
import ModalFilm from '../ModalFilm/ModalFilm'

const CardList = ({ list }) => {
  const [genreList, setGenreList] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedFilm, setSelectedFilm] = useState()

  const toggleModal = (film) => {
    setShowModal((prevState) => !prevState)
    setSelectedFilm(film)
  }

  useEffect(() => {
    if (!genreList.length) {
      axios
        .get(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=3cfc4cc3ed7c09ed117ed148c7a04c75'
        )
        .then((res) => setGenreList(res.data.genres))
    }
  })

  return (
    <CardListWrapper>
      {list.map((item) => (
        <CardFilm
          toggleModal={toggleModal}
          key={item.id}
          item={item}
          genreList={genreList}
        />
      ))}
      {showModal && selectedFilm && (
        <Modal toggleModal={toggleModal} film={selectedFilm}>
        <ModalFilm film={selectedFilm}/>
        </Modal>
      )}
    </CardListWrapper>
  )
}

CardList.propTypes = { list: PropTypes.arrayOf(PropTypes.object) }

CardList.defaultProps = {}

export default CardList
