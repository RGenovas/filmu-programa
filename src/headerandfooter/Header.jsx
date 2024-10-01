import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='header-container'>
    <div className="header">

    <NavLink to="/"><h2 className='logo'>Horror DB</h2></NavLink>

    <div className="header-links nav">
    <h2 className='logo1'>Top movies by decades:</h2>
    <NavLink className='header-link' to='/decades/1970'>70s</NavLink>
    <NavLink className='header-link' to='/decades/1980'>80s</NavLink>
    <NavLink className='header-link' to='/decades/1990'>90s</NavLink>
    <NavLink className='header-link' to='/decades/2000'>2000s</NavLink>
    <NavLink className='header-link' to='/decades/2010'>2010s</NavLink>
    <NavLink className='header-link' to='/decades/2020'>2020s</NavLink>
 </div>
 <NavLink className='search' to='/search'>Search</NavLink>
</div>

</div>
    </div>
  )
}

export default Header
