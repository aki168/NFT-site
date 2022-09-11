import { useState } from 'react'

const RankCard = ({ rank, maker, title, img, price }) => {

    const [more, setMore] = useState(false)


    return (
        <div className='bg-white border border-black flex '>
            <div className='my-auto px-2 '>{rank}</div>
            <a className='border-x border-black'
                href='/'
                onMouseEnter={() => setMore(prev => !prev)}
                onMouseLeave={() => setMore(prev => !prev)}
                style={{
                    backgroundImage: `url("./images/${img}")`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "87px"
                }}>
                {more &&
                    <p className='bg-black text-white opacity-70 py-[37px] text-center'>MORE</p>
                }
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

export default RankCard