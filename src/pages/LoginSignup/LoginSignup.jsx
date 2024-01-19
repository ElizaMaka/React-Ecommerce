import React from 'react'
import './loginSignup.css'
import { Link } from 'react-router-dom'

const LoginSignup = () => {

  return (
    <>
      <div className="login-form">
        <form className=' col-lg-4 col-md-5 col-sm-8 col-xs-10'>
          <h3 className="mb-3" style={{ color: '#9b6d41' }}>
            {/* {isLogin ? "LogIn" : "SignUp"} */}
            </h3>
          <hr />
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type='submit'>Submit</button><br />
          <Link style={{ color: '#9b6d41', cursor: 'pointer' }} to={"?mode=Signup"}> 
            {/* {isLogin ?  "Need Account?" : "ALready a user?"} */}
            login
          </Link>
        </form>
      </div>
    </>
  )
}

export default LoginSignup
