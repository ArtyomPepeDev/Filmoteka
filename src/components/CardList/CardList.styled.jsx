import styled from 'styled-components'

export const CardListWrapper = styled.div`
  padding: 0 32px;
  margin-top: -16px;
  margin-left: -16px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1279px) {
    margin-top: -32px;
    margin-left: -32px;
  }

  @media (max-width: 767px) {
    padding: 0 20px;
    margin-top: -20px;
    margin-left: 0;
  }
`
