import React from 'react'

import ChatMessage from '../ChatMessage'

import * as S from './styles'

const MessageContainer = () => {
  return (
    <S.Container>
      <S.ActionContainer>
        <S.ActionButton>Clear Chat</S.ActionButton>
        <S.ActionButton>More</S.ActionButton>
      </S.ActionContainer>
      <S.ChatContainer>
        <S.AnswerContainer>
          <S.Input type="text" pplaceholder="Type a message" />
          <S.Button>
            <S.ButtonIconSend />
          </S.Button>
        </S.AnswerContainer>
        <ChatMessage
          me
          message="Hi, I am coming there in few minutes. Please wait! I am in taxi right now."
        />
        <ChatMessage
          before
          message="Waiting for you reply. As i have to go back soon. I have to tavel a long distance."
        />
        <ChatMessage message="Hi there, How are you ?" />
      </S.ChatContainer>
    </S.Container>
  )
}

export default MessageContainer
