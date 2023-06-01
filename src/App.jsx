import { useState } from 'react'
import './App.css'
import Logo from './assets/logo.png'
import { Link } from 'react-router-dom'
import SignupImg from './assets/signup.png'


function App() {
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
      <div className='split signUp'>
        <img src={Logo} alt="" className='logo'/>
        <h1>Farm Cart Organic</h1>
        <div className="input-wrapper">
        <form action="" className='signupForm' onSubmit={handleSubmit}>
        <h1>Create an account</h1>
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
        <input type="submit" value="Sign Up" id='submitBtn'
      
        />
        <span>Already a user? 
          {<Link to='/login' style={{ textDecoration: 'none' }}> Login here</Link>}
          {/* <input type="button" value='Login' id='goToLogin'/> */}
          </span>
      </form>
    </div>
    </div>

      <div className="split right">
        <div className="centered">
          <img src={SignupImg} alt="" className='signup-img'/>
        </div>
      </div>
   </div>
    </>
  )
}

export default App
