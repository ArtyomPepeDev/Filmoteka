import React from 'react'
import PropTypes from 'prop-types'
import {
  ModalFilmWrapper,
  ModalImg,
  ModalInfo,
  MovieInfoList,
  ModalStyle,
  MovieDescription,
  ModalButton,
  ButtonModalDiv,
  VoteStyle,
  ModalImgWrapper,
  ModalMovieName,
  MovieInfoContent,
  MovieInfoInner,
  AboutStyle,
  ModalDescription,
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

  const checkPoster = film.poster_path
    ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
    : '/src/assets/NotPoster.png'

  const voteAverage = film.vote_average

  console.log(film)
  return (
    <ModalFilmWrapper>
      <ModalStyle>
        <ModalImgWrapper>
          <ModalImg src={checkPoster} alt={film.title} />
        </ModalImgWrapper>
        <ModalInfo>
          <ModalMovieName>{film.title}</ModalMovieName>
          <MovieInfoList>
            <MovieInfoInner>
              <MovieInfoContent color="#8c8c8c">Vote / Votes</MovieInfoContent>
              <MovieInfoContent>Popularity</MovieInfoContent>
              <MovieInfoContent>Original Title</MovieInfoContent>
              <MovieInfoContent>Genres</MovieInfoContent>
            </MovieInfoInner>
            <MovieInfoInner>
              <MovieInfoContent>
                <VoteStyle>{voteAverage.toFixed(1)}</VoteStyle>/
                <VoteStyle isTotalVotes>{film.vote_count}</VoteStyle>
              </MovieInfoContent>
              <MovieInfoContent>{film.popularity.toFixed(0)}</MovieInfoContent>
              <MovieInfoContent>{film.original_title.toUpperCase()}</MovieInfoContent>
              <MovieInfoContent>{genres()}</MovieInfoContent>
            </MovieInfoInner>
          </MovieInfoList>
          <ModalDescription>
            <AboutStyle>ABOUT</AboutStyle>
            <MovieDescription>{film.overview}</MovieDescription>
          </ModalDescription>
          <ButtonModalDiv>
            <ModalButton>ADD TO WATCHED</ModalButton>
            <ModalButton>ADD TO QUEUE</ModalButton>
          </ButtonModalDiv>

          <ModalButton>
            <img src="/public/FilmIconLibrary.svg" />
            VIEW TRAILER
          </ModalButton>
        </ModalInfo>
      </ModalStyle>
    </ModalFilmWrapper>
  )
}

ModalFilm.propTypes = {}

ModalFilm.defaultProps = {}

export default ModalFilm
