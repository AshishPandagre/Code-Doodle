import React, { useState, useEffect, createContext } from 'react'
import { useDispatch } from 'react-redux';
import { addNewFile, addNewFolder } from '../../../features/fileTreeSlice';

export const FileTreeContext = createContext();

const FileTreeContextProvider = (props) => {

  const dispatch = useDispatch()
  const [enableInputAt, setEnableInputAt] = useState()
  const [newElementType, setNewElementType] = useState('')

  function createNewFile(id, name, language, parent) {
    dispatch(addNewFile({
      id, name, language, parent
    }))
    setEnableInputAt(undefined)
  }

  function createNewFolder(id, name, parent) {
    dispatch(addNewFolder({
      id, name, parent
    }))
    setEnableInputAt(undefined)
  }

  return (
    <FileTreeContext.Provider value={{
      enableInputAt,
      newElementType,
      setEnableInputAt,
      setNewElementType,
      createNewFile,
      createNewFolder
    }}>

      {props.children}
    
    </FileTreeContext.Provider>
  )
}

export default FileTreeContextProvider