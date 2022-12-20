import styled from 'styled-components'

export const OrderDetailContainer = styled.div`
  max-width: 85rem;
  min-width: 60rem;
  flex: 1;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  > h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['blue-700']};
  }
`
