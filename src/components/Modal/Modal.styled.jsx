import styled from 'styled-components'

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.25);
  z-index: 3;
`

export const ModalWindow = styled.div`
  position: relative;
  background-color: #fff;
  padding: 40px 12px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  outline: none;
`
