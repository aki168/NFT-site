import React from 'react'


const MainTitle = ({ en, cn }) => {
  return (
    <div className='flex items-end border-b border-black justify-between mb-6'>
      <div className='flex items-center pb-4'>
        <h2 className='pr-4 text-[48px]'>{en}</h2>
        <p className='text-[20px] font-bold'>{cn}</p>
      </div>
      <div className='text-right'>
        <button className='my-button-nb'>MORE
          <div
            className='w-4 h-4 border-l-[16px] border-l-transparent border-b-[16px] border-b-primary
    absolute bottom-0 right-0 hover:border-b-black'>
          </div>
        </button>
      </div>
    </div>
  )
}

export default MainTitle