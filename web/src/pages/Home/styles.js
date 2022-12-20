import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 85rem;
  min-width: 60rem;
  flex: 1;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`

export const NewOrderButton = styled.button`
  padding: 1rem;
  display: flex;
  width: 12rem;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme['blue-300']};
  border: none;
  text-decoration: none;

  > h3 {
    font-size: 16px;
    color: ${(props) => props.theme['gray-900']};
    font-weight: bold;
  }

  &:hover {
    background-color: ${(props) => props.theme['blue-500']};
    cursor: pointer;
  }

  &:focus {
    background-color: ${(props) => props.theme['blue-500']};
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme['blue-300']};
  }
`
