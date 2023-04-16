import { useEffect, useState } from 'react'
import './style.css'
import apiData from './service/api'

function App() {
  const [produto, setProduto] = useState([])
  const [filtro, setFiltro] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function api() {
      try {
        setLoading(true)
        const response = await apiData.get()

        setProduto(response.data)
        setFiltro(response.data)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    api()
  }, [])

  const handleFilter = (min, max) => {
    const filtrado = produto.filter(p => p.price >= min && p.price <= max)

    setFiltro(filtrado)
  }

  const handleAll = () => {
    handleFilter(0, Infinity)
  }

  const handlePrice20 = () => {
    handleFilter(0, 20)
  }

  const handlePrice20To100 = () => {
    handleFilter(20, 100)
  }

  const handlePriceAbove100 = () => {
    handleFilter(101, Infinity)
  }

  return (
    <>
      <div className="btn">
        <button onClick={handleAll}>Todos</button>
        <button onClick={handlePrice20}>Até R$20</button>
        <button onClick={handlePrice20To100}>R$20 - R$100</button>
        <button onClick={handlePriceAbove100}>Acima de R$100</button>
      </div>
      <div className="container">
        {loading && <p>Carregando...</p>}
        {filtro.map(item => (
          <div key={item.id} className="produtos">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <span>R$ {item.price}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
