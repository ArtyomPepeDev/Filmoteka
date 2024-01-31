import React from 'react'
import PropTypes from 'prop-types'
import { ModalAuthWrapper } from './ModalAuth.styled'
import Modal from '../Modal/Modal'

const ModalAuth = ({ toggleModal, isAuthOpen }) => {
  return (
    <>
      {isAuthOpen && (<Modal toggleModal={toggleModal}>
        <ModalAuthWrapper>
          <h1>Log In</h1>
          <input type="" />
        </ModalAuthWrapper>
      </Modal>)}
    </>
  )
}

ModalAuth.propTypes = {}

ModalAuth.defaultProps = {}

export default ModalAuth
