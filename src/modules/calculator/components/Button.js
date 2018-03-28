import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  height: 100%;
  background: ${props => props.isActive ? props.theme.colors.warning : props.theme.colors.primary};
  color: white;
  font-size: 2.5rem;
  
  &:active {
    background: ${props => props.theme.colors.secondary};
  }
  
  &:focus {
    outline: 0;
  }
`

export default Button
