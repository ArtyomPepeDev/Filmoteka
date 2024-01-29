const getPosterPath = (posterPath) => {
  return posterPath
    ? `https://image.tmdb.org/t/p/w500/${posterPath}`
    : '/src/assets/NotPoster.png'
}

export default getPosterPath
