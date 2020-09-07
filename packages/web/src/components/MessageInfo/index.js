import React from 'react'
import Badge from '../Badge'

import * as S from './styles'

import PROFILE_PIC from '../../assets/images/profile.jpg'

const MessageInfo = () => {
  return (
    <S.Container>
      <S.PhotoUser>
        <img src={PROFILE_PIC} alt="profile" />
      </S.PhotoUser>
      <S.MessageDetails>
        <S.MessageSection>
          <S.UserName>John Doe</S.UserName>
          <S.MessageHour>09:00</S.MessageHour>
        </S.MessageSection>
        <S.MessageSection>
          <S.LastMessage>Hi there, how are you ?</S.LastMessage>
          <S.MessagesNotRead>
            <Badge number="9+" />
          </S.MessagesNotRead>
        </S.MessageSection>
      </S.MessageDetails>
    </S.Container>
  )
}

export default MessageInfo
