import React from 'react'
import '../footer/Footer.css' 
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';




 function Footer() {
  return (
      <div className='outer-footer-container'>
        <div className='inner-footer-container'>
          <div className='footer-column'>
            {/* Column 1 content */}
            
            <ul>
              <ul  className='social-icons'>
                <li><YouTubeIcon /></li>
               <li><FacebookOutlinedIcon /></li>
               <li><Instagram /></li>
              </ul>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
          </div>
          <div className='footer-column'>
            {/* Column 2 content */}
            
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Corporate Information</li>
              <li>Legal Notices</li>

            </ul>
          </div>
          <div className='footer-column'>
            {/* Column 3 content */}
            
            <ul>
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Cookie Preferences</li>
              <li>Only on Netflix</li>



            </ul>
          </div>
          <div className='footer-column'>
            {/* Column 4 content */}
            <ul>
              <li>Only on Netflix</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
            

            </ul>
          </div>
        </div> 
    </div>
  )

}
export default Footer;