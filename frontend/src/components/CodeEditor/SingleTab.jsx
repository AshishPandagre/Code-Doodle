import React, { useCallback, useContext, useMemo } from 'react'
import { ReactComponent as Close } from '../../assets/close.svg'
import { getIcon } from '../../utils';


const SingleTab = ({ shouldHighlight, name, tabId, onTabClose, onTabClick }) => {

  function closeTab(e) {
    e.stopPropagation()
    onTabClose(tabId)
  }

  return (
    <div className={`flex bg-[#1e1e1e] px-5 py-2 space-x-8 items-center justify-between hover:cursor-pointer ${shouldHighlight(tabId) ? '' : 'opacity-60'}`} onClick={() => onTabClick(tabId)}>
      <div className='flex items-center space-x-2'>
        <div className="w-4 h-4"><img src={getIcon(name)} /></div>
        <div>{name}</div>
      </div>
      <div><Close className='w-4 h-4' onClick={closeTab} /></div>
    </div>
  )
}

export default SingleTab
