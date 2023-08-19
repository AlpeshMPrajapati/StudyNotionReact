import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const SignupForm = ({setIsLoggedIn}) => {

    const[formData,setFormData] = useState({
        firstName:"",lastName:"",email:"",createPassword:"",confirmPassword:""
    })

    const [accountType,setAccountType] = useState("student")

    const navigate = useNavigate();

    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)

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

        if(formData.createPassword !== formData.confirmPassword){
            toast.error("Password do not match")
            return;
        }

        const accountData = {
            ...formData
        }

        const finalData = {
            ...accountData,
            accountType
        }

        setIsLoggedIn(true)
        console.log(finalData)
        toast.success('Account Created')
        navigate('/dashboard')
    }

  return (
    <div>
        <div className='flex p-1 gap-x-1 my-6 rounded-full max-w-max bg-[#161d29]'>
            <button className={`${accountType === "student"?"bg-[#000814]  text-[#f1f2ff]":"bg-transparent text-[#999daa]"} py-2 px-5 rounded-full transition-all duration-200 `} onClick={()=>setAccountType("student")}>Student</button>
            <button className={`${accountType === "instructor"?"bg-[#000814]  text-[#f1f2ff]":"bg-transparent text-[#999daa] "} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("instructor")}>Instructor</button>
        </div>
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            {/* first name and last name */}
            <div className='flex gap-2'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>First Name<sup className='text-[#ef476f]'>*</sup></p>
                    <input type="text" name="firstName" required value={formData.firstName} onChange={changeHandler} placeholder='First Name' className='bg-[#161d29] rounded-lg text-[#f1f2ff] w-full p-[12px]'/>
                </label>    
                <label className='w-full'>
                    <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Last Name<sup className='text-[#ef476f]'>*</sup></p>
                    <input type="text" name="lastName" required value={formData.lastName} onChange={changeHandler} placeholder='Last Name' className='bg-[#161d29] rounded-lg text-[#f1f2ff] w-full p-[12px]' />
                </label>    
            </div>

            {/* email address */}
            <label className='w-full'>
                <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Email Address <sup className='text-[#ef476f]'>*</sup></p>
                <input type="email" name="email" required value={formData.email} onChange={changeHandler} placeholder='Enter Email Id' className='bg-[#161d29] rounded-lg text-[#f1f2ff] w-full p-[12px]'/>
            </label>
            
            <div className='flex gap-2'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Create Password<sup className='text-[#ef476f]'>*</sup></p>
                    <input type={showPassword ? "text":"password"} name="createPassword" required value={formData.createPassword} onChange={changeHandler} placeholder='Create Password' className='bg-[#161d29] rounded-lg text-[#f1f2ff] w-full p-[12px]' />

                    <span onClick={()=>setShowPassword(!showPassword)} className='absolute right-3 top-[38px] cursor-pointer'>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>   

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-[#f1f2ff] mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-[#ef476f]'>*</sup></p>
                    <input type={showConfirmPassword ? "text":"password"} name="confirmPassword" required value={formData.confirmPassword} onChange={changeHandler} placeholder='Confirm Password' className='bg-[#161d29] rounded-lg text-[#f1f2ff] w-full p-[12px]'/>

                    <span onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className='absolute right-3 top-[38px] cursor-pointer'>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>    
            </div>
            <button  className='w-full bg-yellow-500 rounded-lg font-medium text-black px-3 py-2 mt-6'>
                Create Account
            </button>
        
        </form>
    </div>
  )
}

export default SignupForm