import React from 'react'
import { artists } from '../data/worksData'
import MyButton from './MyButton'

const MySlider = () => {

  const aTagHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='filter grayscale hidden md:block'
          style={{
            backgroundImage: `url("./images/${artists[0].img}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "305px",
            height: "260px"
          }}
        >
        </div>

        <div className='mx-auto'>
          <div style={{
            backgroundImage: `url("./images/${artists[1].img}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
            className="p-6 flex flex-col justify-between h-[232px] md:w-[635px] md:h-[440px]"
          >
            <p className='text-white md:text-[80px] text-[32px] md:w-[250px] w-full'>
              {artists[1].name}
            </p>
            <div className='flex md:justify-between md:items-end justify-end'>
              <div className='bg-white/80 p-6 w-[305px] hidden md:block'>
                <p>{artists[1].info}</p>
              </div>
              <MyButton>MORE</MyButton>
            </div>
          </div>
          <div className='bg-white/80 p-6 mt-4 md:hidden'>
            <p>{artists[1].info}</p>
          </div>
        </div>

        <div className='filter grayscale hidden md:block'
          style={{
            backgroundImage: `url("./images/${artists[2].img}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "305px",
            height: "260px"
          }}
        >
        </div>
      </div>

      <div className='p-12 flex gap-2 justify-center'>
        <a href="!#" onClick={aTagHandler} className='w-[8px] h-[8px] bg-black hover:bg-silver-500'></a>
        <a href="!#" onClick={aTagHandler} className='w-[16px] h-[8px] bg-primary hover:bg-silver-500'></a>
        <a href="!#" onClick={aTagHandler} className='w-[8px] h-[8px] bg-black hover:bg-silver-500'></a>
        <a href="!#" onClick={aTagHandler} className='w-[8px] h-[8px] bg-black hover:bg-silver-500'></a>
      </div>

    </>
  )
}

export default MySlider