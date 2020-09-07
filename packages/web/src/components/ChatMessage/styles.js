import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  margin: 5px 0;
`
export const UserPhoto = styled.div`
  flex: 1;
  img {
    width: 50px;
    border-radius: 50%;
  }
`

export const Message = styled.div`
  flex: 10;
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  background: ${props =>
    props.me ? props.theme.colors.secondary : props.theme.colors.primary};
  border-radius: 5px;
  padding: 10px 20px;
`

export const MessageText = styled.div`
  text-align: ${props => (props.me ? 'right' : 'left')};
`

export const MessageHour = styled.span`
  text-align: ${props => (props.me ? 'right' : 'left')};
  font-size: 10px;
`
