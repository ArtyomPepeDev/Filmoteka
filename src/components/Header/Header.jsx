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
  ButtonWatched,
  ButtonQueue,
  LibraryButtons,
} from './Header.styled'
import { useLocation, useSearchParams } from 'react-router-dom'

const Header = ({ isError }) => {
  const [value, setValue] = useState('')
  const { pathname } = useLocation()
  const [_, setSearchParams] = useSearchParams()

  const showInput = pathname === '/'

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchParams({ query: value })
  }

  return (
    <HeaderWrapper>
      <HeaderMain>
        <Logo to="/">
          <img src="/images/svg/FilmIcon.svg" />
          <LogoText>Filmoteka</LogoText>
        </Logo>
        <div>
          {showInput ? (
            <>
              <SearchBar onSubmit={handleSubmit}>
                <InputBar
                  type="search"
                  placeholder="Search Movie...."
                  onChange={(e) => setValue(e.target.value)}
                />
                <ButtonSearch>
                  <SearchIcon src="/images/svg/IconSearch.svg" />
                </ButtonSearch>
              </SearchBar>
              {isError && (
                <p style={{ color: 'red' }}>
                  Search result not successful. Enter the correct movie name and
                  try again.{' '}
                </p>
              )}
            </>
          ) : (
            <LibraryButtons>
              <ButtonWatched>Watched</ButtonWatched>
              <ButtonQueue>Queue</ButtonQueue>
            </LibraryButtons>
          )}
        </div>

        <NavMenu>
          <NavText>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/library">Library</NavigationLink>
          </NavText>
          <BtnTheme>
            <BtnChangeTheme>
              <SunIcon src="/images/svg/SunIcon.svg" />
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
