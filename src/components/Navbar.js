import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faAngleLeft, faWallet } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom'

const Navbar = () => {

  const [search, setSearch] = useState(false)
  const toggleSearch = () => {
    setSearch(prev => !prev)
  }



  return (
    <nav className='py-4 px-3 md:px-0 md:py-0 bg-silver-300'>
      {/* PC版本 */}
      <div className='hidden md:flex md:items-center md:justify-between border border-black'>
        <a href="/" className='pl-20 py-8 border-black'>
          <img src="images/logo.svg" alt="logo" />
        </a>
        <div className='flex items-center'>
          <input
            placeholder='搜尋作品名稱、藝術家名稱'
            className='bg-silver-300 border-l border-black py-10 px-3'
          />
          <FontAwesomeIcon
            onClick={toggleSearch}
            className='px-12 py-10 border-r border-black'
            icon={faMagnifyingGlass}
            fontSize={24}
            fontWeight={700}
          />
          <a href='/' className='border-r border-black font-bold py-10 px-12 hover:bg-silver-600 hover:text-white'>
            探索
          </a>
          <a href='/' className='border-r  border-black font-bold py-10 px-12 hover:bg-silver-600 hover:text-white'>
            市值
          </a>
          <a href='/' className=' border-black font-bold py-10 pl-12 pr-20  hover:bg-silver-600 hover:text-white'>
            <FontAwesomeIcon
              icon={faWallet}
              size={24}
            />
          </a>
        </div>
      </div>

      <div className='md:hidden lg:container mx-auto flex items-center justify-between'>
        {search ||
          <a href="/">
            <img src="images/logo.svg" alt="logo" />
          </a>
        }
        <div className='flex justify-between w-full'>
          <div className='flex'>
            <FontAwesomeIcon
              style={{ display: search ? "block" : "none" }}
              className='px-3 py-4'
              icon={faAngleLeft}
              fontSize={24}
              onClick={toggleSearch}
            />
            <input
              placeholder='搜尋作品名稱、藝術家名稱'
              className='bg-silver-300 px-3'
              style={{ display: search ? "block" : "none" }}
            />
          </div>
          <div>
            <FontAwesomeIcon
              onClick={toggleSearch}
              className='px-3 py-4'
              icon={faMagnifyingGlass}
              fontSize={24}
              fontWeight={700}
            />
            {search ||
              <FontAwesomeIcon
                className='px-3 py-4'
                icon={faBars}
                fontSize={24}
                fontWeight={700}
              />
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar