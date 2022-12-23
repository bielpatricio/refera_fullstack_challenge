import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0; //top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.75); //#00000075;
`

export const Content = styled(Dialog.Content)`
  min-width: 50rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  outline: transparent;
  box-shadow: none;
  border: none;
  &:focus {
    outline: transparent;
    box-shadow: none;
    border: none;
  }

  h2 {
    color: ${(props) => props.theme.white};
  }
`

export const Line = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`

export const FormNewOrder = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  align-items: flex-end;

  > p {
    font-size: ${(props) => props.theme.sm};
    margin: 0;
    margin-top: -1rem;
    margin-bottom: -2rem;
    color: ${(props) => props.theme['red-500']};
  }

  button[type='submit'] {
    height: 3rem;
    width: 5rem;
    border: 0;
    background: ${(props) => props.theme['orange-700']};
    color: ${(props) => props.theme['gray-100']};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['orange-500']};
      transition: background-color 0.2s;
    }
  }
`
export const PhoneInput = styled.div`
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${(props) => props.theme['gray-700']};

  &:has(input:focus) {
    box-shadow: none;
    border: 2px solid ${(props) => props.theme['orange-500']};
  }

  spam {
    font-size: ${(props) => props.theme.md};
    color: ${(props) => props.theme['gray-300']};
  }

  > input {
    font-size: ${(props) => props.theme.md};
    background: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-300']};
    border: 0;
    border: 2px solid ${(props) => props.theme['gray-700']};
    &:focus {
      box-shadow: none;
    }
    &::placeholder {
      box-shadow: none;
      border: none;
      color: ${(props) => props.theme['gray-500']};
    }
  }
`
export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: ${(props) => props.width};

  label {
    font-size: ${(props) => props.theme.sm};
    /* font-weight: bold; */
    margin: 0;
    color: ${(props) => props.theme['gray-100']};
  }

  > input {
    font-size: ${(props) => props.theme.md};
    border-radius: 6px;
    background: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    border: 2px solid ${(props) => props.theme['gray-700']};
    box-shadow: none;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    &:focus {
      box-shadow: none;
      border: 2px solid ${(props) => props.theme['orange-500']};
    }
  }

  > textarea {
    font-size: ${(props) => props.theme.md};
    border-radius: 6px;
    background: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    height: 5rem;
    border: 2px solid ${(props) => props.theme['gray-700']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    &:focus {
      box-shadow: none;
      border: 2px solid ${(props) => props.theme['orange-500']};
    }
  }

  > select {
    font-size: ${(props) => props.theme.md};
    border-radius: 6px;
    background: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    height: 51px;
    border: 2px solid ${(props) => props.theme['gray-700']};

    > option {
      font-size: ${(props) => props.theme.md};
    }

    &::placeholder {
      cursor: pointer;
      color: ${(props) => props.theme['gray-500']};
    }

    &:focus {
      box-shadow: none;
      border: 2px solid ${(props) => props.theme['orange-500']};
    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0; //font-size: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};

  outline: transparent;
  box-shadow: none;
  border: none;
  &:focus {
    outline: transparent;
    box-shadow: 0;
    border: none;
  }

  > svg {
    &:hover {
      color: ${(props) => props.theme['orange-300']};
    }

    &:focus {
      outline: transparent;
      box-shadow: 0;
      border: none;
    }
  }
`
