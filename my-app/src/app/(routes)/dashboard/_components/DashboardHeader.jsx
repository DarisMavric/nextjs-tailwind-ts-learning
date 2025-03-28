import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='p-5 shadow-sm border-bottom flex justify-between items-center'>
        <div>
            Search Bar
        </div>
        <div>
            <UserButton/>
        </div>
    </div>
  )
}

export default DashboardHeader