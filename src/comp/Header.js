import React, { useState } from 'react';
import Logo from "./ut.png";
import {MdShoppingBasket, MdAdd , MdLogout} from 'react-icons/md';
import Avatar from "./avtar.png"
import {  motion } from 'framer-motion';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../fairebase.config";
import {Link} from "react-router-dom";
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';

const Header = () => {
const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

const [{user} , dispatch ] = useStateValue();
const [isMenu, setIsMenu] = useState(false);
  const login = async () => {
    if(!user){
      const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
    // console.log(response);
    dispatch(
      {
        type : actionType.SET_USER,
        user :providerData[0],
      }
    );
    localStorage.setItem('user', JSON.stringify(providerData[0]));
  }
  else{
    setIsMenu(!isMenu)
  }
  
    }
  return (
    <header className=" fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
        {/*destop & tablet*/}
        <div className="hidden md:flex w-full h-full items-center justify-between ">
        <Link to={'/'} className='flex items-center gap-2'>
        <img src = {Logo} className="w-20 object-cover" alt ="logo"/>
        <p className='text-headingColor text-xl '>onlineMEALS</p>
        </Link>
        <div className='flex items-center gap-8'>
        <motion.ul
        initial={{opacity:0 , x:200}}
        animate={{opacity:1 , x:0}}
        exit={{opacity:0 , x:200}}
         className=' flex items-center gap-8 '>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all
         ease-in-out cursor-pointer'>Home</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all
        ease-in-out cursor-pointer'>Menu</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all
        ease-in-out cursor-pointer'>About us</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all
        ease-in-out cursor-pointer'>
        Services</li>
        </motion.ul>
        <div className='relative flex items-center justify-center'>
        <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer' />
        <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg 
        flex item-center justify-center'>
        <p className='text-xs  text-white font-semibold'>2</p>
        </div>
        </div>
        <div className='relative'>
        <motion.img whileTap={{scale :0.6}}
        src= {user ? user.photoURL : Avatar} className = " w-12 min-w-[40px] h-12 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
        alt="userprofile" 
        onClick={login}
        />
      {isMenu && (
        <motion.div 
        initial = {{opacity:0 , scale:0.6} }
        animate = {{opacity:1 , scale:1} }
        exit = {{opacity:0 , scale:0.6} }
        className='w-40 bg-gray-50 shadow-xl rounded-lg 
        flex flex-col absolute  top-13 right-0'>
        
        {user && user.email === "harsh.vardhan1_cs20@gla.ac.in" &&
        <Link to = {"/createItem"}>
        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
          transition-all duration-100 ease-in-out
         text-textColor text-base' > New item <MdAdd /></p>
        </Link>
      }
        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
        transition-all duration-100 ease-in-out text-textColor text-base'>Log out <MdLogout /></p>
       
       </motion.div>
      )
    }
        </div>
        </div>
      
             
        </div>
     

        {/* mobile */}
        <div className="flex md:hidden w-full h-full item-center justify-between">
        <Link to={'/'} className='flex items-center gap-2'>
        <img src = {Logo} className="w-20 object-cover" alt ="logo"/>
        <p className='text-headingColor text-l '>onlineMEALS</p>
        </Link>
        <div className='relative flex items-center justify-center'>
        
        
        </div>
        <div className='relative'>
        <motion.img whileTap={{scale :0.6}}
        src= {user ? user.photoURL : Avatar} className = " w-12 min-w-[40px] h-12 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
        alt="userprofile" 
        onClick={login}
        />
      {isMenu && (
        <motion.div 
        initial = {{opacity:0 , scale:0.6} }
        animate = {{opacity:1 , scale:1} }
        exit = {{opacity:0 , scale:0.6} }
        className='w-40 bg-gray-50 shadow-xl rounded-lg 
        flex flex-col absolute  top-13 right-0'>
        
        {user && user.email === "harsh.vardhan1_cs20@gla.ac.in" &&
        <Link to = {"/createItem"}>
        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
          transition-all duration-100 ease-in-out
         text-textColor text-base' > New item <MdAdd /></p>
        </Link>
      }
      <ul
        
         className=' flex flex-col items-center gap-8  '>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all
         ease-in-out cursor-pointer'>Home</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all
        ease-in-out cursor-pointer'>Menu</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all
        ease-in-out cursor-pointer'>About us</li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all
        ease-in-out cursor-pointer'>
        Services</li>
        </ul>
        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100
        transition-all duration-100 ease-in-out text-textColor text-base'>Log out <MdLogout /></p>
       
       </motion.div>
      )
    }
        </div>
        
        </div>
        </header>
   
  )
}

export default Header
