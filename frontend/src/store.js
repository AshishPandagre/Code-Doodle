import { configureStore } from '@reduxjs/toolkit'
import fileTreeReducer from './features/fileTreeSlice'
import editorReducer from './features/editorSlice'
import testReducer from './features/testSlice'


export const store = configureStore({
  reducer: {
    fileTree: fileTreeReducer,
    editor: editorReducer,
    test: testReducer
  },
})

