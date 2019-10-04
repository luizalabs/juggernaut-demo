import styled from 'styled-components'

const ContainerStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing(10)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export {
  ContainerStyled
}