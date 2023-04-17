import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  color: 'purple'
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_COLOR':
      return { color: action.payload }
    default:
      return state
  }
}

const store = configureStore({
  reducer: rootReducer
})

export default store
