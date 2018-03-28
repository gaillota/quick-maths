import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'

import { keyPress } from '../actions'
import { makeIsKeyActiveSelector } from '../selectors'

const Button = styled.button`
  width: 100%;
  height: 100%;
  background: ${props => props.isActive ? props.theme.colors.pad.key.activeBackground : props.theme.colors.pad.key.background};
  color: ${props => props.theme.colors.pad.key.color};
  font-size: 3rem;
`

const mapStateToProps = createStructuredSelector({
  isActive: makeIsKeyActiveSelector()
})

const mapDispatchToProps = (dispatch, { action }) => bindActionCreators({
  keyPress: () => keyPress(action),
}, dispatch)

const Key = ({ isActive, keyPress, children }) => (
  <Button onClick={keyPress} isActive={isActive}>
    {children}
  </Button>
)

export default connect(mapStateToProps, mapDispatchToProps)(Key)
