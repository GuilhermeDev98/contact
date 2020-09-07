import styled from 'styled-components'
import { RiSendPlaneFill } from 'react-icons/ri'

export const Container = styled.div`
  flex: 2;
  margin-left: 2%;
`
export const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ActionButton = styled.button`
  margin-left: 15px;
  padding: 10px 15px;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  border: 1px solid ${props => props.theme.colors.purpleLight};
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bolder;
`

export const ChatContainer = styled.div`
  background: #3f3653;
  margin-top: 20px;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column-reverse;
  height: 77vh;
`

export const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`

export const Input = styled.input`
  margin-bottom: 0 !important;
`

export const Button = styled.button`
  margin-left: 2%;
  width: 40px;
  height: 40px;
  background: #0088cc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0px;
  :active {
    border: 2px solid ${props => props.theme.colors.secondary};
  }
`
export const ButtonIconSend = styled(RiSendPlaneFill)`
  font-size: 20px;
  color: #fff;
`
