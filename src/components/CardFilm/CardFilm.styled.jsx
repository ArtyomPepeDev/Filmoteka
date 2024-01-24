import styled from 'styled-components'

export const CardFilmWrapper = styled.div`
  width: clamp(280px, 336px, 395px);
  padding: 10px;
`
export const FilmTitle = styled.h1`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #000;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  overflow: hidden;
`

export const FilmDescription = styled.p`
  color: #ff6b08;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`

export const ImageStyle = styled.img`
  width: clamp(280px, 5vw, 100%);
  border-radius: 10px;
`