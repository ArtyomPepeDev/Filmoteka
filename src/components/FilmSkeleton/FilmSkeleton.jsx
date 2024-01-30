import React from 'react'
import ContentLoader from 'react-content-loader'
import PropTypes from 'prop-types'
import { FilmSkeletonWrapper } from './FilmSkeleton.styled'

const FilmSkeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width={395}
    height={574}
    viewBox="0 0 295 574"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="-3" y="12" rx="2" ry="2" width="400" height="400" /> 
    <rect x="560" y="527" rx="0" ry="0" width="47" height="13" /> 
    <rect x="-5" y="424" rx="0" ry="0" width="254" height="36" /> 
    <rect x="126" y="445" rx="0" ry="0" width="14" height="0" /> 
    <rect x="3" y="467" rx="0" ry="0" width="370" height="29" />
  </ContentLoader>
  )
}

FilmSkeleton.propTypes = {}

FilmSkeleton.defaultProps = {}

export default FilmSkeleton
