import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { bindActionsToDispatch } from '../../../utils/helpers'
import { clearHistory, toggleHistory } from '../actions'
import Button from '../components/Button'
import H2 from '../components/H2'
import HistoryList from './HistoryList'
import H3 from '../components/H3'
import { makeEnableSelector, makeOperationsSelector } from '../selectors'
import Actions from '../components/Actions'
import Container from '../components/Container'

const History = ({ enabled, history, toggleHistory, clearHistory }) => (
  <Container>
    <Actions>
      <label htmlFor="history">
        <input type="checkbox" id="history" onChange={(event) => toggleHistory(event.target.checked)}/> Enable history
      </label>
      <Button onClick={clearHistory}>X</Button>
    </Actions>
    {enabled && (
      <React.Fragment>
        <H2>
          History
        </H2>
        {
          !history.length && (
            <H3>History is empty</H3>
          )
        }
        {
          !!history.length && (
            <HistoryList history={history}/>
          )
        }
      </React.Fragment>
    )}
  </Container>
)

const mapStateToProps = createStructuredSelector({
  enabled: makeEnableSelector(),
  history: makeOperationsSelector(),
})

const mapDispatchToProps = bindActionsToDispatch({
  toggleHistory,
  clearHistory,
})

export default connect(mapStateToProps, mapDispatchToProps)(History)
