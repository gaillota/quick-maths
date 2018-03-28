import React from 'react'

import Grid from '../../../components/Grid/index'
import Cell from '../../../components/Cell/index'
import Key from '../containers/Key'

import { padConfig } from '../config'

const Pad = () => (
  <Grid columns={4} rows={5} gap='0.5em'>
    {
      padConfig.map(({ key, action, ...rest }, index) => (
        <Cell {...rest} key={index}>
          <Key action={action}>
            {key}
          </Key>
        </Cell>
      ))
    }
  </Grid>
)

export default Pad
