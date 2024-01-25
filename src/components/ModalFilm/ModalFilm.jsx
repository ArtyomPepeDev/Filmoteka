import React from 'react'
import PropTypes from 'prop-types'
import {
  ModalFilmWrapper,
  ModalImg,
  ModalInfo,
  ModalStyle,
  InfoMoviePg,
  InfoMovieStyle,
} from './ModalFilm.styled'

const ModalFilm = ({ film, genres }) => {
  console.log(film)
  return (
    <ModalFilmWrapper>
      <ModalStyle>
        <ModalImg
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt={film.title}
        />
        <ModalInfo>
          <h2>{film.title}</h2>
          <InfoMoviePg>
            <p>Vote/Votes</p>
            <p>
              {film.vote_average}/{film.vote_count}
            </p>
          </InfoMoviePg>
          <InfoMoviePg>
            <p>Popularity </p>
            <InfoMovieStyle>{film.popularity} </InfoMovieStyle>
          </InfoMoviePg>
          <InfoMoviePg>
            <p>Original Title</p>
            <p>{film.original_title}</p>
          </InfoMoviePg>
          <InfoMoviePg>
            <p>Genres</p>
            {/* <p>{genres}</p> */}
          </InfoMoviePg>
          <div>
            <h2>ABOUT</h2>
            <p>{film.overview}</p>
          </div>
        </ModalInfo>
      </ModalStyle>
    </ModalFilmWrapper>
  )
}

ModalFilm.propTypes = {}

ModalFilm.defaultProps = {}

export default ModalFilm
