import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.colors.danger};
  color: white;
  border: 1px solid ${props => props.theme.colors.light};
  font-size: 0.75rem;
  border-radius: 3px;
  padding: 3px 7px;
`

export default Button
