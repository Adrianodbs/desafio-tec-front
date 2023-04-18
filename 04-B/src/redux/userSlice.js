import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    nome: '',
    sobrenome: '',
    idade: '',
    email: '',
    profissao: ''
  },
  reducers: {
    changeNome(state, { payload }) {
      return { ...state, nome: payload }
    },
    changeSobrenome(state, { payload }) {
      return { ...state, sobrenome: payload }
    },
    changeIdade(state, { payload }) {
      return { ...state, idade: payload }
    },
    changeEmail(state, { payload }) {
      return { ...state, email: payload }
    },
    changeProfissao(state, { payload }) {
      return { ...state, profissao: payload }
    }
  }
})

export const {
  changeNome,
  changeSobrenome,
  changeIdade,
  changeEmail,
  changeProfissao
} = userSlice.actions

export const selectUser = state => state.user

export default userSlice.reducer
