import styled from 'styled-components'
import PropTypes from 'prop-types'

const Cell = styled.div`
  grid-row: ${props => `${props.row} / ${props.row + props.high}`};
  grid-column: ${props => `${props.column} / ${props.column + props.wide}`};
`

Cell.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  high: PropTypes.number,
  wide: PropTypes.number,
}

Cell.defaultProps = {
  high: 1,
  wide: 1
}

export default Cell
