import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  BtnChangeTheme,
  BtnTheme,
  ButtonSearch,
  HeaderMain,
  HeaderWrapper,
  InputBar,
  Link,
  Logo,
  LogoText,
  NavMenu,
  NavText,
  SearchBar,
  SearchIcon,
  SignInLogIn,
  SignIn,
  LogIn,
  SunIcon,
} from './Header.styled'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Header = ({ setQuery }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setQuery(value)
  }

  return (
    <HeaderWrapper>
      <HeaderMain className="header_main">
        <Logo className="logo">
          <img src="/public/FilmIcon.svg" />
          <LogoText className="logo-text">Filmoteka</LogoText>
        </Logo>
        <div className="search-sign">
          <SearchBar className="search-bar" onSubmit={handleSubmit}>
            <InputBar
              type="search"
              className="input-bar"
              placeholder="Search Movie...."
              onChange={(e) => setValue(e.target.value)}
            />
            <ButtonSearch className="button_search">
              <SearchIcon
                className="search_icon"
                src="/public/IconSearch.svg"
              />
            </ButtonSearch>
          </SearchBar>
        </div>

        <NavMenu className="nav-menu">
          <NavText className="nav-text">
            <Link to="/">Home</Link>
            <Link to="/library">Library</Link>
          </NavText>
          <BtnTheme className="btn-theme">
            <BtnChangeTheme className="btn-change-theme">
              <SunIcon src="/public/SunIcon.svg" />
            </BtnChangeTheme>
          </BtnTheme>
          <SignInLogIn className="sign_in-log_in">
            {/* <SignIn className="sign-in">Sign In</SignIn> */}
            <LogIn className="log-in">Log In</LogIn>
          </SignInLogIn>
        </NavMenu>
      </HeaderMain>
    </HeaderWrapper>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
