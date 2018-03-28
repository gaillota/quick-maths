import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'

import { keyPress } from '../actions'
import { makeIsKeyActiveSelector } from '../selectors'
import Button from '../components/Button'

const mapStateToProps = createStructuredSelector({
  isActive: makeIsKeyActiveSelector(),
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
