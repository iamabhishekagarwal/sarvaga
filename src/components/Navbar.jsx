import React from 'react';
import Logo2 from '../assets/logo2.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    const {user, logout,isAuthenticated } = useAuth0();
    console.log("Current user",user);
return (

<div>
<header class="bg-[#510F3C] bg-opacity-90 ">
<nav class="flex justify-between items-center">
<div class="my-3 mx-5 flex gap-2 cursor-pointer ">
<a href="/home" target="_self">
    <img src={Logo2} alt="Logo2" className='w-[250px] h-[100px]'/>
</a>    
{/* <p class=" text-center text-white text-2xl font-serif">Sarvaga  Fashions</p> */}

</div>
<div class="flex justify-between items-center gap-6">
<div className='relative group hidden sm:block'>
    <input
    type='text'
    placeholder='search'
    className=' py-1  w-[200px] group-hover:w-[300px] sm:w-[200px] transition-all duration-300 rounded-full border border-gray-300 px-2 text-start font-semibold focus:outline-none focus:border-1'
    />
    <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>

</div>
<div>
    <button 
className='bg-gradient-to-r from-purple-300 to-purple-500 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
<span className='group-hover:block hidden transition-all duration-200 '>Order</span>
<FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
</button>
</div>
</div>

<div class=" flex items-center gap-10 -translate-x-8 py-3 px-2 ">
    <div>
        {isAuthenticated ? <>
        <h3>Hello {user.name}</h3>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
    </button></> : <button onClick={()=>loginWithRedirect()} class="w-[200px] hover-w-[300px] transition-all duration-300 text-sm  hover:text-indigo-700 border-2 border-blue-300  py-1 rounded-xl mt-2 flex justify-center items-center bg-white font-semibold">
        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
        <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
        Login
    </button> }    
    </div>
</div>



        

</nav>


</header>
<div class="flex justify-center bg-purple-200">
<ul class="flex items-center gap-14 py-4">
<li><a href="/sale" target="_self" class="font-semibold text-purple-800 hover:text-purple-500 cursor-pointer" >Sale</a></li>
<li ><a href="/sarees"  target="_self" class="font-semibold text-purple-800 hover:text-purple-500 cursor-pointer"   >Sarees</a></li>
<li ><a href="/salwaar-suits" target="_self" class="font-semibold text-purple-800 hover:text-purple-500 cursor-pointer"   >Salwaar Suits</a></li>
<li ><a href="/lehangas" target="_self" class="font-semibold text-purple-800 hover:text-purple-500 cursor-pointer"  > Lehangas</a></li>
<li ><a href="/designers"  target="_self" class="font-semibold text-purple-800 hover:text-purple-500 cursor-pointer"   >Designers</a></li>
<li ><a  href="/newArrivals" target="_self" class="font-semibold text-purple-800 hover:text-purple-500 cursor-pointer" >New Arrivals</a></li>

        
</ul>
</div>
</div>


)
}

export default Navbar