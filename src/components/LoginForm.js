import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedIn}) => {

    const[formData, setFormData] = useState({
        email:"",password:""
    })

    const navigate = useNavigate();

    const [showPassword,setShowPassword] = useState(false)

    function changeHandler(event){
        setFormData((prev)=>(
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        
        setIsLoggedIn(true)
        toast.success('Logged In')
        navigate('/dashboard')
    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Email Address <sup className='text-[#ef476f]'>*</sup></p>
            <input type="email" name="email" required value={formData.email} onChange={changeHandler} placeholder='Enter email Address' className='bg-[#161d29] rounded-lg text-[#f1f2ff] w-full p-[12px]'/>
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Password <sup className='text-[#ef476f]'>*</sup></p>
            <input type={showPassword ? "text" : "password"} name="password" required value={formData.password} onChange={changeHandler} placeholder='Enter Password' className='bg-[#161d29] rounded-lg text-[#f1f2ff] w-full p-[12px]'/>

            {/* if error then check it  */}
            <span onClick={()=>setShowPassword(!showPassword)} className='absolute right-3 top-[38px] cursor-pointer'>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
            <Link to='#'>
                <p className='text-xs mt-1 text-[#47a5c5] max-w-max ml-auto'>Forgot Password</p>
                </Link>
        </label>

        <button className='w-full bg-yellow-500 rounded-lg font-medium text-black px-3 py-2 mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm