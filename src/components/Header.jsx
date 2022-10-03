import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../images/VectorCart.png'
import Login from '../images/VectorLogin.png'
import Bookmark from '../images/VectorLoveBookmark.png'
import Search from '../images/VectorSearch.png'
import "../styles/header.css"

const Header = () => {
  const brandName = "AccioJob"
  const icons = [
    {
      src: Login,
      alt: 'Login',
      label: 'Login/Regester'
    },
    {
      src: Search,
      alt: 'Search',
      label: ''
    },
    {
      src: Cart,
      alt: 'Cart',
      label: '1'
    },
    {
      src: Bookmark,
      alt: 'Bookmark',
      label: '1'
    }
  ]
  const Iconlinks = icons.map((icon, index) => (
      <li>
          <button>
          <Link id={index}>
            <img src={icon.src} alt={icon.alt}/>
            <h6>{icon.label}</h6>
            </Link>
          </button>
      </li>
  ))

  return (
    <header>
      <nav>
        <div className='div1'><Link to="/">AccioJob</Link></div>
        <div className='div2'>
          <div>
            <ul className='div22menu'>
              <li><Link to="/home"><h5>Home</h5></Link></li>
              <li>
                <Link><h5>Shope</h5></Link>
                <ul className='dropdown'>
                  <li>Link1</li>
                  <li>Link2</li>
                  <li>Link3</li>
                </ul>
              </li>
              <li to="/?catogori=about"><Link><h5>About</h5></Link></li>
              <li><Link><h5>Blog</h5></Link></li>
              <li><Link><h5>Contact</h5></Link></li>
              <li><Link><h5>Pages</h5></Link></li>
            </ul>
          </div>
          <div>
            <ul className='div22icon'>{Iconlinks}</ul>
          </div>
        </div>
      </nav>

      {/* <nav className='navbar'>
        <div className='flexitem'><h3>{brandName}</h3></div>
        <div className='flexitem navbar-collapse'>
          <div className='links'>{linkItems}</div>
          <div className='buttons'>{Iconlinks}</div>
        </div>
        <div className='flexitem navbar-toggle'></div>
      </nav> */}
    </header>
  )
}

export default Header