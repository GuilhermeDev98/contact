import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

import PHOTO_USER from '../../assets/images/profile.jpg'

const ChatMessage = ({ message, me, before }) => {
  return (
    <S.Container me={me}>
      <S.UserPhoto>
        {!me && !before && <img src={PHOTO_USER} alt="user" />}
      </S.UserPhoto>
      <S.Message me={me}>
        <S.MessageText me={me}>{message}</S.MessageText>
        <S.MessageHour me={me}>09:00</S.MessageHour>
      </S.Message>
    </S.Container>
  )
}

ChatMessage.propTypes = {
  message: PropTypes.string.isRequired,
  me: PropTypes.bool,
  before: PropTypes.bool
}

export default ChatMessage
