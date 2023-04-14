import { useEffect, useState } from 'react'
import './style.css'

function App() {
  const [produto, setProduto] = useState([])

  useEffect(() => {
    async function api() {
      await fetch('https://fakestoreapi.com/products?limit=15')
        .then(res => res.json())
        .then(json => setProduto(json))
    }

    api()
  }, [])

  return (
    <div className="container">
      {produto.map(item => (
        <div key={item.id} className="produtos">
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <span>R$ {item.price}</span>
        </div>
      ))}
    </div>
  )
}

export default App
