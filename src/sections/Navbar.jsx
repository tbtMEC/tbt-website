
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
      <li className="items"><a href="#about">About</a></li>
      <li className="items"><a href="#readersForum">The Reader's Forum</a></li>
      <li className="items"><a href="#writersForum">The Writer's Forum</a></li>
      <li className="items"><a href="#speakersForum">The Speaker's Forum</a></li>
      <li className="items"><a href="#events">Events</a></li>
      <li className="items"><a href="#team">Team</a></li>
    </ul>
      )}

      <button onClick={toggleNav} className="btnmenu"><img src="/assets/menu.png" alt=''/></button>
    </nav>
  )
}
