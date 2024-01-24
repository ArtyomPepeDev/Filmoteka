import styled from 'styled-components'
import Modal from 'react-modal'

export const ModalFilmWrapper = styled.div`
`

export const ModalStyle = styled(Modal)`
  display: flex;
  width: 806px;
  height: 558px;
`

export const ModalImg = styled.img`
  width: 375px;
  height: 520px;
`

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 480px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

`
