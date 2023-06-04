import { useState } from 'react'
import './Signup.css'
import Logo from './assets/logo.png'
import { Link } from 'react-router-dom'
import SignupImg from './assets/signup.png'

function Signup() {
  const [register,setRegister] = useState({
    "firstName":" ",
    "lastName":"",
    "email":"",
    "password":"",
    "confirmPassword":"",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(register)
  }

  return (
    <>
    <div className="parent">
      <div className='signup'>
        <div className="header">
        <img src={Logo} alt="" className='logo'/>
        <h1>Farm Cart Organic</h1>
        </div>
        <form action="" className='signupForm' onSubmit={handleSubmit}>
        <h2>Create an account</h2>
        
        <label htmlFor="firstName">First Name
        </label>
        <input type="text" name="firstName" id="" 
        value={register.firstName} required 
        onChange={(e) => setRegister({...register,firstName :e.target.value})}
        /> 
        
        <label htmlFor="lastName">Last Name
        </label>
        <input type="text" name="lastName" id="" 
        value={register.lastName} required
        onChange={(e) => setRegister({...register, lastName: e.target.value})}
        />

        <label htmlFor="email">Email
        </label>
        <input type="email" name="email" id="" 
        value={register.email} required
        onChange={(e) => setRegister({...register,email:e.target.value})}
        />

        <label htmlFor="password">Password
        </label>
        <input type="password" name="password" id="" 
        value={register.password} required
        onChange={(e) => setRegister({...register,password: e.target.value})}
        />

        <label htmlFor="confirmPassword">Confirm Password
        </label>
        <input type="password" name="confirmPassword" id="" 
        value={register.confirmPassword} required
        onChange={(e) => setRegister({...register,confirmPassword: e.target.value})}
        />
        
        <div className="check-box">
        <input type="checkbox" name="" id="terms-check" /> 
        <p>I agree with terms and privacy</p>
        </div>
        
        <input type="submit" value="Sign Up" id='submitBtn'
        />
        <input type="button" value="Sign Up with Google" id='submitBtn'
        />
        <input type="button" value="Sign Up with Facebook" id='submitBtn'
        />

        <span>Already a user? 
          {<Link to='/login' style={{ textDecoration: 'none' }}> Login here</Link>}
          {/* <input type="button" value='Login' id='goToLogin'/> */}
          </span>
        </form>
      </div>

      <div className="split">
        <div className="centered">
          <img src={SignupImg} alt="" className='signup-img'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
