import React from 'react';
import { SiGmail } from 'react-icons/si'
import { FaFacebook,FaTwitterSquare } from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs';
import './Footer.css'
const Footer = () => {
    return (
        <div className=''>
        <footer className='bg-dark text-white  text-center p-3'>
          <span className='word-space'> @All Copyright   Reserved Sport Gear 2022 </span><br></br>
        <span >  Contact {'\u00A0'}  <SiGmail/> {'\u00A0'}  fmfahim1202@gmail.com </span><br></br>
         Visit Our <FaFacebook className='ml-2'/> {'\u00A0'} <FaTwitterSquare className='ml-2'/> {'\u00A0'} <BsInstagram className='ml-2'/> {'\u00A0'}  <br></br>

        </footer>
        </div>
    );
};

export default Footer;