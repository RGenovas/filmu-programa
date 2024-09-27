import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='header-container'>
    <div className="header">

    <NavLink to="/"><h2 className='logo'>Horror DB</h2></NavLink>

    <div className="header-links nav">
    <NavLink className='header-link' to='/search'>Search for movie </NavLink>


  

    </div>
</div>

</div>
    </div>
  )
}

export default Header
