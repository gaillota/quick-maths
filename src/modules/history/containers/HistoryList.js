import React from 'react'

import List from '../../../components/List'
import HistoryListWrapper from '../../../components/HistoryListWrapper'
import HistoryListItem from '../../../components/HistoryListItem'

const HistoryList = ({ history }) => (
  <List
    items={history}
    component={HistoryListItem}
    wrapper={HistoryListWrapper}
    itemName='operation'
  />
)

export default HistoryList
