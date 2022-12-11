import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  'activeFileId': '0002',
  'activeFolderId': "0069",
  'allTabIds': ["0003", "0002", "0005"],
}

export const editorSlice =  createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setActiveFileId: (state, action) => {
      const tabId = action.payload
      if(!state.allTabIds.includes(tabId)) state.allTabIds.push(tabId)
      state.activeFileId = action.payload
      state.activeFolderId = undefined
    },

    setActiveFolderId: (state, action) => {
      state.activeFolderId = action.payload
    },
    
    removeTabId: (state, action) => {
      state.allTabIds.splice(state.allTabIds.indexOf(action.payload), 1)
    },
    
    // addTabId: (state, action) => {
    //   const newTabId = action.payload
    //   if(state.allTabIds.includes(newTabId)) {

    //   }
    // }
  }
})

export const {setActiveFileId, setActiveFolderId, removeTabId} = editorSlice.actions

export default editorSlice.reducer
