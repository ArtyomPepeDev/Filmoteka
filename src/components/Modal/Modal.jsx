import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {
  ModalBackdrop,
  ModalWindow,
} from './Modal.styled'

const Modal = ({ children, toggleModal }) => {
  const modalRoot = document.getElementById('modal-root')

  const handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) return

    toggleModal()
  }

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </ModalBackdrop>,
    modalRoot
  )
}

Modal.propTypes = {}

Modal.defaultProps = {}

export default Modal
