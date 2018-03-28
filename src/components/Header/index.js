import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  padding: 40px 0 50px;
  color: ${props => props.theme.colors.brand};
`

export default Header
