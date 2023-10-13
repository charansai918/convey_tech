import React from 'react'
import { Link } from 'react-router-dom'




function Login() {
  return (
    <div>
        <form>
            <h2>SIGN IN</h2>
            <div className='jobs'>
                
            <p id='job-seeker'>job Seeker</p>
            <p >Employer</p>
            <p >Trainer</p>

            </div>
            <div>
           
            <input placeholder='Email'></input>
            </div>
            <div>
            <input placeholder='Password'></input>
            </div>
            <div>
            <input id='remember' className='remember-box' type='checkbox'></input>
            <label htmlFor='remember' className='remember'>Remember Me</label>
            </div>
            <div>
                <button type='button'> LOGIN</button>
            </div>
            <div>
                <a className='forget'>
                <p>Forgot Password</p>
                </a>
            </div>
            <div>
                <p>Don't have an account?<a className='forget'>Signup now</a></p>
            </div>
        </form>
        {/* <br></br> */}
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
  )
}

export default Login