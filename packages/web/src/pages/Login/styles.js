import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const ContainerLogin = styled.div`
  display: flex;
  flex: 1;
  background: ${props => props.theme.colors.white};
  height: 100vh;
  flex-direction: column;
`

export const FormContainer = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  align-content: center;
  padding: 15%;
  justify-content: space-around;
`

export const HeaderForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const LogoContainer = styled.div``

export const RegisterButton = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
`

export const Button = styled.button`
  width: 100%;
  background: ${props =>
    props.white ? props.theme.colors.white : props.theme.colors.primary};
  font-weight: bolder;
  border: ${props =>
    props.white ? `2px solid ${props.theme.colors.gray}` : 'none'};
  border-radius: 5px;
  color: ${props =>
    props.white
      ? `2px solid ${props.theme.colors.primary}`
      : props.theme.colors.white};
  min-height: ${props => (props.white ? '30px' : '40px')};

  &:hover {
    border: 2px solid ${props => props.theme.colors.purpleLight};
  }
`

export const BodyForm = styled.div`
  color: ${props => props.theme.colors.primary};
  margin-top: 5px;
`

export const LoginForm = styled.form`
  margin-top: 7%;
`

export const ForgotPassword = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bolder;
`

export const BottomContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.purpleLight};
  font-weight: bolder;
`
export const Logo = styled.div`
  width: 50px;
  height: 50px;
`

export const ContainerBanner = styled.div`
  display: flex;
  flex: 2;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const ImageBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
