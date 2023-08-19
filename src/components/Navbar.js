import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { toast } from 'react-hot-toast';

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to='/'>
            <img src={logo} alt="logo" width={160} height={32} loading='lazy' />
        </Link>
        
        <nav>
            <ul className='flex gap-x-6 text-[#dbddea]'>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
        </nav>


        {/* Login-signup-dashboard-logout */}

        <div className='flex items-center gap-x-4 text-[#afb2bf]'>
            { !isLoggedIn &&
                <Link to='/login'>
                    <button className='bg-[#161d29] py-2 px-4 rounded-lg border border-[#202938]'>Login</button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to='/signup'>
                    <button className='bg-[#161d29] py-2 px-4 rounded-lg border border-[#202938]'>Sign Up</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to='/' onClick={()=>{
                    setIsLoggedIn(false)
                    toast.success('Logged Out')
                    }}>
                    <button className='bg-[#161d29] py-2 px-4 rounded-lg border border-[#202938]'>Log Out</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to='/dashboard'>
                    <button className='bg-[#161d29] py-2 px-4 rounded-lg border border-[#202938]'>Dashboard</button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar