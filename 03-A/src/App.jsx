import { useState } from 'react'
import './global.css'
import './style.css'
import { useEffect } from 'react'
import apiData from './services/api'

function App() {
  const [produto, setProduto] = useState([])
  const [ordenadoPorPreco, setOrdenadoPorPreco] = useState(false)

  useEffect(() => {
    async function getProduto() {
      try {
        await apiData.get().then(response => {
          setProduto(response.data)
        })
      } catch (error) {
        console.log(error)
      }
    }

    getProduto()
  }, [])

  const ordenarPorPreco = () => {
    setProduto(
      [...produto].sort((a, b) =>
        ordenadoPorPreco ? a.price * 1 - b.price * 1 : b.price * 1 - a.price * 1
      )
    )
    setOrdenadoPorPreco(!ordenadoPorPreco)
  }

  console.log(produto)
  return (
    <div className="tabela">
      <h3>Clique em preço para ordenar os produtos por preço</h3>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th onClick={ordenarPorPreco}>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produto.map(i => (
            <tr key={i.id}>
              <td>{i.title}</td>
              <td>{i.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
