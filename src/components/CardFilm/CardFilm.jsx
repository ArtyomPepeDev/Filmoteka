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

const CardFilm = ({ item, genreList, toggleModal }) => {
  const genres = () => {
    const list = genreList
      .filter((genre) => item.genre_ids.includes(genre.id))
      .map((genre) => genre.name)

    const splicedList = list.slice(0, 2)

    return list.length > 2
      ? [...splicedList, ''].join(', ')
      : splicedList.join(', ')
  }

  const checkPoster = item.poster_path
    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
    : '/src/assets/NotPoster.png'

  return (
    <CardFilmWrapper onClick={() => toggleModal(item)}>
      <ImageStyle src={checkPoster} alt={item.title} />
      <FilmContent>
        <FilmTitle>
          <Marquee play={item.title.length > 25} speed={40}>
            {item.title}
          </Marquee>
        </FilmTitle>
        <FilmDescription>
          {item.genre_ids.length ? genres() : 'Unknown'}
          <Divider />
          {item.release_date ? new Date(item.release_date).getFullYear(): "Unknown"}
        </FilmDescription>
      </FilmContent>
    </CardFilmWrapper>
  )
}

CardFilm.propTypes = {}

CardFilm.defaultProps = {}

export default CardFilm
