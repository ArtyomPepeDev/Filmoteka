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
  backdrop-filter: blur(1.5rem);
  z-index: 3;
  
`

export const ModalWindow = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.bg};
  padding: 40px 12px;
  border-radius: 50px 10px 50px 10px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  color: ${(props) => props.theme.colors.close};
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  transition: color 100ms linear;

  &:hover {
    color: #ff6b01;
  }
`
