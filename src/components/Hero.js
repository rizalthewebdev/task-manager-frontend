import React from 'react'
import Input from './Input'

const Hero = () => {
  return (
    <div className='w-full md:max-w-screen-sm text-center flex flex-col items-center justify-center gap-y-6 py-10 rounded-md'>
        <h3 className='task-manager-head md:text-5xl text-4xl text-gray-900'>Task Manager</h3>
        <Input/>
    </div>
  )
}

export default Hero