import Editor from "@monaco-editor/react";

import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateValue } from "../../features/fileTreeSlice";

const Monaco = () => {

  const dispatch = useDispatch()
  const fileTree = useSelector(state => state.fileTree)
  const {activeFileId} = useSelector(state => state.editor)

  const valueChange = (new_value) => {
    dispatch(updateValue({
      id: activeFileId,
      value: new_value
    }))
  }

  function languageToMonacoCode(lang) {
    if(lang==='c++') return 'cpp'
    else if(lang==='c#') return 'csharp'
    else return lang
  }

  return (
    <Editor
      theme="vs-dark"
      language={languageToMonacoCode(fileTree[activeFileId].language)}
      value={fileTree[activeFileId].value}
      onChange={valueChange}
    />
  )
}

export default Monaco