import React from 'react'

import * as S from './styles'
import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/loginPageBanner.svg'

const Login = () => {
  return (
    <S.Container>
      <S.ContainerLogin>
        <S.FormContainer>
          <S.HeaderForm>
            <S.LogoContainer>
              <img src={logo} alt="logo" width="50" />
            </S.LogoContainer>
            <S.RegisterButton>
              <S.Button white small>
                Register
              </S.Button>
            </S.RegisterButton>
          </S.HeaderForm>
          <S.BodyForm>
            <h1>Log In</h1>
            <S.LoginForm>
              <input
                type="email"
                name="email"
                placeholder="Enter your e-mail"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <S.Button style={{ marginBottom: '10px' }}>Log In</S.Button>
            </S.LoginForm>
            <S.ForgotPassword>
              <a href="#"> Forgot password ?</a>
            </S.ForgotPassword>
          </S.BodyForm>
        </S.FormContainer>
        <S.BottomContainer>
          <div>
            <a href="#">Privacy Police</a> and
            <a href="#"> Terms of Service</a>
          </div>
        </S.BottomContainer>
      </S.ContainerLogin>
      <S.ContainerBanner>
        <S.ImageBanner>
          <img src={banner} alt="banner" width="70%" />
        </S.ImageBanner>
      </S.ContainerBanner>
    </S.Container>
  )
}
export default Login
