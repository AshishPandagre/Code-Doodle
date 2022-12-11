import React, { useState } from 'react'

const Input = () => {
  const [projectName, setProjectName] = useState('My Project');

  const projectNameChange = (e) => {
    setProjectName(e.target.value)
  }

  return (
    <div>
      <input value={projectName} onChange={(e) => projectNameChange(e)} className='text-gray-300 bg-inherit text-center outline-none focus:ring-0 focus:bg-[#343434] hover:bg-[#343434] h-10' />
    </div>
  )
}

export default Input