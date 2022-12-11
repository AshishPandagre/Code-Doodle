import React, {useContext, useEffect, useRef, useState} from 'react'
import { getLanguage } from '../../../utils'
import { FileTreeContext } from './FileTreeContextProvider'
import { ReactComponent as FileIcon } from '../../../assets/file.svg'
import { ReactComponent as FolderIcon } from '../../../assets/folder_closed.svg'
import { useDispatch } from 'react-redux'
import { setActiveFileId, setActiveFolderId } from '../../../features/editorSlice'


const Input = ({ parent }) => {

  const input = useRef()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const { newElementType, createNewFile, createNewFolder } = useContext(FileTreeContext)

  function createNew(e) {
    e.preventDefault()
    let id = Math.floor(1000 + Math.random() * 9000).toString()
    if (newElementType === 'file') {
      createNewFile(id, name, getLanguage(name), parent)
      dispatch(setActiveFileId(id))
    }
    else {
      createNewFolder(id, name, parent)
      dispatch(setActiveFolderId(id))
    }
  }

  useEffect(() => {
    input.current.focus()
  }, [])

  return (
    <>
      {newElementType === 'file' ? <FileIcon className="mr-2 w-6 h-5" /> : <FolderIcon className="mr-2 w-6 h-5" />}
      <form
        onSubmit={createNew}
        className='w-full bg-[#1e1e1e] border-2 border-blue-500 text-gray-200 outline-none'
      >
        <input
          ref={input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full text-gray-200 outline-none bg-[#1e1e1e]'
        />
      </form>
    </>
  )
}

export default Input