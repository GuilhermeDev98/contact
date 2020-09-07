import React from 'react'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import MessageContainer from '../../components/MessageContainer'

import * as S from './styles'

const Dashboard = () => {
  return (
    <S.Container>
      <Header />
      <S.MainContainer>
        <Sidebar />
        <MessageContainer />
      </S.MainContainer>
    </S.Container>
  )
}

export default Dashboard
