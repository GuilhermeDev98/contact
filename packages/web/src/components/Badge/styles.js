import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
`
