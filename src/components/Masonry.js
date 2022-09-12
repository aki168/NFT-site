import { useState } from 'react'
import { newWorks } from '../data/worksData'
import MyButton from '../components/MyButton'

const Masonry = ({ title, info, price, img }) => {

  const MasonryItem = ({ workNum, style }) => {


    const [more, setMore] = useState(false)

    return (
  

      <div className='mb-20 w-full relative'>
        <div className='relative mb-4'
          onMouseEnter={() => setMore(prev => !prev)}
          onMouseLeave={() => setMore(prev => !prev)}
        >
          <img
            src={`./images/${newWorks[workNum].img}`}
            alt="work"
            className={`aspect-${style} border-[24px] border-white mb-2`}
          />

          {more &&
            <div className='hidden lg:block bg-black/70 text-white h-full w-full p-4 absolute top-0 left-0'>
              <div className='border h-full p-4 flex flex-col justify-between'>
                <div>
                  <h3>{newWorks[workNum].info}</h3>
                  <div className='flex mt-2'>
                    <svg className='w-[10px] mr-2' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                    </svg>
                    <span>{newWorks[workNum].price}</span>
                  </div>
                </div>
                <MyButton>
                  <p className="text-black hover:text-white">MORE</p>
                </MyButton>
              </div>
            </div>
          }
        </div>
        <h3 className='text-black fs-noto font-bold lg:border-b lg:pb-3 border-black absolute bottom-[-45px]'>{newWorks[workNum].title}</h3>
      </div>


    )
  }



  return (
    <main>
      <div // 手機
        class="gap-6 columns-2xs lg:hidden"
      >
        <MasonryItem workNum='0' style='square' />
        <MasonryItem workNum='2' style='video' className='aspect-video'/> 
        <MasonryItem workNum='4' style='[3/4]' className='aspect-[3/4]' />

        <MasonryItem workNum='1' style='square' /> 
        <MasonryItem workNum='3' style='[3/4]' className='aspect-[3/4]'/>
        <MasonryItem workNum='5' style='video' />

      </div>

      <div // pc
        class="gap-6 columns-2xs hidden lg:block"
      >
        <MasonryItem workNum='0' style='square' />
        <MasonryItem workNum='4' style='video' />

        <MasonryItem workNum='1' style='[4/5]' className='aspect-[4/5]' />
        <MasonryItem workNum='5' style='square' />


        <MasonryItem workNum='2' style='square' />
        <MasonryItem workNum='6'style='[3/5]' className='aspect-[3/5]' />

        <MasonryItem workNum='3' style='video' />
        <MasonryItem workNum='7' style='square' />
      </div>
    </main>
  )
}

export default Masonry