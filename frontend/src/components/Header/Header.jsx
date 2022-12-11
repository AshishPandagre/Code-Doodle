import React, { useState } from 'react'
import share from '../../assets/share.svg'
import run from '../../assets/run.svg'
import Button from './Button'
import Status from './Status'
import Input from './Input'
import { useDispatch, useSelector } from 'react-redux'
import { setOutput } from '../../features/TestSlice'


const Header = () => {

  const dispatch = useDispatch()

  const { activeFileId } = useSelector(state => state.editor)
  const fileTree = useSelector(state => state.fileTree)
  const {input} = useSelector(state => state.test)

  const runCode = () => {
    fetch('http://localhost:8000/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "script": fileTree[activeFileId].value,
        "language": fileTree[activeFileId].language,
        "stdin": input
      })
    })
      .then(res => res.json())
      .then(data => dispatch(setOutput(data)))
  }

  return (
    <div className='flex flex-none justify-between items-center px-4 py-1 text-gray-300 text-lg bg-[#252525] border-b border-[#343434]'>

      <Status />
      <Input />

      <div className='flex space-x-4'>
        <Button text="Share" icon={share} />
        <Button text="Run code" icon={run} onClick={runCode} />
      </div>
    </div>
  )
}

export default Header