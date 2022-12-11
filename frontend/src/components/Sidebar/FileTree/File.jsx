import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveFileId } from '../../../features/editorSlice'
import { getIcon } from '../../../utils';


const File = (props) => {

  const dispatch = useDispatch()
  const editor = useSelector(state => state.editor)

  const shouldHighlight = () => {
    if (editor.activeFolderId) return props.id === editor.activeFolderId
    return props.id === editor.activeFileId
  }

  console.log('rendered', props.id)

  return (
    <summary
      className={`folder-title flex items-center hover:bg-[#2a2d2e]/50 ${shouldHighlight() ? ' bg-[#2a2d2a]' : 'opacity-80'}`}
      onClick={() => dispatch(setActiveFileId(props.id))}
    >
      <div className="w-5 h-full mr-2 flex items-center"><img src={getIcon(props.name)} /></div>
      <span>{props.name}</span>
    </summary>
  )

}

export default File
