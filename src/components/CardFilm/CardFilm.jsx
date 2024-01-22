import React from "react";
import PropTypes from "prop-types";
import { CardFilmWrapper, FilmTitle, FilmDescription } from "./CardFilm.styled";

const CardFilm = ({ item }) => {
  return (
    <CardFilmWrapper>
      <div>
        <h2>Most Popular Movies</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
        />{" "}
        <FilmTitle>{item.title}</FilmTitle>
        <p>Release Year: {new Date(item.release_date).getFullYear()}</p>
        <p>Genres: {item.genres.map((genre) => genre.name).join(", ")}</p>
        <FilmDescription>{item.overview}</FilmDescription>
      </div>
    </CardFilmWrapper>
  );
};

CardFilm.propTypes = {};

CardFilm.defaultProps = {};

export default CardFilm;
