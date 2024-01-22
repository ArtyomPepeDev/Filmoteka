import styled from 'styled-components'

export const HeaderWrapper = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap');

	* {
		font-family: Roboto;
	}

	.header_main {
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
	}

	.logo {
		display: flex;
		align-items: center;
	}

	.logo-text {
		font-family: 'Roboto', sans-serif;
		font-size: 30px;
		color: white;
		text-align: center;
		padding: 10px;
	}

	.search-bar {
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
	}

	.input-bar {
		width: 100%;
		height: 100%;
		padding: 10px;
		border-radius: 5px;
		border: none;
		outline: none;
		background-color: rgba(255, 255, 255, 0.1);
	}

	.button_search {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		border: none;
		outline: none;
		background-color: transparent;
		font-size: 18px;
	}

	.search_icon {
		width: 20px;
		height: 20px;
	}

	.nav-menu {
		display: flex;
		gap: 10px;
		flex-direction: column;
	}

	.nav-text {
		display: flex;
		gap: 20px;
		align-items: center;
		justify-content: end;
	}

	#home {
		color: #fff;
		text-align: center;
		font-family: Roboto;
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		text-transform: uppercase;
	}

	#home:hover {
		transition: all 1s ease-in-out;
		border-bottom: 2px solid #ff001b;
	}

	#library {
		color: #fff;
		text-align: center;
		font-family: Roboto;
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		text-transform: uppercase;
	}

	#library:hover {
		transition: all 1s ease-in-out;
		border-bottom: 2px solid #ff001b;
	}
	
	.btn-theme {
		display: flex;
		align-items: center;
		justify-content: end;
	}

	.btn-change-theme {
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
	}
	
	.sign_in-log_in {
		display: flex;
		align-items: center;
		justify-content: end;
		gap: 2rem;

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

		.log-in {
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
		}
	}
`
