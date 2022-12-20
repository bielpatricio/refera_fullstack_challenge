import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 85rem;
  padding: 2rem;
  object-fit: cover;

  > a > img {
    width: 3rem;
    width: 3rem;
  }

  > h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['blue-700']};
  }
`
