import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
      
      state.count += 1
    },
    decrement: (state,action) => {
      state.count -= 1
    },
    reset:(state,action)=>{
        state.count=0
    }
  
  },
})

export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer