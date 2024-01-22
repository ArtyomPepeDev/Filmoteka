import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HeaderWrapper } from "./Header.styled";
import axios from "axios";

const Header = ({setFilms}) => {
  const [query , setQuery] = useState()

  const handleSubmit = async () => {
    const api_key = '3cfc4cc3ed7c09ed117ed148c7a04c75'
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api_key}`)
    setFilms(response.data.results)

    }
  


  return (
    <HeaderWrapper>
      <header className="header_main">
        <div className="logo">
          <img src="/public/FilmIcon.svg" />
          <h1 className="logo-text">Filmoteka</h1>
        </div>
        <div className="search-sign">
          <div className="search-bar">
            <input
              type="search"
              className="input-bar"
              placeholder="Search Movie...."
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="button_search" onClick={handleSubmit}>
              <img className="search_icon" src="/public/IconSearch.svg" />
            </button>
          </div>
        </div>

        <div className="nav-menu">
          <div className="nav-text">
            <h2 id="home">Home</h2>
            <h2 id="library">My Library</h2>
          </div>
          <div className="btn-theme">
            <button className="btn-change-theme">
              <img src="/public/SunIcon.svg" />
            </button>
          </div>
          <div className="sign_in-log_in">
            {/* <button className="sign-in">Sign In</button> */}
            <button className="log-in">Log In</button>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
