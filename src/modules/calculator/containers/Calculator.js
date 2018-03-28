import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Pad from '../components/Pad'
import Screen from '../../../components/Screen/index'
import Operation from '../../../components/Screen/Operation'
import Result from '../../../components/Screen/Result'
import { makeOperationToStringSelector, makeResultDisplaySelector } from '../selectors'

const Calculator = ({ operation, result }) => (
  <React.Fragment>
    <Screen>
      <Operation>
        {operation}
      </Operation>
      <Result>
        {result}
      </Result>
    </Screen>
    <Pad/>
  </React.Fragment>
)

const mapStateToProps = createStructuredSelector({
  operation: makeOperationToStringSelector(),
  result: makeResultDisplaySelector(),
})

export default connect(mapStateToProps)(Calculator)
