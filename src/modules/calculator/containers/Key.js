import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { keyPress } from '../actions'

const Button = styled.button`
  width: 100%;
  height: 100%;
  background: red;
`

const mapDispatchToProps = (dispatch, { action }) => bindActionCreators({
  keyPress: () => keyPress(action),
}, dispatch)

const Key = ({ keyPress, children }) => (
  <Button onClick={keyPress}>
    {children}
  </Button>
)

export default connect(false, mapDispatchToProps)(Key)
