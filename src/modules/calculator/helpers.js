import isEqual from 'lodash/fp/isEqual'
import values from 'lodash/fp/values'
import includes from 'lodash/fp/includes'
import map from 'lodash/fp/map'
import join from 'lodash/fp/join'

import { ACTIONS, OPERATORS } from '../../constants'

export const isOperator = (key) => includes(key)(values(OPERATORS))
export const isComma = isEqual(ACTIONS.COMMA)
export const isCompute = isEqual(ACTIONS.EQUAL)
export const isClear = isEqual(ACTIONS.CLEAR)

export const transformOperators = map(entity => {
  if (entity === OPERATORS.ADD) {
    return '+'
  }
  
  if (entity === OPERATORS.SUBTRACT) {
    return '-'
  }
  
  if (entity === OPERATORS.MULTIPLY) {
    return '*'
  }
  
  if (entity === OPERATORS.DIVIDE) {
    return '/'
  }
  
  if (entity === ACTIONS.COMMA) {
    return '.'
  }
  
  return entity
})

export const reduceStack = join('')
