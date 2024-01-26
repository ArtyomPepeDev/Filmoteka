import styled from 'styled-components'
import Modal from 'react-modal'

export const ModalFilmWrapper = styled.div`
  border-radius: 10px;
`

export const ModalStyle = styled.div`
  display: flex;
`

export const ModalImg = styled.img`
  padding: 20px 20px;
  width: 375px;
  max-height: 478px;
`

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 475px;
  height: 580px;
  padding: 20px;
`

export const MovieInfoList = styled.div`
display: flex;
flex-direction: column;
gap: 0;
`

export const InfoMoviePg = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`

export const MovieDescription = styled.p`
`

export const VoteCount = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const VoteStyle = styled.span`
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  background: #ff6b01;
`

export const InfoMovieStyle = styled.p`
  display: flex;
  margin-left: 0, 0px;
`

export const ButtonModalDiv = styled.div`
  display: flex;
  gap: 30px;
  margin: 20px 10px;
`

export const ModalButton = styled.button`
  width: 140px;
  height: 50px;
  color: #000;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  border-radius: 10px;
  border: 1px solid #000;
  outline: none;
  cursor: pointer;
`
