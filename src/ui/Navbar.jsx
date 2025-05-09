import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav id='navbar'>
        <div className='nav-inner'>
            <div className='nav-logo'>
                <img src='images/logo-256x256.webp' alt='ClientNest logo' />
            </div>
        </div>
        <ul className='nav-links'>
            <li className='nav-link'><NavLink to='/'>Home</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar