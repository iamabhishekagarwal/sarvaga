import React from 'react';
import Logo2 from '../assets/logo2.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
return (

<div>
<header class="bg-[#510F3C] bg-opacity-90 ">
<nav class="flex justify-between items-center">
<div class="my-3 mx-5 flex gap-2 cursor-pointer ">
<a href="/" target="_self">
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
<button class="text-white hover:text-[#510F3C] border border-blue-300 rounded-xl w-[100px] hover:w-[200px]  transition-all duration-300 px-4 hover:bg-white py-2">continue with google</button>
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