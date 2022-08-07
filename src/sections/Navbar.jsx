
import React, {useState, useEffect} from 'react'
import "../styles/navbar.scss";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 600) && (
      <ul className="list">
      <li className="items">Home</li>
      <li className="items">Services</li>
      <li className="items">Contact</li>
    </ul>
      )}

      <button onClick={toggleNav} className="btnmenu"><img src="/assets/menu.png" alt=''/></button>
    </nav>
  )
}
