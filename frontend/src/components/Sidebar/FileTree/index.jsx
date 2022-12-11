import React, { useEffect, useRef, useState } from 'react'
import Heading from './Heading'
import { useSelector } from 'react-redux'
import FileTreeStructure from './FileTreeStructure'
import { getTree } from './utils'
import FileTreeContextProvider from './FileTreeContextProvider'


const FileTree = () => {

  const fileTree = useSelector(state => state.fileTree)
  const [elements, setElements] = useState([])


  useEffect(() => {
    setElements(getTree(fileTree))
  }, [fileTree])


  return (
    <div className='flex flex-col flex-grow h-full min-w-0 p-1 overflow-auto select-none'>

      <FileTreeContextProvider>
        <Heading />
        <FileTreeStructure
          elements={elements}
        />
      </FileTreeContextProvider>

    </div>
  )
}

export default FileTree
