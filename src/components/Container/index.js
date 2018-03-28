import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.sizes.breakpoints.desktop}px) {
    width: ${props => props.theme.sizes.breakpoints.desktop - 2 * props.theme.sizes.gap}px;
    max-width: ${props => props.theme.sizes.breakpoints.desktop - 2 * props.theme.sizes.gap}px;
  }
`

export default Container
