import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <ul className='navbar'>
            <li><Link to='#' className='navLink'>Filter</Link></li>
            <li><Link to='#' className='navLink'>Home</Link></li>
            <li><Link to='#' className='navLink'>Favorites</Link></li>
            <li><Link to='#' className='navLink'>Profile</Link></li>
        </ul>
    )
}