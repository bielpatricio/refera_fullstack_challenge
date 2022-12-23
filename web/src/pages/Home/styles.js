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
  gap: 1rem;
`
export const Line = styled.div`
  width: 100%;
  height: 100%;

  ${(props) => props.flex === 1 && 'flex: 1;'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  > h3 {
    font-size: 18px;
    color: ${(props) => props.theme['gray-500']};
    font-weight: bold;
  }

  > h2 {
    font-size: 24px;
    color: ${(props) => props.theme['gray-900']};
    font-weight: bold;
  }

  > h1 {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 32px;
    color: ${(props) => props.theme['gray-900']};
    font-weight: bold;
  }
`
export const PaginationButton = styled.button`
  /* padding: 0.5rem; */
  display: flex;
  /* width: 5rem; */
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: transparent;
  border: none;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: transparent;
    box-shadow: none;
  }

  > svg {
    align-items: center;
    color: ${(props) => props.theme['orange-500']};
    &:hover {
      color: ${(props) => props.theme['orange-700']};
      cursor: pointer;
    }

    &:focus {
      color: ${(props) => props.theme['orange-500']};
      outline: transparent;
      box-shadow: 0 0 0 1px ${(props) => props.theme['orange-500']};
    }
  }
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
