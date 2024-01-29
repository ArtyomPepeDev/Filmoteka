import { NavLink, Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

export const Link = styled(NavLink)`
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: 0;
    background-color: #ff001b;
    width: 100%;
    height: 2px;
    opacity: 0;

    transition: opacity 150ms linear;
  }

  &:hover&::after {
    opacity: 1;
  }
`

export const HeaderWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');
`

export const HeaderMain = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 20px;
  justify-content: space-between;
  background: rgb(4, 0, 71);
  background: linear-gradient(
    90deg,
    rgba(4, 0, 71, 1) 0%,
    rgba(35, 35, 62, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
`

export const LogoText = styled(RouterLink)`
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  text-decoration: none;
  padding: 10px;
`

export const SearchBar = styled.form`
  display: flex;
  align-items: center;
  width: 500px;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 18px;
`

export const InputBar = styled.input`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  padding: 10px 2px;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
`

export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 18px;
`

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const NavMenu = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`

export const NavText = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: end;
`

export const BtnTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`

export const BtnChangeTheme = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px;
  border: none;
  outline: none;
  width: 42px;
  height: 22px;
  border-radius: 11px;
  background: #10181d;
  cursor: pointer;
`

export const SunIcon = styled.img`
  width: 15px;
  height: 20px;
`

export const SignInLogIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;
`

export const SignIn = styled.button`
  // .sign-in {
  // 	display: flex;
  // 	justify-content: center;
  // 	color: #fff;
  // 	text-align: right;
  // 	font-family: Roboto;
  // 	font-size: 15px;
  // 	font-style: normal;
  // 	font-weight: 500;
  // 	line-height: normal;
  // 	text-transform: uppercase;
  // 	border-radius: 10px;
  // 	width: 100px;
  // 	padding: 10px;
  // 	border: none;
  // 	outline: none;
  // 	background: #2b3030;
  // 	cursor: pointer;
  // }
`

export const LogIn = styled.button`
  display: flex;
  justify-content: center;
  color: #fff;
  text-align: right;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 10px;
  width: 100px;
  padding: 10px;
  border: none;
  outline: none;
  background: #2b3030;
  cursor: pointer;
`
