import React from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import File from './File'
import { FileTreeContext } from './FileTreeContextProvider'
import Folder from './Folder'


const FileTreeStructure = (props) => {

  // will update this bad boy later 

  return (
    <div className="relative text-sm text-[#b0b0b0] bg-[#1e1e1e] h-full px-2">
      {
        props.elements.map(ele => {

          if (ele.type === "folder") {
            return <Folder
              key={ele.id}
              id={ele.id}
              name={ele.name}
              children={ele.children}
            />
          }

          else {
            return <File
              key={ele.id}
              id={ele.id}
              name={ele.name}
            />
          }

        })
      }
    </div>
  )
}

export default FileTreeStructure