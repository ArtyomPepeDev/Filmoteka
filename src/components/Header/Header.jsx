import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SunIcon from '/public/images/svg/SunIcon.svg?react'
import MoonIcon from '/public/images/svg/MoonIcon.svg?react'
import {
  ThemeSwitcher,
  ThemeSwitcherThumb,
  ThemeSwitcherInput,
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
  // SunIcon,
  ButtonLibrary,
  LibraryButtons,
} from './Header.styled'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const Header = ({ isError, setAuthOpen, checkPage }) => {
  const [value, setValue] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const { pathname } = useLocation()
  const [_, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const showInput = pathname === '/'

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchParams({ query: value })
  }

  const handleThemeSwitch = (event) => {
    setIsChecked(event.target.checked)
  }

  const handleSwitchFilmList = (page) => {
    navigate(page)
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
              <ButtonLibrary
                isActive={pathname === '/watched'}
                onClick={() => handleSwitchFilmList('/watched')}
              >
                Watched
              </ButtonLibrary>
              <ButtonLibrary
                isActive={pathname === '/queue'}
                onClick={() => handleSwitchFilmList('/queue')}
              >
                Queue
              </ButtonLibrary>
            </LibraryButtons>
          )}
        </div>

        <NavMenu>
          <NavText>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/watched">Library</NavigationLink>
          </NavText>
          <BtnTheme>
            <ThemeSwitcher>
              <ThemeSwitcherInput
                type="checkbox"
                onChange={handleThemeSwitch}
              />
              <ThemeSwitcherThumb isChecked={isChecked}>
                {isChecked ? <MoonIcon /> : <SunIcon />}
              </ThemeSwitcherThumb>
            </ThemeSwitcher>
          </BtnTheme>
          <SignInLogIn>
            {/* <SignIn className="sign-in">Sign In</SignIn> */}
            <LogIn onClick={() => setAuthOpen(true)}>Log In</LogIn>
          </SignInLogIn>
        </NavMenu>
      </HeaderMain>
    </HeaderWrapper>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
