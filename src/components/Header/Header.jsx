import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  BtnChangeTheme,
  BtnTheme,
  ButtonSearch,
  HeaderMain,
  HeaderWrapper,
  InputBar,
  NavigationLink,
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
import { useLocation } from 'react-router-dom'

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
          <LogoText to="/">Filmoteka</LogoText>
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
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/library">Library</NavigationLink>
          </NavText>
          <BtnTheme>
            <BtnChangeTheme>
              <SunIcon src="public/SunIcon.svg" />
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
