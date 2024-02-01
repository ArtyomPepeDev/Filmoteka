import React from 'react'
import PropTypes from 'prop-types'
import { ModalAuthWrapper, LogInText, Input, LogInButton } from './ModalAuth.styled'
import Modal from '../Modal/Modal'

const ModalAuth = ({ toggleModal, isAuthOpen }) => {
  return (
    <>
      {isAuthOpen && (<Modal toggleModal={toggleModal}>
        <ModalAuthWrapper>
          <LogInText>Log In</LogInText>
          <div>
            <p>Username</p>
            <Input type="text" placeholder='Username'/>
          </div>
          <div>
            <p>Your Password</p>
            <Input type="password" placeholder='Password' />
          </div>
          <LogInButton>Log In</LogInButton>
        </ModalAuthWrapper>
      </Modal>)}
    </>
  )
}

ModalAuth.propTypes = {}

ModalAuth.defaultProps = {}

export default ModalAuth
