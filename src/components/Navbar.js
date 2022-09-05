import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom'

const Navbar = () => {

  const [search, setSearch] = useState(false)
  const toggleSearch = () => {
    setSearch(prev => !prev)
  }

  

  return (
    <nav className='py-4 px-3 bg-silver-300'>
      <div className='lg:container mx-auto flex items-center justify-between'>
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