import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const PhotoUser = styled.div`
  flex: 1;
  img {
    width: 50px;
    border-radius: 50%;
  }
`
export const MessageDetails = styled.a`
  flex: 5;
  padding: 15px 0;
  border-bottom: 1px solid #7e8b80;
  margin-bottom: 10px;
  cursor: pointer;
`

export const MessageSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px 0;
`

export const UserName = styled.div`
  font-weight: bolder;
  color: ${props => props.theme.colors.white};
`
export const MessageHour = styled.div`
  font-weight: bolder;
  color: ${props => props.theme.colors.white};
`
export const LastMessage = styled.div`
  font-size: 12px;
  color: #7e8b80;
  margin-top: 10px;
`
export const MessagesNotRead = styled.div`
  margin-top: 10px;
`
