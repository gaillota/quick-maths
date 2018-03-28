import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  height: 100%;
  background: ${props => props.isActive ? props.theme.colors.success : props.theme.colors.primary};
  color: ${props => props.theme.colors.pad.key.color};
  font-size: 3rem;
  
  &:focus {
    outline: 0;
  }
`

export default Button
