import { ACTIONS, OPERATORS } from '../../constants'

export const mapOperatorToJs = {
  [OPERATORS.ADD]: '+',
  [OPERATORS.SUBTRACT]: '-',
  [OPERATORS.MULTIPLY]: '*',
  [OPERATORS.DIVIDE]: '/',
  [ACTIONS.COMMA]: '.'
}

export const padConfig = [
  {
    key: '+',
    action: OPERATORS.ADD,
    row: 1,
    column: 1,
  },
  {
    key: '-',
    action: OPERATORS.SUBTRACT,
    row: 1,
    column: 2,
  },
  {
    key: '/',
    action: OPERATORS.DIVIDE,
    row: 1,
    column: 3
  },
  {
    key: 'x',
    action: OPERATORS.MULTIPLY,
    row: 1,
    column: 4
  },
  {
    key: '7',
    action: '7',
    row: 2,
    column: 1,
  },
  {
    key: '8',
    action: 8,
    row: 2,
    column: 2
  },
  {
    key: '9',
    action: 9,
    row: 2,
    column: 3
  },
  {
    key: 'C',
    action: ACTIONS.CLEAR,
    row: 2,
    column: 4,
    high: 2,
  },
  {
    key: '4',
    action: 4,
    row: 3,
    column: 1,
  },
  {
    key: '5',
    action: 5,
    row: 3,
    column: 2
  },
  {
    key: '6',
    action: 6,
    row: 3,
    column: 3
  },
  {
    key: '1',
    action: 1,
    row: 4,
    column: 1
  },
  {
    key: '2',
    action: 2,
    row: 4,
    column: 2
  },
  {
    key: '3',
    action: 3,
    row: 4,
    column: 3
  },
  {
    key: '=',
    action: ACTIONS.EQUAL,
    row: 4,
    column: 4,
    high: 2,
  },
  {
    key: '0',
    action: 0,
    row: 5,
    column: 1,
    wide: 2
  },
  {
    key: '.',
    action: ACTIONS.COMMA,
    row: 5,
    column: 3
  }
]
