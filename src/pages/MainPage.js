import React from 'react'
import MyButton from '../components/MyButton'
import RecommendCard from '../components/RecommendCard'
import { recommend, rank } from '../data/worksData'
import VerticalTitle from '../components/VerticalTitle'
import MainTitle from '../components/MainTitle'
import RankCard from '../components/RankCard'
import RankCardLg from '../components/RankCardLg'
import MySlider from '../components/MySlider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons, faPenRuler, faTags, faWallet } from '@fortawesome/free-solid-svg-icons'
import Masonry from '../components/Masonry'

const MainPage = () => {

  const rankTopThree = rank.slice(0, 3);
  const rankOthers = rank.slice(3, 6);

  return (

    <div className='bg-silver-300'>


      <section className='md:container md:mx-auto py-20 '>
        <div className='hidden md:flex border border-black bg-white'>
          <VerticalTitle />
          <img src={`${process.env.PUBLIC_URL}/images/${recommend[0].img}`} alt="works" className='w-[50%] border-r border-black' />
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
            <img src={`${process.env.PUBLIC_URL}/images/${recommend[1].img}`} alt="works"
              className='w-[50%] object-cover' />
          </div>

          <div className='hidden md:flex md:w-1/2 border-r border-b border-black bg-white'>
            <article className='px-6 my-auto '>
              <h3 className='text-[18px] font-bold pb-2'>{recommend[2].maker}</h3>
              <h2 className='text-[24px] font-bold pb-6 md:text-[32px]'>{recommend[2].title}</h2>
              <p className='pb-6'>{recommend[2].info}</p>
              <MyButton>MORE</MyButton>
            </article>
            <img src={`${process.env.PUBLIC_URL}/images/${recommend[2].img}`} alt="works"
              className='w-[50%] object-cover' />
          </div>

        </div>
        {recommend.map((item, index) => <RecommendCard {...item} key={index} />)}
      </section>

      {/* ---------------- */}
      <section className='md:container md:mx-auto px-3 mb-[80px]'>
        <MainTitle en='Ranking' cn='???????????????' />
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
            <div className='lg:w-[30%]'>
              <RankCard {...item} key={index} />
            </div>
          ))}
        </div>
      </section >


      {/* ---------------- */}
      <section className='md:container md:mx-auto px-3'>
        <MainTitle en='Artist' cn='???????????????' />
        <MySlider />
      </section >

      {/* ---------------- */}
      <section className='md:container md:mx-auto px-3'>
        <MainTitle en='Artwork' cn='???????????????' />
        <Masonry/>
      </section >

      {/* ---------------- */}
      <section className='md:container md:mx-auto px-3 mt-5'>
        <h2 className='text-[48px] text-center'>Join Us</h2>
        <p className='text-[20px] font-bold text-center pb-10'>??????????????????????????????</p>
      </section >

      <div className='border-y-2 border-black py-1'>
        <div className='border-y border-black'>
          <section className='md:container md:mx-auto px-3 py-10'>
            <ul className='md:flex'>
              <li className='md:w-1/4 text-center w-full mb-10 md:mb-0'>
                <FontAwesomeIcon
                  icon={faWallet}
                  className="text-primary mb-2 hover:text-silver-500"
                  fontSize={46}
                />
                <h5 className='mb-6 font-bold text-lg'>??????????????????</h5>
                <p>
                  ??????????????????????????????<br />
                  ??????????????????????????????????????????
                </p>
              </li>
              <li className='md:w-1/4 text-center w-full mb-10 md:mb-0'>
                <FontAwesomeIcon
                  icon={faPenRuler}
                  className="text-primary mb-2 hover:text-silver-500"
                  fontSize={46}
                />
                <h5 className='mb-6 font-bold text-lg'>??????????????????</h5>
                <p>
                  ???????????????????????????????????????<br />
                  ??????????????????
                </p>
              </li>
              <li className='md:w-1/4 text-center w-full mb-10 md:mb-0'>
                <FontAwesomeIcon
                  icon={faIcons}
                  className="text-primary mb-2 hover:text-silver-500"
                  fontSize={46}
                />
                <h5 className='mb-6 font-bold text-lg'>???????????? NFT</h5>
                <p>
                  ??????????????????<br />
                  ?????????????????????
                </p>
              </li>
              <li className='md:w-1/4 text-center w-full '>
                <FontAwesomeIcon
                  icon={faTags}
                  className="text-primary mb-2 hover:text-silver-500"
                  fontSize={46}
                />
                <h5 className='mb-6 font-bold text-lg'>??????????????????</h5>
                <p>
                  ???????????? NFT ?????????<br />
                  ?????????????????????????????????
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className='py-6 text-center fs-noto'>
        ?? ART NFT. All Rights Reserved
      </div>


    </div >
  )
}

export default MainPage