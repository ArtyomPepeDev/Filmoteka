import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardListWrapper } from "./CardList.styled";
import CardFilm from "../CardFilm";
import PropTypes from "prop-types";

const CardList = ({ list }) => {
  console.log(list);
  const [genreList, setGenreList] = useState([])

  useEffect(() => {
    if (!genreList.length) {
      axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=3cfc4cc3ed7c09ed117ed148c7a04c75').then((res) => setGenreList(res.data.genres)) 
    }
  })
  

  return (
    <CardListWrapper>
      {list.map((item) => (
        <CardFilm key={item.id} item={item} genreList={genreList} />
      ))}
    </CardListWrapper>
  );
};

CardList.propTypes = { list: PropTypes.arrayOf(PropTypes.object) };


CardList.defaultProps = {};

export default CardList;
