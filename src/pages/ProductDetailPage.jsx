import { useParams, useNavigate } from 'react-router-dom'

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div>
      <h2>Detalhes do Produto</h2>
      <p>ID do produto: {id}</p>
      <button onClick={handleBack}>Voltar para Home</button>
    </div>
  )
}

export default ProductDetailPage
