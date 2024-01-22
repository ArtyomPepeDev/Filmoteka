import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardListWrapper } from "./CardList.styled";
import CardFilm from "../CardFilm";
import PropTypes from "prop-types";

const CardList = ({ list }) => {
  return (
    <CardListWrapper>
      {list.map((item) => (
        <CardFilm key={item.id} item={item} />
      ))}
    </CardListWrapper>
  );
};

CardList.propTypes = { list: PropTypes.arrayOf(PropTypes.object) };


CardList.defaultProps = {};

export default CardList;
