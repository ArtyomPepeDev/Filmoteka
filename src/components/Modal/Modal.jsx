import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {
  ModalBackdrop,
  ModalWindow,
  CloseButton,
  CloseImg,
} from './Modal.styled'
import { useEffect } from 'react'

const Modal = ({ children, toggleModal }) => {
  const modalRoot = document.getElementById('modal-root')

  const handleBackdropClick = (e) => {
    if (e.target !== e.currentTarget) return

    toggleModal()
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalWindow>
        {children}
        <CloseButton onClick={toggleModal}>
          <CloseImg src="/images/svg/CloseIcon.svg" />
        </CloseButton>
      </ModalWindow>
    </ModalBackdrop>,
    modalRoot
  )
}

Modal.propTypes = {}

Modal.defaultProps = {}

export default Modal
