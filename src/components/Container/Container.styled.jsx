import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
`

export const ContainerInner = styled.div`
  width: calc(1280px + 64px);
  padding: 60px 0px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
