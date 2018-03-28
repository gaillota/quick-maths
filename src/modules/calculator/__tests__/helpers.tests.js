import { isClear, isComma, isCompute, isOperator } from '../helpers'
import { ACTIONS, OPERATORS } from '../../../constants'

describe('isOperator', () => {
  test('should be true', () => {
    expect(isOperator(OPERATORS.ADD)).toBe(true)
    expect(isOperator(OPERATORS.SUBTRACT)).toBe(true)
    expect(isOperator(OPERATORS.MULTIPLY)).toBe(true)
    expect(isOperator(OPERATORS.DIVIDE)).toBe(true)
  })
  
  test('should be false', () => {
    expect(isOperator(null)).toBe(false)
    expect(isOperator(true)).toBe(false)
    expect(isOperator(false)).toBe(false)
    expect(isOperator({})).toBe(false)
    expect(isOperator([])).toBe(false)
    expect(isOperator(0)).toBe(false)
    expect(isOperator('123')).toBe(false)
  })
})

describe('isComma', () => {
  test('should be true', () => {
    expect(isComma(ACTIONS.COMMA)).toBe(true)
  })
  
  test('should be false', () => {
    expect(isComma(null)).toBe(false)
    expect(isComma(true)).toBe(false)
    expect(isComma(false)).toBe(false)
    expect(isComma({})).toBe(false)
    expect(isComma([])).toBe(false)
    expect(isComma(0)).toBe(false)
    expect(isComma('.0')).toBe(false)
  })
})

describe('isCompute', () => {
  test('should be true', () => {
    expect(isCompute(ACTIONS.EQUAL)).toBe(true)
  })
  
  test('should be false', () => {
    expect(isCompute(null)).toBe(false)
    expect(isCompute(true)).toBe(false)
    expect(isCompute(false)).toBe(false)
    expect(isCompute({})).toBe(false)
    expect(isCompute([])).toBe(false)
    expect(isCompute(0)).toBe(false)
    expect(isCompute('123')).toBe(false)
  })
})

describe('isClear', () => {
  test('should be true', () => {
    expect(isClear(ACTIONS.CLEAR)).toBe(true)
  })
  
  test('should be false', () => {
    expect(isClear(null)).toBe(false)
    expect(isClear(true)).toBe(false)
    expect(isClear(false)).toBe(false)
    expect(isClear({})).toBe(false)
    expect(isClear([])).toBe(false)
    expect(isClear(0)).toBe(false)
    expect(isClear('123')).toBe(false)
  })
})
