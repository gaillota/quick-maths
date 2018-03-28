import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding: 30px 0 50px;
  color: ${props => props.theme.colors.primary};
  box-shadow: 0 1px 1px ${props => props.theme.colors.light};
  margin-bottom: 20px;
`

export default Header
