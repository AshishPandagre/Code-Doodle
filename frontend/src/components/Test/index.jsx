import React from 'react'
import Input from './Input'
import Output from './Output'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'

const index = () => {
  return (
    <ReflexContainer orientation='horizontal' className='min-w-0 overflow-auto h-full flex flex-1 flex-col text-white'>
      <ReflexElement flex={0.5} > <Input /></ReflexElement>
      <ReflexSplitter className='h-3 bg-[#252525] cursor-row-resize' />
      <ReflexElement flex={0.5} className="min-w-0"> <Output /></ReflexElement>
    </ReflexContainer>
  )
}

export default index