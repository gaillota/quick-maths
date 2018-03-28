import isEqual from 'lodash/fp/isEqual'
import values from 'lodash/fp/values'
import includes from 'lodash/fp/includes'
import map from 'lodash/fp/map'
import join from 'lodash/fp/join'

import { ACTIONS, OPERATORS } from '../../constants'
import { mapOperatorToJs } from './config'

export const isOperator = (key) => includes(key)(values(OPERATORS))
export const isComma = isEqual(ACTIONS.COMMA)
export const isCompute = isEqual(ACTIONS.EQUAL)
export const isClear = isEqual(ACTIONS.CLEAR)

// Transform operators in stack to their JS equivalent
export const transformOperators = map(entity => mapOperatorToJs[entity] || entity)

// Transform stack into string we can evaluate for computation
export const reduceStack = join('')
