import React from 'react'
import styled from 'styled-components'
import flow from 'lodash/fp/flow'

import { reduceStack, transformOperators } from '../../modules/calculator/helpers'

const Wrapper = styled.div`
  margin: 5px 0;
`

const HistoryListItem = ({ operation }) => (
  <Wrapper>
    {operation}
  </Wrapper>
)

const operationToString = (Component) => ({ operation }) => {
  const operationString = flow(transformOperators, reduceStack)(operation)
  
  return (
    <Component operation={operationString}/>
  )
}

export default operationToString(HistoryListItem)
