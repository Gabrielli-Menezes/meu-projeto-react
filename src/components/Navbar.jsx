import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
  <Link to="/">Home</Link> |{' '}
  <Link to="/sobre">Sobre</Link> |{' '}
  <Link to="/contato">Contato</Link> |{' '}
  <Link to="/cadastro">Cadastro</Link>
</nav>

  )
}
export default Navbar
