import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { ModalBackdrop, ModalWindow, CloseButton } from './Modal.styled'

const Modal = ({ children, toggleModal }) => {
  const modalRoot = document.getElementById('modal-root')

  const handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) return

    toggleModal()
  }

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalWindow>
        {children}
        <CloseButton onClick={toggleModal}>
          <img src="/images/svg/CloseIcon.svg" />
        </CloseButton>
      </ModalWindow>
    </ModalBackdrop>,
    modalRoot
  )
}

Modal.propTypes = {}

Modal.defaultProps = {}

export default Modal
