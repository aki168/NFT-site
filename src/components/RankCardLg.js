import React from 'react'

const RankCardLg = ({ rank, maker, title, img, price }) => {

return (
    <div className='bg-white border border-black flex flex-col lg:w-[30%] md:w-full md:mb-4'>
    <a className='border-black '
        href='/'
        style={{
            backgroundImage: `url("./images/${img}")`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            // width: "415px",
            height:"380px",
            position:"relative"
        }}>
        <span style={{position:"absolute", top:"0", left:"0"}}
        className='border-r border-b border-black px-4 bg-white text-[32px] font-bold fs-num'>
            {rank}
        </span>
    </a>
    <div className='w-full'>
        <h4 className='px-2 py-4'>{title}</h4>
        <div className='flex justify-between p-2 border-t border-black'>
            <p>{maker}</p>
            <p className='flex'>
                <svg className='w-[10px] mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                </svg>
                {price}
            </p>
        </div>
    </div>
</div>
  )
}

export default RankCardLg