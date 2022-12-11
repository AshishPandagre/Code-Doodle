import React from 'react'
import { useSelector } from 'react-redux'

const Output = () => {

  const {output} = useSelector(state => state.test)

  return (
    <div className='bg-[#1e1e1e] h-full flex p-2 flex-col min-w-0'>
      <h1 className='select-none min-w-0'>Output :</h1>
      <div className='py-4 p-2 h-full w-full min-w-0'>
        <pre className='min-w-0'>{output.output}</pre>
      </div>
    </div>
  )
}

export default Output
