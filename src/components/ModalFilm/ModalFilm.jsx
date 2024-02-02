import React, { useEffect, useState } from 'react'
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
  ButtonContainer,
} from './ModalFilm.styled'
import { getGenres, getPosterPath } from '../../utils'
import { fetchDetails } from '../../services/fetchFilms'
import useLocalStorage from '../../hooks/useLocalStorage'

const ModalFilm = ({ film, genreList }) => {
  const [filmDetails, setFilmDetails] = useState('')
  const genres = getGenres(genreList, film.genre_ids)
  const posterPath = getPosterPath(film.poster_path)
  const { addFilm, removeFilm, isExists } = useLocalStorage()

  const voteAverage = film.vote_average

  const trailerLink = `https://www.youtube.com/watch?v=${filmDetails?.key}`

  const handleFilmAction = (category) => {
    if (category === 'watched') {
      if (!isExists(film.id, category)) {
        addFilm(film, category)
        return
      }

      removeFilm(film.id, category)
      return
    }

    if (!isExists(film.id, category)) {
      addFilm(film, category)
      return
    }

    removeFilm(film.id, category)
  }

  useEffect(() => {
    fetchDetails(film.id).then((res) => {
      setFilmDetails(res)
    })
  }, [])

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
              <MovieInfoContent color="#8c8c8c">
                Original Title
              </MovieInfoContent>
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
          <ButtonContainer>
            <ButtonModalDiv>
              <ModalButton onClick={() => handleFilmAction('watched')}>
                {isExists(film.id, 'watched')
                  ? 'Remove From Watched'
                  : 'ADD TO WATCHED'}
              </ModalButton>
              <ModalButton onClick={() => handleFilmAction('queue')}>
                {isExists(film.id, 'queue')
                  ? 'Remove From Queue'
                  : 'ADD TO QUEUE'}
              </ModalButton>
            </ButtonModalDiv>

            <ButtonViewTrailer href={trailerLink} target="_blank">
              <img src="/images/svg/FilmIconLibrary.svg" />
              VIEW TRAILER
            </ButtonViewTrailer>
          </ButtonContainer>
        </ModalInfo>
      </ModalStyle>
    </ModalFilmWrapper>
  )
}

ModalFilm.propTypes = {}

ModalFilm.defaultProps = {}

export default ModalFilm
