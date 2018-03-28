import React from 'react'

import Grid from '../../../components/Grid'
import Cell from '../../../components/Cell'
import Key from '../containers/Key'

import { padConfig } from '../config'

const Pad = () => (
  <Grid columns={4} rows={5} gap='0.1em'>
    {
      padConfig.map(({ key, action, ...rest }, index) => (
        <Cell key={index} {...rest}>
          <Key action={action}>
            {key}
          </Key>
        </Cell>
      ))
    }
  </Grid>
)

export default Pad
