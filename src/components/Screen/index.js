import styled from 'styled-components'

const Screen = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  
  background: ${props => props.theme.colors.screen.background};
  border: 5px solid ${props => props.theme.colors.screen.border};
  padding: 3px 10px;
  margin-bottom: 10px;
`

export default Screen
