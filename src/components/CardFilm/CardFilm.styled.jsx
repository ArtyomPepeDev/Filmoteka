import styled from 'styled-components'

export const CardFilmWrapper = styled.a`
  width: 395px;
  cursor: pointer;

  transition: scale 150ms;

  &:hover {
    scale: 1.02;
  }
`
export const FilmContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const FilmTitle = styled.h1`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${(props) => props.theme.title};
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
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
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`

export const ImageStyle = styled.img`
  width: 100%;
  border-radius: 10px;
`

export const VoteAverageFilm = styled.span`
  color: #fff;
  background-color: #ff6b08;
  border-radius: 10px;
  width: 40px;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`
