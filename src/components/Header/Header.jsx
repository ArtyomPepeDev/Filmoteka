import React from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from './Header.styled'

const Header = () => (
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
					/>
					<button className="button_search">
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
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
