import React, { useEffect, useRef } from 'react'
import FileTree from './FileTree'
import ActivityBar from './ActivityBar'

const Sidebar = () => {

  return (
    <div className='h-full flex text-white' id='sidebar'>
      <ActivityBar />
      <FileTree />
    </div>
  )
}

export default Sidebar