import styled from 'styled-components'

export const OrderTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  color: ${(props) => props.theme['gray-300']};

  td {
    padding: 1.25rem 2rem;
    text-align: center;
    background: ${(props) => props.theme['gray-700']};
    &:first-child {
      border-radius: 12px 0 0 12px;
    }
    &:last-child {
      border-radius: 0 12px 12px 0;
    }
    &:hover {
      cursor: pointer;
    }
  }

  th {
    padding: 1.25rem 2rem;
    text-align: center;
    background: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme['gray-200']};
    &:first-child {
      border-radius: 12px 0 0 12px;
    }
    &:last-child {
      border-radius: 0 12px 12px 0;
    }
    color: ${(props) => props.theme['gray-100']};
  }
`
