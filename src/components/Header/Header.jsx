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
import { NavLink, useLocation } from 'react-router-dom'

const Header = ({ setQuery }) => {
  const [value, setValue] = useState('')
  const { pathname } = useLocation()

  const showInput = pathname === '/'

  const handleSubmit = (event) => {
    event.preventDefault()
    setQuery(value)
  }

  return (
    <HeaderWrapper>
      <HeaderMain>
        <Logo>
          <img src="/public/FilmIcon.svg" />
          <LogoText><Link to='/'>Filmoteka</Link></LogoText>
        </Logo>
        <div>
          {showInput ? (
            <SearchBar onSubmit={handleSubmit}>
              <InputBar
                type="search"
                placeholder="Search Movie...."
                onChange={(e) => setValue(e.target.value)}
              />
              <ButtonSearch>
                <SearchIcon src="/public/IconSearch.svg" />
              </ButtonSearch>
            </SearchBar>
          ) : (
            <p>text</p>
          )}
        </div>

        <NavMenu>
          <NavText>
            <Link to="/">Home</Link>
            <Link to="/library">Library</Link>
          </NavText>
          <BtnTheme>
            <BtnChangeTheme>
              <SunIcon src="/public/SunIcon.svg" />
            </BtnChangeTheme>
          </BtnTheme>
          <SignInLogIn>
            {/* <SignIn className="sign-in">Sign In</SignIn> */}
            <LogIn>Log In</LogIn>
          </SignInLogIn>
        </NavMenu>
      </HeaderMain>
    </HeaderWrapper>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
