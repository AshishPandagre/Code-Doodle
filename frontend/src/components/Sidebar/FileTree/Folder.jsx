import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveFolderId } from '../../../features/editorSlice'
import File from './File'
import Input from './Input'
import { FileTreeContext } from './FileTreeContextProvider'


const Folder = (props) => {

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const editor = useSelector(state => state.editor)
  const { enableInputAt } = useContext(FileTreeContext)

  useEffect(() => {
    if (enableInputAt === props.id || open) setOpen(true)
    else setOpen(false)
  }, [enableInputAt])

  const shouldHighlight = () => {
    if (editor.activeFolderId) return props.id === editor.activeFolderId
    return props.id === editor.activeFileId
  }

  const onClick = (e) => {
    e.preventDefault()
    console.log('clicked on ', props.id, open)
    dispatch(setActiveFolderId(props.id))
    setOpen(!open)
  }

  console.log('rendered', props.id, 'open ??', open)

  return (
    <details className="folder is-expandable" open={open}>

      <summary
        className={`folder-title hover:bg-[#2a2d2e]/50 ${shouldHighlight() ? 'bg-[#2a2d2a]' : 'opacity-80'}`}
        onClick={onClick}
      >
        {props.name}
      </summary>

      {open && enableInputAt === props.id &&
        <div className={`folder flex justify-start items-center relative my-1 ${enableInputAt === props.id ? '' : 'hidden'} `}>
          <Input parent={props.id} />
        </div>
      }

      {open &&
        props.children.map(ele => {

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

    </details>
  )
}

export default Folder
