import React from 'react'
import MasonryFind from '../components/MasonryFind'


const FindPage = () => {
  return (
    <div className='bg-silver-300 py-10'>
      <section className='md:container md:mx-auto pt-3 pb-20'>
        <MasonryFind/>
      </section>
      <div className='py-2 text-center fs-noto border-t border-black'>
        <p className='py-6 border-t-4 border-black'>
          © ART NFT. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default FindPage