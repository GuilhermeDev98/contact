import React from 'react'

import HeaderMenu from '../HeaderMenu'

import LogoImg from '../../assets/images/logo.png'

import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <S.ContainerHeader>
        <S.HeaderLogo>
          <img src={LogoImg} alt="logo" />
          <S.LogoTitle>Contact</S.LogoTitle>
        </S.HeaderLogo>
        <HeaderMenu />
      </S.ContainerHeader>
    </S.Container>
  )
}

export default Header
