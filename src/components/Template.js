import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import frame from '../assets/background.png'
import {FcGoogle} from 'react-icons/fc'


const Template = ({title,desc1,desc2,image,formType,setIsLoggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1000px] py-12 mx-auto gap-x-12 gap-y-0'>

        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-[#f1f2ff] font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-[#afb2bf]'>{desc1}</span>
                <br />
                <span className='text-[#47a5c5] italic'>{desc2}</span>
            </p>

            {formType ==='signup'?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] bg-[#2c333f] w-full'></div>
                <p className='text-[#2c333f]'>OR</p>
                <div className='h-[1px] bg-[#2c333f] w-full'></div>
            </div>

            <button className='w-full flex justify-center items-center text-[#afb2bf] rounded-lg font-medium border border-[#afb2bf] px-3 py-2 gap-x-2 mt-6'> <FcGoogle/> <p> Sign in with Google</p></button>

        </div>

        <div className='relative w-11/12 max-w-[400px]'>
            <img src={frame} alt='Pattern' width={498} height={524} loading='lazy' />
            <img src={image} alt='Student' width={498} height={524} loading='lazy' className='absolute -top-4 right-4' />
        </div>


    </div>
  )
}

export default Template