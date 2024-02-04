import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
  flex: 1;
`

export const ContainerInner = styled.div`
  max-width: 1280px;
  min-width: 240px;
  padding: 60px 0px;
  margin: 0 auto;
`
