import styled from 'styled-components'

const Screen = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  
  background: ${props => props.theme.colors.primary};
  border: 5px solid ${props => props.theme.colors.secondary};
  padding: 3px 10px;
  margin-bottom: 5px;
  color: white;
`

export default Screen
