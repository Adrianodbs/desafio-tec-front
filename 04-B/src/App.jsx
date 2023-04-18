import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  changeNome,
  changeSobrenome,
  changeIdade,
  changeEmail,
  changeProfissao
} from './redux/userSlice'
import Usuario from './components/Usuario'
import './style.css'

function App() {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')
  const [profissao, setProfissao] = useState('')

  const dispatch = useDispatch()

  function cadastrarUsuario(e) {
    e.preventDefault()

    dispatch(changeNome(nome))
    dispatch(changeSobrenome(sobrenome))
    dispatch(changeIdade(idade))
    dispatch(changeEmail(email))
    dispatch(changeProfissao(profissao))

    setNome('')
    setSobrenome('')
    setIdade('')
    setEmail('')
    setProfissao('')
  }

  return (
    <div className="app">
      <h1>Cadastre um usuário</h1>

      <form onSubmit={cadastrarUsuario} className="form">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={e => setSobrenome(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={e => setIdade(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Profissão"
          value={profissao}
          onChange={e => setProfissao(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Usuario />
    </div>
  )
}

export default App
