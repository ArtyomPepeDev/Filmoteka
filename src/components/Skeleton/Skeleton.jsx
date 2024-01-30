import React from 'react'
import PropTypes from 'prop-types'
import { SkeletonWrapper } from './Skeleton.styled'
import FilmSkeleton from '../FilmSkeleton/FilmSkeleton'

const Skeleton = () => {
  const array = Array(9).fill(true)
  return (
    <SkeletonWrapper>
      {array.map((_, index) => <FilmSkeleton key={index}/>)}
    </SkeletonWrapper>
  )
}

Skeleton.propTypes = {}

Skeleton.defaultProps = {}

export default Skeleton
