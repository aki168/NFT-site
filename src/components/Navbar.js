import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faAngleLeft, faWallet } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [search, setSearch] = useState(false)
  const toggleSearch = () => {
    setSearch(prev => !prev)
  }

  
  const aTagHandler = (e) => {
    e.preventDefault()
  }

  return (
    <nav className='py-4 px-3 md:px-0 md:py-0 bg-silver-300'>
      {/* PC版本 */}
      <div className='hidden md:flex md:items-center md:justify-between border border-black'>
        <NavLink to="/" className='pl-20 py-8 border-black'>
          <img src="images/logo.svg" alt="logo" />
        </NavLink>
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
          <NavLink NavLink to='/finding' className='border-r border-black font-bold py-10 px-12 hover:bg-silver-600 hover:text-white'>
            探索
          </NavLink>
          <NavLink to='/' onClick={aTagHandler} className='border-r  border-black font-bold py-10 px-12 hover:bg-silver-600 hover:text-white'>
            市值
          </NavLink>
          <NavLink to='/' onClick={aTagHandler} className=' border-black font-bold py-10 pl-12 pr-20  hover:bg-silver-600 hover:text-white'>
            <FontAwesomeIcon
              icon={faWallet}
              fontSize={24}
            />
          </NavLink>
        </div>
      </div>

      <div className='md:hidden lg:container mx-auto flex items-center justify-between'>
        {search ||
          <NavLink to="/" onClick={aTagHandler}>
            <img src="images/logo.svg" alt="logo" />
          </NavLink>
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