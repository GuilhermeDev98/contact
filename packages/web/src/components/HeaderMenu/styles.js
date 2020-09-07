import styled from 'styled-components'

import { FaRegUserCircle } from 'react-icons/fa'

export const UserInformations = styled.div`
  display: flex;
  align-items: center;
`

export const UserIcon = styled(FaRegUserCircle)`
  font-size: 20px;
`

export const UserName = styled.span`
  margin-left: 5px;
  font-size: 13px;
`
