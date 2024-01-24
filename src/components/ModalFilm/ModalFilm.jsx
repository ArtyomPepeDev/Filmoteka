import React from 'react'
import PropTypes from 'prop-types'
import {
  ModalFilmWrapper,
  ModalImg,
  ModalInfo,
  ModalStyle,
} from './ModalFilm.styled'

const ModalFilm = ({ film, toggleModal }) => {
  console.log(film)
  return (
    <ModalFilmWrapper style={{overlay: {display: 'flex',alignItems: 'center', justifyContent: 'center'}}}>
      <ModalStyle isOpen={true} onRequestClose={toggleModal} >
        <ModalImg
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt={film.title}
        />
        <ModalInfo>
          <h2>{film.title}</h2>
          <p>Vote/Votes {film.vote_average}</p>
        </ModalInfo>
      </ModalStyle>
    </ModalFilmWrapper>
  )
}

ModalFilm.propTypes = {}

ModalFilm.defaultProps = {}

export default ModalFilm
