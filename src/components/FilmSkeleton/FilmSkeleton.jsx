import React from 'react'
import ContentLoader from 'react-content-loader'
import PropTypes from 'prop-types'
import { FilmSkeletonWrapper } from './FilmSkeleton.styled'

const FilmSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={395}
      height={634}
      viewBox="0 0 395 634"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="395" height="522" />
      <rect x="0" y="534" rx="5" ry="5" width="254" height="24" />
      <rect x="0" y="564" rx="5" ry="5" width="370" height="18" />
    </ContentLoader>
  )
}

FilmSkeleton.propTypes = {}

FilmSkeleton.defaultProps = {}

export default FilmSkeleton
