import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  "0069": {
    type: "folder",
    name: "project_name",
    children: [
      "0000",
      "0005",
      "0006"
    ]
  },

  "0003": {
    type: "file",
    name: "sub2.js",
    language: "javascript",
    value: "console.log('helloo');",
    parent: "main2"
  },

  "0000": {
    type: "folder",
    name: "main",
    children: [
      "0001",
      "0002"
    ],
    parent: "0069"
  },

  "0001": {
    type: "folder",
    name: "main2",
    children: [
      "0003",
      "0004"
    ],
    parent: "0000"
  },

  "0002": {
    type: "file",
    name: "sub1.py",
    language: "python",
    value: "n = int(input()) \nfor i in range(n): \n\tprint(i)",
    parent: "0000"
  },

  "0004": {
    type: "file",
    name: "sub3.cpp",
    language: "cpp",
    value: "",
    parent: "0001"
  },

  "0005": {
    type: "file",
    name: "sub4.js",
    language: "javascript",
    value: "console.log('heyy 222');",
    parent: "0069"
  },

  "0006": {
    type: "folder",
    name: "another-folder",
    children: [],
    parent: "0069"
  }
}

export const fileTreeSlice = createSlice({
  name: 'fileTree',
  initialState,
  reducers: {

    addNewFile: (state, action) => {
      const {id, name, language, parent} = action.payload
      state[id] = {
        type: 'file',
        name,
        language,
        parent,
        value: ''
      }
      state[parent].children.push(id)
    },

    addNewFolder: (state, action) => {
      const {id, name, parent} = action.payload
      state[id] = {
        type: 'folder',
        name,
        parent,
        children: []
      }
      state[parent].children.push(id)
    },

    updateValue: (state, action) => {
      const {id, value} = action.payload
      state[id] = {
        ...state[id],
        value
      }
    }

  },
})

export const { addNewFile, addNewFolder, updateValue } = fileTreeSlice.actions

export default fileTreeSlice.reducer