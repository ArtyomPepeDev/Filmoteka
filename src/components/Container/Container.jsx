import React from 'react'
import PropTypes from 'prop-types'
import { ContainerWrapper, ContainerInner } from './Container.styled'

const Container = ({ children }) => (
  <ContainerWrapper>
    <ContainerInner>{children}</ContainerInner>
  </ContainerWrapper>
)

Container.propTypes = {}

Container.defaultProps = {}

export default Container
