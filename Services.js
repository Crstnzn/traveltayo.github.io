import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
 
const Services = () => {

 
  return (
   
    <div className="container">
 
 <div className="white">

<div className='logo'>
    <div className='ll'>
        <img className='l' src={process.env.PUBLIC_URL + '/logo.png'} alt="whale" />
    </div>

    <div>
        <img className='lt' src={process.env.PUBLIC_URL + '/logo text.png'} alt="whale" />
    </div>
</div>

<div className='header'>
    <div className='hacontent'> Book a Service </div>
    <div className='hcontent'> Promos </div>
    <div className='hcontent'> About Us </div>
    <div className='hcontent'> Contact Us </div>
    <div className='hcontent'> FAQs </div>
</div>

<div className='hello'>

    <div className='juan'> Hello, Juan!</div>
    <div >
        <FontAwesomeIcon icon={faUser} size="2x" color="black" />
    </div>
    </div>

</div>
 
      <div className='services'> Services Offered </div>
 
      <div className='r'>
      <div className='yellow'>
 
      <div className='ys1'> Tour Packages </div>
      <div className='ys2'> Passport Assistance </div>
      <div className='ys3'> Hotel Booking </div>
      <div className='ys4'> Business Trip </div>
 
      </div>
      
 
      <div className='row'>  
 
      <div className='rows'> <img className='ss' src={process.env.PUBLIC_URL + '/s1.png'} alt="whale" /> </div>
      <div className='rows'> <img className='ss' src={process.env.PUBLIC_URL + '/s2.png'} alt="whale" /> </div>
      <div className='rows'> <img className='ss' src={process.env.PUBLIC_URL + '/s3.png'} alt="whale" /> </div>
      <div className='rows'> <img className='ss' src={process.env.PUBLIC_URL + '/s4.png'} alt="whale" /> </div>
 
      </div>
      </div>
 
      <div className='r2'>
      <div className='yellow'>
 
      <div className='ys1'> Tour Packages </div>
      <div className='ys2'> Passport Assistance </div>
      <div className='ys3'> Hotel Booking </div>
      <div className='ys4'> Business Trip </div>
 
      </div>
 
      <div className='row'>  
 
      <div className='rows'> <img className='ss' src={process.env.PUBLIC_URL + '/s1.png'} alt="whale" /> </div>
      <div className='rows'> <img className='ss' src={process.env.PUBLIC_URL + '/s2.png'} alt="whale" /> </div>
      <div className='rows'> <img className='ss' src={process.env.PUBLIC_URL + '/s3.png'} alt="whale" /> </div>
      <div className='rows'> <img className='ss' src={process.env.PUBLIC_URL + '/s4.png'} alt="whale" /> </div>
 
      </div>
      </div>
 
 
    </div>
  );
};
 
export default Services;