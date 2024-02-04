import styled from 'styled-components'

export const ModalFilmWrapper = styled.div`
  border-radius: 10px;
`

export const ModalStyle = styled.div`
  display: flex;
`

export const ModalImgWrapper = styled.div`
  width: 375px;
  margin-right: 16px;
`

export const ModalImg = styled.img`
  width: 100%;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    height: 85%;
  }
`

export const ModalMovieName = styled.h1`
  width: 400px;
  color: ${(props) => props.theme.colors.text};
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`
export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const MovieInfoList = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`

export const AboutStyle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
`
export const ModalDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const MovieDescription = styled.p`
  width: 391px;
  color: ${(props) => props.theme.colors.text};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`

export const VoteStyle = styled.span`
  display: inline-block;
  text-align: center;
  width: 36px;
  height: 16px;
  border-radius: 5px;
  background: ${(props) => (props.isTotalVotes ? '#f7f7f7' : '#FF6B01')};
  color: ${(props) => (props.isTotalVotes ? '#000' : '#fff')};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
`

export const MovieInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const MovieInfoContent = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  color: ${(props) => props.color || props.theme.colors.text};
  max-width: 200px;
`

export const ButtonContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 27px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
  }
`

export const ButtonModalDiv = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`

export const ModalButton = styled.button`
  width: 150px;
  height: 44px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  background: transparent;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  outline: none;
  cursor: pointer;
`

export const ButtonViewTrailer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  width: 330px;
  height: 50px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  background: #ff6b01;
  border: none;
  outline: none;
  cursor: pointer;
`
