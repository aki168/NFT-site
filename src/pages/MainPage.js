import React from 'react'
import MyButton from '../components/MyButton'
import RecommendCard from '../components/RecommendCard'
import { recommend, rank, newWorks, artists } from '../data/worksData'
import VerticalTitle from '../components/VerticalTitle'
import MainTitle from '../components/MainTitle'
import RankCard from '../components/RankCard'
import RankCardLg from '../components/RankCardLg'
import MySlider from '../components/MySlider'

const MainPage = () => {

  const rankTopThree = rank.slice(0, 3);
  const rankOthers = rank.slice(3, 6);

  return (

    <div className='bg-silver-300'>


      <section className='md:container md:mx-auto py-20 '>
        <div className='hidden md:flex border border-black bg-white'>
          <VerticalTitle />
          <img src={`images/${recommend[0].img}`} alt="works" className='w-[50%] border-r border-black' />
          <article className='pb-8 px-3 my-auto '>
            <h3 className='text-[18px] font-bold pb-2'>{recommend[0].maker}</h3>
            <h2 className='text-[24px] font-bold pb-6 md:text-[48px]'>{recommend[0].title}</h2>
            <p className='pb-6'>{recommend[0].info}</p>
            <MyButton>MORE</MyButton>
          </article>
        </div>

        <div className='hidden md:flex'>

          <div className='hidden md:flex md:w-1/2 border-x border-b border-black bg-white'>
            <article className='px-6 my-auto'>
              <h3 className='text-[18px] font-bold pb-2'>{recommend[1].maker}</h3>
              <h2 className='text-[24px] font-bold pb-6 md:text-[32px]'>{recommend[1].title}</h2>
              <p className='pb-6'>{recommend[1].info}</p>
              <MyButton>MORE</MyButton>
            </article>
            <img src={`images/${recommend[1].img}`} alt="works"
              className='w-[50%] object-cover' />
          </div>

          <div className='hidden md:flex md:w-1/2 border-r border-b border-black bg-white'>
            <article className='px-6 my-auto '>
              <h3 className='text-[18px] font-bold pb-2'>{recommend[2].maker}</h3>
              <h2 className='text-[24px] font-bold pb-6 md:text-[32px]'>{recommend[2].title}</h2>
              <p className='pb-6'>{recommend[2].info}</p>
              <MyButton>MORE</MyButton>
            </article>
            <img src={`images/${recommend[2].img}`} alt="works"
              className='w-[50%] object-cover' />
          </div>

        </div>
        {recommend.map((item, index) => <RecommendCard {...item} key={index} />)}
      </section>

      <section className='md:container md:mx-auto px-3 mb-[80px]'>
        <MainTitle en='Ranking' cn='市價排行榜' />
        <div className='flex flex-col gap-4 md:hidden'>
          {rank.map((item, index) => (
            <RankCard {...item} key={index} />
          ))}
        </div>
        <div className='hidden md:flex flex-wrap md:justify-between mb-6'>
          {rankTopThree.map((item, index) => (
            <RankCardLg {...item} key={index} />
          ))}
        </div>
        <div className='hidden md:flex md:justify-between'>
          {rankOthers.map((item, index) => (
            <div style={{ width: "415px" }}>
              <RankCard {...item} key={index} />
            </div>
          ))}
        </div>
      </section >

      <section className='md:container md:mx-auto px-3'>
        <MainTitle en='Artist' cn='熱門藝術家' />
        <MySlider />
      </section >

      <section className='md:container md:mx-auto px-3'>
        <MainTitle en='Artwork' cn='最新藝術品' />
        
      </section >

    </div >
  )
}

export default MainPage