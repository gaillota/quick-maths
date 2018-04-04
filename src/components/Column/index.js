import styled from 'styled-components'

const Column = styled.div`
  flex: ${props => props.width ? 'auto' : 1};
  width: ${props => props.width || 'auto'};
`

export default Column
