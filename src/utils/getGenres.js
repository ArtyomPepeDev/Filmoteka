const getGenres = (genreList, genreIds) => {
    const list = genreList
      .filter((genre) => genreIds.includes(genre.id))
      .map((genre) => genre.name)

    const splicedList = list.slice(0, 2)

    return list.length > 2
      ? [...splicedList, ''].join(', ')
      : splicedList.join(', ')
}

export default getGenres;