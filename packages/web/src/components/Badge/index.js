import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles.js'

const Badge = ({ number }) => {
  return <S.Container>{number}</S.Container>
}

Badge.propTypes = {
  number: PropTypes.string.isRequired
}

export default Badge
