import React from 'react'
import {ReactComponent as FilesIcon} from '../../assets/files.svg'
import {ReactComponent as FindIcon} from '../../assets/find.svg'
import {ReactComponent as PeopleIcon} from '../../assets/people.svg'
import {ReactComponent as GearIcon} from '../../assets/gear.svg'
import {ReactComponent as GithubIcon} from '../../assets/github.svg'


const ActivityBar = () => {
  return (
    <div className='select-none sticky flex w-16 flex-col align-between h-full justify-between border-r border-[#343434] flex-shrink-0'>
      <div>
        <div className='border-l-2 px-4 py-3 hover:cursor-pointer'><FilesIcon className="h-6 w-6"/></div>
        <div className='px-4 py-3 hover:cursor-pointer'><FindIcon className="h-6 w-6" fill="#929292"/></div>
        <div className='px-4 py-3 hover:cursor-pointer'><PeopleIcon className="h-6 w-6" fill="#929292"/></div>
        <div className='px-4 py-3 hover:cursor-pointer'><GearIcon className="h-6 w-6" fill="#929292"/></div>
      </div>
      <div>
        <div className='px-4 py-3 hover:cursor-pointer'><GithubIcon className="h-6 w-6" fill="#929292"/></div>
      </div>
    </div>
  )
}

export default ActivityBar