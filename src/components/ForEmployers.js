import React from 'react'

import { AiFillBank} from "react-icons/ai";
import { FiBriefcase} from "react-icons/fi";
import {AiOutlineFileWord } from "react-icons/ai";
import { FaChildReaching } from "react-icons/fa6";
import {FaRegHandshake } from "react-icons/fa6";

import { IoIosFlower} from "react-icons/io";


function ForEmployers() {
  return (
    <div >
        <h1 className='welcome'>Welcome to OnJobs</h1>
        <br></br>
        <div  className='color1'>
            <div className='hire-candidates'>
        <div >
            <h1 >Hire candidates quickly and easily.</h1>
            <h3>Access 31,600,000 CVs</h3>
            <h1 id='best-pricing'>Choose The Best Pricing For You</h1>
            <p id='eco-friendly'>Who Are In Extremely Love With Eco Friendly System</p>
        </div>
       <div className='free-silver-basic'>
        <div className='free'>
            <h1>Free</h1>
            <h3>(5 Posts)</h3>
            <h2>Package Duration (30 Days)</h2>
            <p style={{backgroundColor:"lightgray"}}>Some text here</p>
           
            <h1><sup>$</sup>0</h1>
            <button type='button'>Buy Now</button>
        </div >
        <div className='silver'>
            <h1>Silver</h1>
            <h3>(5 Posts)</h3>
            <h2>Package Duration (45 Days)</h2>
            <p style={{backgroundColor:"lightgray"}}>Some text here</p>
            
            <h1><sup>$</sup>150</h1>
            <button type='button'>Buy Now</button>
        </div>
        <div className='basic'>
            <h1>Basic</h1>
            <h3>(5 Posts)</h3>
            <h2>Package Duration (30 Days)</h2>
            <p style={{backgroundColor:"lightgray"}}>Some text here</p>
            
            <h1><sup>$</sup>50</h1>
            <button type='button'>Buy Now</button>
        </div>
        <div className='unlimited'>
            <h1>Unlimited CV Search</h1>
            <h3>(100 Posts)</h3>
            <h2>Package Duration (30 Days)</h2>
            <p style={{backgroundColor:"lightgray"}}>Some text here</p>
            
            <h1><sup>$</sup>200</h1>
            <button type='button'>Buy Now</button>
    </div>
         </div>
   
<div className='business-job-search'>
    <div id='business'>
    <AiFillBank className='icons-end'/>
        <h3>Small Business Solutions</h3>
        <button className='button1' type='button'>Explore Now</button>
    </div>

    <div id='yourjob'>
    <FiBriefcase className='icons-end'/>
        <h3>Post Your Job</h3>
        <button className='button1' type='button'>Post Now</button>
    </div>

    <div id='search'>
    <AiOutlineFileWord className='icons-end'/>
        <h3>Resume Search</h3>
        <button className='button1' type='button'>Search Now</button>
    </div>
    </div>
    <div>
        <h1>Why OnJob.com?</h1>
        <h4>Largest community of job seekers. Fast, easy, cost-effective. Customer-first attitude.</h4>
    </div>
    <div className='onjob'>
    <div className='massive-reach'>
    <FaChildReaching id='icons-2'/>
        <h3>Massive reach</h3>
        <p>Reach the largest community of job seekers in the Middle East,<br></br> from across all industries and career levels. Growing at over 12,<br></br>000 a day.</p>
    </div>
    
    <div className='easyfast'>
    <FaRegHandshake id='icons-2'/>
        <h3>Easy & fast</h3>
        <p>Hiring couldn't be easier. Our super-charged tools<br></br> will help you find, shortlist and contact your perfect hire <br></br>in no time.</p>
    </div>
    <div className='costefficative'>
    <IoIosFlower id='icons-2'/>
        <h3>Cost-Effective hiring</h3>
        <p>Hire the best talent while maximizing your ROI.<br></br> Choose from several solutions that works with <br></br>your time and budget.</p>
    </div>
    </div>
    <div className='onetwo'>
        <div className='one'>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing, Quisque <br></br>lobortis elit. Lorem ipsum dolor sit<br></br> amet, consectetur adipiscing, Quisque<br></br> lobortis elit.Lorem ipsum dolor sit<br></br> amet, consectetur adipiscing, Quisque <br></br>lobortis elit.Lorem ipsum dolor sit <br></br>amet, consectetur adipiscing, Quisque <br></br>lobortis elit.</p>
        </div>
        <div  className='two'>
            <h2>Quick Links</h2>
            <p>Search Jobs</p>
            <p>Jobs by Category</p>
            <p>Jobs by Location</p>
            <p>Listed Companies</p>
            
        </div>
        <br/>
        <div className='three' >
            <h2>Employers</h2>
            <p>Pricing Plans</p>
            <p>Create Account</p>
            <p>Post a Job</p>
            <p>Contact Us</p>
           
        </div>
        
        <div className='four'>
            <h2>Job Seekers</h2>
            <p>Create Account</p>
            <p>Matching Jobs</p>
            <p>Apply for Job</p>
            <p>Applied Jobs</p>
           
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default ForEmployers