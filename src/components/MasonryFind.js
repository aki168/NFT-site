import { useState } from 'react'
import { findWorks } from '../data/worksData'
import MyButton from '../components/MyButton'

const MasonryFind = ({ title, info, price, img }) => {

  const MasonryItemFind = ({ workNum, styling }) => {

    const [more, setMore] = useState(false)

    return (
      <div className='mb-20 w-full relative'>
        <div className='relative mb-4'
          onMouseEnter={() => setMore(prev => !prev)}
          onMouseLeave={() => setMore(prev => !prev)}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/${findWorks[workNum].img}`}
            alt="work"
            className={`aspect-${styling} border-[24px] border-white mb-2`}
          />

          {more &&
            <div className='hidden lg:block bg-black/70 text-white h-full w-full p-4 absolute top-0 left-0'>
              <div className='border h-full p-4 flex flex-col justify-between'>
                <div>
                  <h3>{findWorks[workNum].info}</h3>
                  <div className='flex mt-2'>
                    <svg className='w-[10px] mr-2' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                    </svg>
                    <span>{findWorks[workNum].price}</span>
                  </div>
                </div>
                <MyButton>
                  <p className="text-black hover:text-white">MORE</p>
                </MyButton>
              </div>
            </div>
          }
        </div>
        <h3 className='text-black fs-noto font-bold lg:border-b lg:pb-2 border-black absolute bottom-[-33px]'>{findWorks[workNum].title}</h3>
      </div>

    )
  }


  return (
    <main>

      <div // 手機
        class="gap-6 columns-2 lg:hidden"
      >
        <MasonryItemFind workNum='0' styling='square' />
        <MasonryItemFind workNum='6' styling='[4/3]' className='aspect-[4/3]'/> 
        <MasonryItemFind workNum='1' styling='[3/4]' className='aspect-[3/4]'/>
        <MasonryItemFind workNum='7' styling='square' />
        <MasonryItemFind workNum='2' styling='[4/5]' className='aspect-[4/5]' />
        <MasonryItemFind workNum='8' styling='[4/5]' className='aspect-[4/5]' />

        <MasonryItemFind workNum='3' styling='square' /> 
        <MasonryItemFind workNum='9' styling='[2/3]' className='aspect-[2/3]' />
        <MasonryItemFind workNum='4' styling='auto' />
        <MasonryItemFind workNum='10' styling='[3/4]' className='aspect-[3/4]'/>
        <MasonryItemFind workNum='5' styling='auto' />
        <MasonryItemFind workNum='11' styling='auto' />
      </div>

      <div // PC
        class="gap-6 columns-4 hidden lg:block"
      >
        <MasonryItemFind workNum='0' styling='square' />
        <MasonryItemFind workNum='1' styling='auto' /> 
        <MasonryItemFind workNum='2' styling='auto' />

        <MasonryItemFind workNum='3' styling='[5/6]' className='aspect-[5/6]' /> 
        <MasonryItemFind workNum='4' styling='square' />
        <MasonryItemFind workNum='5' styling='square' />

        <MasonryItemFind workNum='6' styling='square' className='aspect-square' />
        <MasonryItemFind workNum='7' styling='square' className='aspect-square' />
        <MasonryItemFind workNum='8' styling='auto' className='aspect-auto'/>

        <MasonryItemFind workNum='9' styling='auto' />
        <MasonryItemFind workNum='10' styling='square' />
        <MasonryItemFind workNum='11' styling='auto' />
      </div>

    </main>
  )
}

export default MasonryFind