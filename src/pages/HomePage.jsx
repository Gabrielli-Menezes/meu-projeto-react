import { Link } from 'react-router-dom'

function HomePage() {
  const produtos = [
    { id: 1, nome: 'Camisa' },
    { id: 2, nome: 'Calça' },
    { id: 3, nome: 'Tênis' },
  ]

  return (
    <div>
      <h1>Bem-vindo à Página Inicial</h1>
      <h2>Produtos:</h2>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <Link to={`/produtos/${produto.id}`}>{produto.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
