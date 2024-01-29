import React from 'react'
import PropTypes from 'prop-types'
import { FooterWrapper, FooterContent } from './Footer.styled'

const Footer = () => (
  <FooterWrapper>
    <FooterContent>© 2023 | All Rights Reserved |</FooterContent>
    <FooterContent>Developed with ❤️ by Us</FooterContent>
  </FooterWrapper>
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer