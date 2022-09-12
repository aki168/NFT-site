import React from 'react'
import MyButton from './MyButton'

const RecommendCard = ({maker, title, info, img}) => {
  return (
    <>
    <div className='pb-8 border-y border-y-black md:hidden bg-white' >
      <div className='pb-8 md:w-2/3 md:pb-0'>
        <img src={`${process.env.PUBLIC_URL}/images/${img}`} alt="works" className='object-contain'/>
      </div>
      <article className='pb-8 px-3 '>
        <h3 className='text-[18px] font-bold pb-2'>{maker}</h3>
        <h2 className='text-[24px] font-bold pb-6 md:text-[48px]'>{title}</h2>
        <p className='pb-6'>{info}</p>
      <MyButton>MORE</MyButton>
      </article>
    </div>
    </>
  )
}

export default RecommendCard