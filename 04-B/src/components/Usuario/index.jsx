import './style.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'

function Usuario() {
  const { nome, sobrenome, idade, email, profissao } = useSelector(selectUser)
  return (
    <div className="usuario">
      <div>
        <strong>Nome:</strong> {nome}
      </div>
      <div>
        <strong>Sobrenome:</strong> {sobrenome}
      </div>
      <div>
        <strong>Idade:</strong> {idade}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Profissão:</strong> {profissao}
      </div>
    </div>
  )
}

export default Usuario
