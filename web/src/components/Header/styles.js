import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 85rem;
  padding: 2rem;
  object-fit: cover;
  border: none;

  > a {
    border: transparent;
    box-shadow: 0;
    display: flex;
    align-items: center;
    border-radius: 8px;

    &:focus {
      border: none;
    }
    > img {
      border-radius: 8px;
      width: 3rem;
      width: 3rem;
    }
  }

  > h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['blue-700']};
  }
`
