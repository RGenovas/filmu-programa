import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
const navigateDecade = (e) => {
  const decade = e.target.value 
  navigate(`/decades/${decade}`)
}
  return (
    <div>
    <div className='header-container'>
    <div className="header">

    <NavLink to="/"><h2 className='logo'>Horror DB<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M490.906 15c-15.93 27.59-38.93 49.68-66.125 65.906-1.656 22.7-13.066 44.383-30.655 63.844-24.774 27.41-61.863 51.865-104.78 73.906-84.056 43.17-190.69 76.712-270.75 97.656v53.875c7.514-2.44 15.065-4.847 22.624-7.25 18.695.008 39.45 7.253 46.25 50.282C80.952 445.75 64 453.105 64 477c0 12.348 12.224 21.406 24.03 21.406 12.074 0 23.532-8.464 23.532-20.187 0-23.002-16.374-32.466-23-65.283 9.795-76.6 133.782-117.104 133.782-71.75 0 11.632-12.813 21.018-12.813 31.625 0 12.752 11.694 21.75 24.032 21.75 12.068 0 24.657-10.1 24.657-23.53 0-13.43-14-20.934-14-31.75 0-71.077 114.83-78.082 132.686-16.782-13.16 56.997-42.03 75.01-42.03 116.844 0 22.04 21.583 38 44.28 38 22.2 0 45.125-17.067 45.125-40.28 0-43.735-30.165-58.033-43.06-115.19 23.29-129.734 61.263-121.692 88.31-176.03.036-.06.06-.127.095-.188C490.395 109.56 498.903 66.81 490.905 15zm-86.53 76.656c-37.166 17.086-80.115 24.428-123 21.28C221.435 153.363 107.803 206.662 18.593 225v71.97c78.706-20.824 182.013-53.747 262.219-94.94 41.78-21.456 77.22-45.23 99.437-69.81 12.273-13.58 20.51-26.965 24.125-40.564zm54.28 102.125c-7.41 43.062-29.47 51.75-29.47 81.94.002 15.146 14.987 26.28 29.47 26.28 14.81 0 28.875-10.4 28.875-24.78 0-28.982-21.217-40.46-28.874-83.44z" fillRule="evenodd"></path></svg></h2></NavLink>

    <div className="header-links nav">
    <h2 className='logo1'>Top movies by decades:</h2>
        <select className="year-selection-menu" onChange={navigateDecade} >
        <option className='header-link'>Select a decade</option>
        <option className='header-link' value={1950}>1950s</option>
        <option className='header-link' value={1960}>1960s</option>
          <option className='header-link' value={1970}>1970s</option>
          <option className='header-link' value={1980}>1980s</option>
          <option className='header-link' value={1990}>1990s</option>
          <option className='header-link' value={2000}>2000s</option>
          <option className='header-link' value={2010}>2010s</option>
          <option className='header-link' value={2020}>2020s</option>
            
    
        </select> 
    
    {/* <NavLink className='header-link' to='/decades/1970'>70s</NavLink>
    <NavLink className='header-link' to='/decades/1980'>80s</NavLink>
    <NavLink className='header-link' to='/decades/1990'>90s</NavLink>
    <NavLink className='header-link' to='/decades/2000'>2000s</NavLink>
    <NavLink className='header-link' to='/decades/2010'>2010s</NavLink>
    <NavLink className='header-link' to='/decades/2020'>2020s</NavLink> */}
 </div>
 <NavLink className='search' to='/search'>Search<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></NavLink>
</div>

</div>
    </div>
  )
}

export default Header
