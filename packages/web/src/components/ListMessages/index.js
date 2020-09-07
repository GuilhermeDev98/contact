import React from 'react'

import * as S from './styles'

import MessageInfo from '../MessageInfo'

const ListMessages = () => {
  return (
    <S.Container>
      <S.MessageContainer>
        <MessageInfo />
        <MessageInfo />
      </S.MessageContainer>
    </S.Container>
  )
}

export default ListMessages
