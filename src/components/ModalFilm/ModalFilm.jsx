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
  ButtonViewTrailer,
} from './ModalFilm.styled'
import { getGenres, getPosterPath } from '../../utils'

const ModalFilm = ({ film, genreList }) => {
  const genres = getGenres(genreList, film.genre_ids)
  const posterPath = getPosterPath(film.poster_path)

  const voteAverage = film.vote_average

  console.log(film)
  return (
    <ModalFilmWrapper>
      <ModalStyle>
        <ModalImgWrapper>
          <ModalImg src={posterPath} alt={film.title} />
        </ModalImgWrapper>
        <ModalInfo>
          <ModalMovieName>{film.title}</ModalMovieName>
          <MovieInfoList>
            <MovieInfoInner>
              <MovieInfoContent color="#8c8c8c">Vote / Votes</MovieInfoContent>
              <MovieInfoContent color="#8c8c8c">Popularity</MovieInfoContent>
              <MovieInfoContent color="#8c8c8c">Original Title</MovieInfoContent>
              <MovieInfoContent color="#8c8c8c">Genres</MovieInfoContent>
            </MovieInfoInner>
            <MovieInfoInner>
              <MovieInfoContent>
                <VoteStyle>{voteAverage.toFixed(1)}</VoteStyle>/
                <VoteStyle isTotalVotes>{film.vote_count}</VoteStyle>
              </MovieInfoContent>
              <MovieInfoContent>{film.popularity.toFixed(0)}</MovieInfoContent>
              <MovieInfoContent>
                {film.original_title.toUpperCase()}
              </MovieInfoContent>
              <MovieInfoContent>{genres}</MovieInfoContent>
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

          <ButtonViewTrailer>
            <img src="/public/FilmIconLibrary.svg" />
            VIEW TRAILER
          </ButtonViewTrailer>
        </ModalInfo>
      </ModalStyle>
    </ModalFilmWrapper>
  )
}

ModalFilm.propTypes = {}

ModalFilm.defaultProps = {}

export default ModalFilm
