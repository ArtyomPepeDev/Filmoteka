import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  padding: 30px 36px;
  margin-top: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: ${(props) => props.theme.colors.secondaryBg};
`

export const FooterContent = styled.p`
  color: #545454;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
