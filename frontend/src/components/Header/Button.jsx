import React from 'react'

const Button = ({text, icon, onClick}) => {
  return (
    <button className='flex space-x-2 items-center justify-center border-2 border-gray-400 hover:bg-[#343434] hover:text-white hover:outline  hover:outline-gray-600 rounded-md px-4 py-2' onClick={onClick}>
      <img src={icon} className="h-6 w-6" />
      <p>{text}</p>
    </button>
  )
}

export default Button