import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { CardFilmWrapper } from './CardFilm.styled'

const CardFilm = () => {
	const [popularMovies, setPopularMovies] = useState([])

	useEffect(() => {
		const fetchPopularMovies = async () => {
			try {
				const apiKey = '3cfc4cc3ed7c09ed117ed148c7a04c75'
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
				)

				setPopularMovies(response.data.results)
			} catch (error) {
				console.error('Error fetching popular movies:', error)
			}
		}

		fetchPopularMovies()
	}, []) // Пустой массив зависимостей означает, что эффект выполнится только при монтировании компонента

	return (
		<CardFilmWrapper>
			<div>
				<h2>Most Popular Movies</h2>
				<ul>
					{popularMovies.map((movie) => (
						<li key={movie.id}>
							<h3>{movie.title}</h3>
							<p>Vote Average: {movie.vote_average}</p>
							<img
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								alt={movie.title}
							/>
						</li>
					))}
				</ul>
			</div>
		</CardFilmWrapper>
	)
}

CardFilm.propTypes = {}

CardFilm.defaultProps = {}

export default CardFilm
