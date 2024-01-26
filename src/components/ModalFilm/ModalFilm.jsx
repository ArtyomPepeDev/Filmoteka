import React from 'react'
import PropTypes from 'prop-types'
import {
  ModalFilmWrapper,
  ModalImg,
  ModalInfo,
  MovieInfoList,
  ModalStyle,
  InfoMoviePg,
  MovieDescription,
  InfoMovieStyle,
  ModalButton,
  ButtonModalDiv,
  VoteStyle,
  VoteCount,
} from './ModalFilm.styled'

const ModalFilm = ({ film, genreList }) => {
  const genres = () => {
    const list = genreList
      .filter((genre) => film.genre_ids.includes(genre.id))
      .map((genre) => genre.name)

    const splicedList = list.slice(0, 2)

    return list.length > 2
      ? [...splicedList, ''].join(', ')
      : splicedList.join(', ')
  }
  console.log(film)
  return (
    <ModalFilmWrapper>
      <ModalStyle>
        <ModalImg
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt={film.title}
        />
        <ModalInfo>
          <MovieInfoList>
            <h1>{film.title}</h1>
            <InfoMoviePg>
              <p>Vote/Votes</p>
              <VoteCount>
                <VoteStyle>{film.vote_average}</VoteStyle>/{film.vote_count}
              </VoteCount>
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
              <p>{genres()}</p>
            </InfoMoviePg>
          </MovieInfoList>
          <div>
            <h2>ABOUT</h2>
            <MovieDescription>{film.overview}</MovieDescription>
          </div>
          <ButtonModalDiv>
            <ModalButton>ADD TO WATCHED</ModalButton>
            <ModalButton>ADD TO QUEUE</ModalButton>
          </ButtonModalDiv>

          <button>
            <img src="/public/FilmIconLibrary.svg" />
            VIEW TRAILER
          </button>
        </ModalInfo>
      </ModalStyle>
    </ModalFilmWrapper>
  )
}

ModalFilm.propTypes = {}

ModalFilm.defaultProps = {}

export default ModalFilm
