import styled from 'styled-components'

export const OrderDetailContainer = styled.div`
  max-width: 85rem;
  min-width: 60rem;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  align-items: center;
  justify-content: flex-start;
`

export const Title = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  padding: 0.5rem 0.25rem;
  border-radius: 6px;
  margin-bottom: -1.5rem;
  margin-left: 2rem;
  z-index: 1;
  > h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['blue-700']};
  }
`

export const CardContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  height: 100%;
  padding: 3rem;
  border: 3px solid ${(props) => props.theme['purple-500']};
  flex: 1;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme['gray-100']};
`

export const Container = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  /* background: transparent; */
  padding: 1.5rem 2rem;
  border-radius: 16px;
  background: ${(props) => props.theme['purple-100']};
`
export const ContainerDescription = styled.div`
  width: 100%;
  height: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  /* background: transparent; */
  padding: 1.5rem 2rem;
  border-radius: 16px;
  background: ${(props) => props.theme['purple-100']};

  > h3 {
    font-size: ${(props) => props.theme.lg};
    color: ${(props) => props.theme['gray-500']};
  }

  > h2 {
    margin-left: 2rem;
    font-size: ${(props) => props.theme['2xl']};
    color: ${(props) => props.theme['gray-900']};
  }
`

export const Field = styled.div`
  display: flex;
  align-items: flex-end;
  background: transparent;
  gap: 1rem;
  flex-wrap: wrap;

  > h3 {
    font-size: ${(props) => props.theme.lg};
    color: ${(props) => props.theme['gray-500']};
  }

  > h2 {
    font-size: ${(props) => props.theme['2xl']};
    color: ${(props) => props.theme['gray-900']};
  }
`

export const Line = styled.div`
  display: flex;
  align-items: flex-start;
  background: transparent;
  gap: 2rem;
`
