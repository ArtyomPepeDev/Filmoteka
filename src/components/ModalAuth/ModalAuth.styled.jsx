import styled from 'styled-components'

export const ModalAuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 30px;
  padding: 40px 20px;
`

export const LogInText = styled.h1`
  color: #000;
  font-size: 20px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0px;
  border-radius: 5px;
  border: solid 1px #3b4680;
  transition: all .5s ease-in-out;
  &:focus {
    outline: solid 1px #3b4680;
    box-shadow: 0 0 20px #3b4680;
  }
  &:hover {
    box-shadow: 0 0 20px #3b4680;
  }
`

export const LogInButton = styled.button`
  color: #fff;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  background: #3b4680;
  border: none;
  outline: none;
  transition: all .5s ease-in-out;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px #3b4680;
  }
`
