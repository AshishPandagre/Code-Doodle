import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInput } from '../../features/TestSlice'

const Input = () => {

  const dispatch = useDispatch()

  return (
    <div className='bg-[#1e1e1e] h-full flex my-4 p-2 flex-col'>
      <h1 className='select-none'>Input :</h1>
      <div className='py-4 p-2 h-full w-full'>
        <textarea
          className='h-full w-full resize-none outline-none bg-[#1e1e1e]'
          onChange={(e) => dispatch(setInput(e.target.value))}
        ></textarea>
      </div>
    </div>
  )
}

export default Input