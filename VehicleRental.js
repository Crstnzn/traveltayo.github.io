import React, { useState } from "react";
 
const VehicleRental = () => {
   
    const [inputVehRName, setInputVehRName] = useState("");
    const [inputVehREmail, setInputVehREmail] = useState("");
    const [inputVehRNumber, setInputVehRNumber] = useState("");
    const [inputVehRDepDate, setInputVehRDepDate] = useState("");
    const [inputVehRRetDate, setInputVehRRetDate] = useState("");
    const [inputVehRPrefDes, setInputVehRPrefDes] = useState("");
    const [inputVehRAirOr, setInputVehRAirOr] = useState("");
    const [inputVehRNumPer, setInputVehRNumPer] = useState(0);
    const [inputVehRParagraph, setInputVehRParagraph] = useState("");
 
    const handleInputVehRChange = (event) => {
        setInputVehRName(event.target.value);
    };
 
    const handleInputVehREmail = (event) => {
        setInputVehREmail(event.target.value);
    }
 
    const handleInputVehRNumber = (event) => {
        setInputVehRNumber(event.target.value);
    }
 
    const handleInputVehRDepDate = (event) => {
        setInputVehRDepDate(event.target.value);
    }
 
    const handleInputVehRRetDate = (event) => {
        setInputVehRRetDate(event.target.value);    
    }
 
    const handleInputVehRPrefDes = (event) => {
        setInputVehRPrefDes(event.target.value);    
    }
 
    const handleInputVehRAirOr = (event) => {
        setInputVehRAirOr(event.target.value);    
    }
 
    const handleInputVehRNumPer = (event) => {
        let value = parseInt(event.target.value);
        if (isNaN(value) || value < 0) {
            setInputVehRNumPer(0);
        } else {
            setInputVehRNumPer(value);
        }
    };
 
    const handleInputVehRParagraph = (event) => {
        setInputVehRParagraph(event.target.value);
    };
 
    return(
        <div class="faqs-container">
           
            <header class="header">
                <div class="head">
                    {/* <img src={require("../public/logo.png")} alt="" class="header-logo" />
                    <img src={require("../public/logo text.png")} alt="" class="header-logoname" /> */}
                   
                    <div class="headeropt">
                        <h4 class="bold">Book a Service</h4>
                        <h4>About Us</h4>
                        <h4>Contact Us</h4>
                        <h4>FAQs</h4>
                    </div>
 
                    <div class="profcon">
                        <h4>Hi, Juan!</h4>
                        {/* <img src={require("../pics/profile.png")} alt=""/> */}
                    </div>
                </div>
            </header>
 
            <div class="airmain">
                <div>
                    {/* <img src={require("../pics/vehiclerental.png")} alt="" class="airlineimg"/> */}
                    <h1 class="airtxt">VEHICLE RENTAL</h1>
                </div>
 
                <div class="txtandfill">
                    <div class="left">
                        <p>
                        Rev up your adventure with TravelTayo's lineup of rental
                        vehicles designed to suit every traveler's needs. From
                        compact cars to spacious SUVs, we've got the wheels to
                        match your journey. Booking is a breeze, and with
                        transparent pricing, you'll know exactly what to expect.
                        So, whether you're chasing sunsets or city lights, let
                        TravelTayo be your ticket to unforgettable experiences
                        on the road.
                        </p>
                    </div>
 
                    <div class="right">
 
                        <div class="fill">
                            <h5>General Information</h5>
                           
                            <div class="fillname">
                                <h3>Name:</h3>
                                <input
                                    type="text"
                                    value={inputVehRName}
                                    onChange={handleInputVehRChange}/>
                            </div>
 
                            <div class="fillemail">
                                <h3>Email Address:</h3>
                                <input
                                    type="email"
                                    value={inputVehREmail}
                                    onChange={handleInputVehREmail}/>
                            </div>
 
                            <div class="fillnumber">
                                <h3>Mobile Number:</h3>
                                <input
                                    type="tel"
                                    value={inputVehRNumber}
                                    onChange={handleInputVehRNumber}/>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div class="txtandsubmit">
                    <div class="travelinfo">
                        <div class="filltravins">
                            <h5>Travel Information</h5>
 
                            <div class="dateselec">
                                <div class="datesel">
                                    <h3>Departure Date:</h3>
                                    <input
                                    type="date"
                                    value={inputVehRDepDate}
                                    onChange={handleInputVehRDepDate}/>
                                </div>
 
                                <div class="datesel">
                                    <h3>Return Date:</h3>
                                    <input
                                        type="date"
                                        value={inputVehRRetDate}
                                        onChange={handleInputVehRRetDate}/>
                                </div>
                            </div>
 
                            <div class="filldestination">
                                <h3>Preferred Destination:</h3>
                                    <input
                                    type="text"
                                    value={inputVehRPrefDes}
                                    onChange={handleInputVehRPrefDes}/>
                            </div>
 
                            <div class="fillairport">
                                <h3>Pick Up Location:</h3>
                                <input
                                    type="text"
                                    value={inputVehRAirOr}
                                    onChange={handleInputVehRAirOr}/>
                            </div>
 
                            <div class="fillnumber1">
                                <h3>Number of Persons:</h3>
                                <input
                                    type="number"
                                    value={inputVehRNumPer}
                                    onChange={handleInputVehRNumPer}/>
                            </div>
                        </div>
                    </div>
 
                    <div class="remrek">
                        <div class="fill">
                            <h5>Remarks/Request</h5>
                            <textarea  
                                value={inputVehRParagraph}
                                onChange={handleInputVehRParagraph}
                                rows="4"
                                cols="50"/>
                        </div>
                    </div>
 
                    <div class="button-wrapper">
                        <div class="subcasbtn">
                            <div>
                                <button>Cancel</button>
                                <button class="subbtn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default VehicleRental;
 
 
 

