import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  "input": "",
  "output": ""
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {

    setInput: (state, action) => {
      state.input = action.payload
    },

    setOutput: (state, action) => {
      state.output = action.payload
    }

  }
})

export const {setInput, setOutput} = testSlice.actions

export default testSlice.reducer
