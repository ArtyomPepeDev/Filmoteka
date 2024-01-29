import React from 'react'
import PropTypes from 'prop-types'
import {
  CardFilmWrapper,
  FilmTitle,
  FilmDescription,
  ImageStyle,
  Divider,
  FilmContent,
} from './CardFilm.styled'
import Marquee from 'react-fast-marquee'
import { getGenres, getPosterPath } from '../../utils'

const CardFilm = ({ item, genreList, toggleModal }) => {
  const genres = getGenres(genreList, item.genre_ids)

  const posterPath = getPosterPath(item.poster_path)

  return (
    <CardFilmWrapper onClick={() => toggleModal(item)}>
      <ImageStyle src={posterPath} alt={item.title} />
      <FilmContent>
        <FilmTitle>
          <Marquee play={item.title.length > 25} speed={40}>
            {item.title}
          </Marquee>
        </FilmTitle>
        <FilmDescription>
          {item.genre_ids.length ? genres : 'Unknown'}
          <Divider />
          {item.release_date
            ? new Date(item.release_date).getFullYear()
            : 'Unknown'}
        </FilmDescription>
      </FilmContent>
    </CardFilmWrapper>
  )
}

CardFilm.propTypes = {}

CardFilm.defaultProps = {}

export default CardFilm
