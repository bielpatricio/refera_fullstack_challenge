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
    background: ${(props) => props.theme['purple-500']};
    color: ${(props) => props.theme.white};
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
      background: ${(props) => props.theme['purple-700']};
      transition: background-color 0.2s;
    }
  }
`
export const PhoneInput = styled.div`
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:has(input:focus) {
    box-shadow: none;
    border-color: ${(props) => props.theme['gray-900']};
  }

  spam {
    font-size: ${(props) => props.theme.md};
    color: ${(props) => props.theme['gray-300']};
  }

  > input {
    font-size: ${(props) => props.theme.md};
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    border: 0;
    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme['gray-900']};
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
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  > textarea {
    font-size: ${(props) => props.theme.md};
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    height: 5rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  > select {
    font-size: ${(props) => props.theme.md};
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    height: 51px;

    > option {
      font-size: ${(props) => props.theme.md};
    }

    &::placeholder {
      cursor: pointer;
      color: ${(props) => props.theme['gray-500']};
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
`

// export const NewOrderTypeButton = styled(RadioGroup.Item)`
//   background: ${(props) => props.theme['gray-700']};
//   padding: 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   border-radius: 6px;
//   cursor: pointer;
//   border: 0;
//   color: ${(props) => props.theme['gray-300']};

//   svg {
//     color: ${(props) =>
//       props.variant === 'income'
//         ? props.theme['purple-300']
//         : props.theme['blue-300']};
//   }

//   &[data-state='unchecked']:hover {
//     background-color: ${(props) => props.theme['gray-600']};
//     transition: background-color 0.2s;
//   }

//   &[data-state='checked'] {
//     color: ${(props) => props.theme.white};
//     background-color: ${(props) =>
//       props.variant === 'income'
//         ? props.theme['purple-300']
//         : props.theme['blue-300']};

//     svg {
//       color: ${(props) => props.theme.white};
//     }
//   }
// `
