import { configureStore } from '@reduxjs/toolkit'
import generatorReducer from './features/generator/slice'
import interactionsReducer from './features/interactions/slice'

export const store = configureStore({
  reducer: {
    generator: generatorReducer,
    interactions: interactionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
