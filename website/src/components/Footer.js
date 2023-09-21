import React from 'react';
import {forwardRef} from 'react';
import './Footer.css';
import Clock from './Clock';
import ima1 from '../images/atlastlogo.jpg'
import ima3 from '../images/mail.png'
import ima4 from '../images/location.png'
import ima2 from '../images/instagram.png'
import ima5 from '../images/linkedin.png'
function Footer(props) {
  
  return (
    
   <div ref={props.footerref}>
    <footer className="footer border border-2 border-right-0">
  <div className="container p-4">
    <div className="row">
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <div className="v">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={ima1} className='col-4 logo1'/>
            </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <div className='contact'>
          <h5>Contact</h5>
            <h5>
            <a href="mailto:connectatlast@gmail.com" className="text-reset">Mail↗</a>
          </h5>
          <h5>
            <a href="https://www.google.com/maps/place/MECHANICAL+AND+CIVIL+LAB,+VNR+COLLEGE,+Hanuman+Marg,+Whisper+Valley,+Hyderabad,+Telangana+500090/@17.5372971,78.3840634,19.36z/data=!4m9!1m2!2m1!1svj+hub+vnr!3m5!1s0x3bcb8e0abb092be9:0x664f40f6bfd581b0!8m2!3d17.5375274!4d78.3851559!16s%2Fg%2F11cpbfbytr" className="text-reset">Map us↗</a>
          </h5>
          </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <div className='social'>
          <h5>Social</h5>
          <h5>
            <a href="https://www.instagram.com/atlast.inc/" className="text-reset">Instagram↗</a>
          </h5>
          <h5>
            <a href="https://www.linkedin.com/company/atlast-official/" className="text-reset">LinkedIn↗</a>
          </h5>
          </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <div className="clock1">


       {/* <div class="col-span-12 xs:col-span-6 md:col-span-3 xl:col-span-2 col-start-1 md:col-start-7 xl:col-start-9 text-sm">  
        <div class="timezone">
          <div class="clock relative w-9 h-9" data-timezone="Europe/London">
            <div class="point absolute inset-0 w-full h-full">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="2" r="2" fill="#000000"></circle>
                <circle cx="18" cy="34" r="2" fill="#000000"></circle>
                <circle cx="26" cy="32" r="2" fill="#000000"></circle>
                <circle cx="26" cy="4" r="2" fill="#000000"></circle>
                <circle cx="32" cy="10" r="2" fill="#000000"></circle>
                <circle cx="4" cy="10" r="2" fill="#000000"></circle>
                <circle cx="2" cy="18" r="2" fill="#000000"></circle>
                <circle cx="34" cy="18" r="2" fill="#000000"></circle>
                <circle cx="32" cy="26" r="2" fill="#000000"></circle>
                <circle cx="4" cy="26" r="2" fill="#000000"></circle>
                <circle cx="10" cy="32" r="2" fill="#000000"></circle>
                <circle cx="10" cy="4" r="2" fill="#000000"></circle>
              </svg>
              <div className='minute-hand-wrapper'>
                <div className='minute-hand'>
                  <div className='hand'>
                    <div className='arrow'></div>
                  </div>
                </div>
              </div>

      </div>
        <span class="hour absolute top-2 left-4.5 w-0.5 h-2.5 rotate-30 bg-gold-dark origin-bottom z-1" style={{transform:" rotate(414deg)"}}></span>
        <span class="min absolute top-1.5 left-4.5 w-0.5 h-3 rotate-45 bg-gold-dark origin-bottom z-2" style={{transform: "rotate(288deg)"}}></span>
        <span class="sec absolute top-1.5 left-4.5 w-px h-3 rotate-90 bg-gold-dark origin-bottom z-3" style={{transform: "rotate(126deg)"}}></span>
      </div> */}
      <div>
       <Clock/>
      </div>
      <div class="pt-3 lead text-black">Hyderabad, India</div>
      <div class="time lead text-black">06:48:21</div>
      

            
        </div>
        </div>
      </div>
    </div>
    </footer>
  </div>

  )
}
export default forwardRef(Footer);