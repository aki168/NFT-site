import React from 'react'

const MyButton = ({children}) => {
  return (
    <div className='text-right'>
      <button className='my-button'>{children}
        <div
          className='w-4 h-4 border-l-[16px] border-l-transparent border-b-[16px] border-b-primary
    absolute bottom-0 right-0 hover:border-b-black'>
        </div>
      </button>
    </div>
  )
}

export default MyButton