import React from 'react'
import PropTypes from 'prop-types'
import {
  CardFilmWrapper,
  FilmTitle,
  FilmDescription,
  ImageStyle,
} from './CardFilm.styled'
import Marquee from 'react-fast-marquee'

const CardFilm = ({ item, genreList }) => {
  const genres = () => {
    const list = genreList
      .filter((genre) => item.genre_ids.includes(genre.id))
      .map((genre) => genre.name)

    const splicedList = list.slice(0, 2)


    return list.length > 2
      ? [...splicedList, 'Other'].join(', ')
      : splicedList.join(', ')
  }

  

  const checkPoster = item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : '/src/assets/NotPoster.png'

  return (
    <CardFilmWrapper>
      <ImageStyle
        src={checkPoster}
        alt={item.title}
      />
      <FilmTitle>
        <Marquee play={item.title.length > 25} speed={40}>
          {item.title}
        </Marquee>
      </FilmTitle>
      <p>Release Year: {new Date(item.release_date).getFullYear()}</p>
      {item.genre_ids.length ? <p>Genre: {genres()}</p> : null}
    </CardFilmWrapper>
  )
}

CardFilm.propTypes = {}

CardFilm.defaultProps = {}

export default CardFilm
