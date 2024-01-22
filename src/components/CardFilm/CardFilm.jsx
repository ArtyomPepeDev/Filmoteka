import React from "react";
import PropTypes from "prop-types";
import { CardFilmWrapper, FilmTitle, FilmDescription, ImageStyle } from "./CardFilm.styled";

const CardFilm = ({ item, genreList }) => {
  const genres = genreList.filter((genre) => item.genre_ids.includes(genre.id))

  return (
    <CardFilmWrapper>
      <ImageStyle
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt={item.title}
      />{" "}
      <FilmTitle>{item.title}</FilmTitle>
      <p>Release Year: {new Date(item.release_date).getFullYear()}</p>
    </CardFilmWrapper>
  );
};

CardFilm.propTypes = {};

CardFilm.defaultProps = {};

export default CardFilm;
