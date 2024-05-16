import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ClientFeedback = ()=>{
    return (
        <>
<div className='containerF'>
        <div className="whiteF">

        <div className='logoF'>
        <div className='logos'>
        <img className='l1' src={process.env.PUBLIC_URL + '/logo.png'} alt="whale" />
        </div>

        <div>
        <img className='lt2' src={process.env.PUBLIC_URL + '/logo text.png'} alt="whale" />
        </div>
        </div>

    <div className='headerF'>
    <div className='hcontentF'> Book a Service </div>
    <div className='hcontentF'> Promos </div>
    <div className='hcontentF'> About Us </div>
    <div className='hcontentF'> Contact Us </div>
    <div className='hcontentF'> FAQs </div>
    </div>

    <div className='helloF'>
    <div className='juanF'> Hello, Juan!</div>
    <div >
        <FontAwesomeIcon icon={faUser} size="2x" color="black" />
    </div>
    </div>
    </div>

</div>
        </>
    )
}
export default ClientFeedback;