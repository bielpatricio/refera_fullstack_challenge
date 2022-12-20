import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/" title="Home">
        <img src="/src/assets/logo.png" alt="Logo" draggable={false} />
      </a>

      <h1>Refera</h1>
    </HeaderContainer>
  )
}
