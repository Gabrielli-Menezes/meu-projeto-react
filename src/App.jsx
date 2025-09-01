import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
import ProductDetailPage from './pages/ProductDetailPage'
import Navbar from './components/Navbar'
import RegistrationPage from './pages/RegistrationPage'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/produtos/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cadastro" element={<RegistrationPage />} />
      </Routes>
    </div>
  )
}

export default App
