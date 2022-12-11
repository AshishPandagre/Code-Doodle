import React, { useContext } from 'react'
import { ReactComponent as ThreeDots } from '../../../assets/three_dots.svg'
import { ReactComponent as AddFolder } from '../../../assets/add_folder.svg'
import { ReactComponent as AddFile } from '../../../assets/add_file.svg'
import { useSelector } from 'react-redux'

import { FileTreeContext } from './FileTreeContextProvider'


const Heading = () => {

  const { setNewElementType, setEnableInputAt, enableInputAt } = useContext(FileTreeContext)

  const { activeFileId, activeFolderId } = useSelector(state => state.editor)
  const fileTree = useSelector(state => state.fileTree)

  const toggleInput = (type) => {
    if (enableInputAt) setEnableInputAt(undefined)
    else {
      setNewElementType(type)
      if (activeFolderId) setEnableInputAt(activeFolderId)
      else setEnableInputAt(fileTree[activeFileId].parent)
    }
  }

  return (
    <div className='flex w-full justify-between h-fit items-center px-2 py-1 border-b border-[#343434]'>
      <div className='flex flex-grow font-semibold'>CODE</div>
      <div className='flex space-x-2 items-center'>
        <AddFile className="h-4 w-4 hover:cursor-pointer" onClick={() => toggleInput('file')} />
        <AddFolder className="h-5 w-5 hover:cursor-pointer" onClick={() => toggleInput('folder')} />
        <ThreeDots className="h-4 w-4 hover:cursor-pointer" />
      </div>
    </div>
  )
}


export default Heading