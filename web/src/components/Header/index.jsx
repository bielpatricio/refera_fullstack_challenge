import { Link, useNavigate } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/" title="Home">
        <img src="/src/assets/logo.png" alt="Logo" draggable={false} />
      </Link>

      <h1>Refera</h1>
    </HeaderContainer>
  )
}
