import styled from 'styled-components'

export const CardFilmWrapper = styled.a`
  width: clamp(280px, 336px, 395px);
  padding: 10px;
`
export const FilmContent = styled.div`
  display: flex;
  flex-direction: column;
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
  overlay: none;
`

export const Divider = styled.span`
  display: block;
  background-color: #ff6b08;
  width: 2px;
  min-height: 20px;
`

export const FilmDescription = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  color: #ff6b08;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
`

export const ImageStyle = styled.img`
  width: clamp(280px, 5vw, 100%);
  border-radius: 10px;
`
