import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleTab from './SingleTab'
import { setActiveFileId, removeTabId } from '../../features/editorSlice'


const FileTab = () => {

  const dispatch = useDispatch()

  const editor = useSelector(state => state.editor)
  const fileTree = useSelector(state => state.fileTree)

  // code for scrolling to a newly added tabState, or selected file (file selected from filetree)
  const tabsPanel = useRef()
  useEffect(() => {
    const targetNode = tabsPanel.current
    const config = { attributes: true, childList: true, subtree: true }

    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) mutation.addedNodes[0].scrollIntoView();
        else if (mutation.type === 'attributes' && !mutation.target.classList.contains('opacity-50')) mutation.target.scrollIntoView()
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }, [])
  // code ends

  function shouldHighlight(tabId) {
    return editor.activeFileId === tabId
  }

  function onTabClose(tabId) {
    const currTabIdx = editor.allTabIds.indexOf(tabId)
    if (editor.activeFileId === tabId) {
      const prev = editor.allTabIds[currTabIdx - 1]
      const next = editor.allTabIds[currTabIdx + 1]
      if (next) dispatch(setActiveFileId(next))
      else if (prev) dispatch(setActiveFileId(prev))
    }
    dispatch(removeTabId(tabId))
  }

  function onTabClick(tabId) {
    dispatch(setActiveFileId(tabId))
  }

  return (
    <div ref={tabsPanel} className='flex text-white pt-1 bg-[#252525] select-none overflow-auto'>
      {
        editor.allTabIds.map(tabId =>
          <SingleTab
            key={tabId}
            tabId={tabId}
            name={fileTree[tabId].name}
            shouldHighlight={shouldHighlight}
            onTabClose={onTabClose}
            onTabClick={onTabClick}
          />
        )
      }
    </div>
  )
}

export default FileTab