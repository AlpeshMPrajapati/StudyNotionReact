import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signupImg.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome Back"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
  />
  )
}

export default Signup