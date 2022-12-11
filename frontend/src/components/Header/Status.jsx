import React from 'react'
import {ReactComponent as Saved} from '../../assets/saved.svg'


const Status = () => {
  return (
    <div className='flex space-x-2 items-center justify-center'>
      <Saved className="h-5 w-5" />
      <p>Saved</p>
    </div>
  )
}

export default Status