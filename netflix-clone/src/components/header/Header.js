import React from 'react'
import '../header/Header.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import netflixlogo from '../assets/images/netflixlogo.svg'














 function Header() {
  return (
    <div className='outer-header-container'>
      <div className='inner-header-container'>

        <div className='left-header-container'>
            <ul>
              <li><img src={netflixlogo} /></li>

              <li>Home</li>
              <li>TV shows</li>
              <li>Movies</li>
              <li>Leatest</li>
              <li>My list</li>
              <li>Browes by language</li>
            
            </ul>
         </div>

         <div className='right-header-container'>
          <ul>
             <li><SearchIcon /></li>
            <li><NotificationsActiveIcon /></li>
            <li><AccountBoxIcon /></li>
         
            <li><ArrowDropDownIcon /></li>

          </ul>

         </div>
      </div>
        
    </div>
  )
}
export default Header;