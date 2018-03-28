import styled from 'styled-components'
import PropTypes from 'prop-types'

const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.rows}, auto);
    grid-template-columns: repeat(${props => props.columns}, auto);
    grid-gap: ${props => props.gap};
    justify-items: stretch;
    align-items: stretch;
    height: 50vh;
`

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  gap: PropTypes.string.isRequired,
}

export default Grid
