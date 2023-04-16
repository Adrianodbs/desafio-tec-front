import { useState } from 'react'
import apiData from './service/api'
import './style.css'

function App() {
  const [dados, setDados] = useState([])
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await apiData.post('', { nome, idade, email })
      setDados([...dados, response.data])
      setNome('')
      setIdade('')
      setEmail('')
      alert('Dados enviados com sucesso!')
    } catch (error) {
      alert('Ocorreu um erro ao enviar os dados.')
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Qual o nome?"
          value={nome}
          onChange={event => setNome(event.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Qual a idade?"
          value={idade}
          onChange={event => setIdade(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Qual o e-mail?"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>
      <div>
        {dados.map((item, index) => (
          <div key={index} className="content">
            <p>
              <strong>Nome:</strong> {item.nome}
            </p>
            <p>
              <strong>Idade:</strong> {item.idade}
            </p>
            <p>
              <strong>Email:</strong> {item.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
