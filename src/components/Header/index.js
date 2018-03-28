import styled from 'styled-components'

const Header = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.primary};
`

export default Header
