import React, { useState } from 'react';
//import './components/App.css';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; */
 
const SignUp = () => {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [address, setaddress] = useState("");
    const [email, setEmail] = useState("");

    const handleInputFirstName = (event) => {
      setfirstname(event.target.value);
    };
    const handleInputLastName = (event) => {
      setlastname(event.target.value);
    }; 
 
  return (
    <>
        <div className='ContainerSign'>
            <div className='logostyle'>
                <img className='logo' src={process.env.PUBLIC_URL + '/MainLogo.png'} alt='logo'/>
                <img className='logo2' src={process.env.PUBLIC_URL + '/LogoText.png'} alt='logo2' />
            </div>
            <div className='containerDetails'>
                <div className='text'> WELCOME! </div>
                <div className='text1'>Let's get you started.</div>
             
              <form> 
                <label className='fn'> First name <input type='text' value={firstname} placeholder='Enter your first name'></input></label>
                <label className='ln'> Last name <input type='text' value={lastname} placeholder='Enter your last name'></input></label>
                <label className='addr'> Address <input type='text' value={address} placeholder='Enter your address'></input></label>
                <label className='email'> Email   <input type='text' value={email} placeholder='Enter your email address'></input></label>
                <button className='Btn' > Sign Up</button>
              </form>
            </div>
        </div>
    </>
  );
};
 
export default SignUp;