import styled from 'styled-components'

const Screen = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  
  background: ${props => props.theme.colors.secondary};
  padding: 8px 15px;
  margin-bottom: 5px;
  color: white;
`

export default Screen
