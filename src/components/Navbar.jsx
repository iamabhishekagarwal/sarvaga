import React from 'react';
import Logo2 from '../assets/logo2.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    console.log("Current user", user);

    return (
        <div className="shadow-lg">
            <header className="bg-[#290133] text-white">
                <nav className="container mx-auto p-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <a href="/" target="_self">
                            <img src={Logo2} alt="Logo2" className='w-32 h-auto' />
                        </a>
                        <div className='relative hidden lg:block'>
                            <input
                                type='text'
                                placeholder='Search products...'
                                className='py-2 w-64 transition-all duration-300 rounded-full border border-gray-300 px-4 text-start font-semibold focus:outline-none focus:border-purple-500'
                            />
                            <IoMdSearch className='text-gray-500 absolute top-1/2 -translate-y-1/2 right-4' />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className='bg-[#4D135C] hover:bg-[#7E408D] transition-all duration-200 text-white py-2 px-6 rounded-full flex items-center gap-2'>
                            <FaCartShopping className="text-xl" />
                            <span className="hidden md:inline">Cart</span>
                        </button>
                        {isAuthenticated ? (
                            <div className="flex items-center gap-4">
                                <img src={user.picture} alt={user.name} className="w-10 h-10 rounded-full border-2 border-white" />
                                <div className="text-right">
                                    <h3 className="text-sm font-semibold">{user.name}</h3>
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                        className="text-xs text-white hover:text-red-400">
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button onClick={loginWithRedirect}
                                className="bg-white text-purple-800 py-2 px-4 rounded-full transition-all duration-300 hover:bg-purple-700 hover:text-white">
                                Login
                            </button>
                        )}
                    </div>
                </nav>
            </header>
            <div className="bg-[#1B0022]">
                <div className="container mx-auto">
                    <ul className="flex justify-center items-center gap-8 py-4">
                        <li><a href="/sale" target="_self" className="font-semibold text-white hover:text-purple-500">Sale</a></li>
                        <li><a href="/sarees" target="_self" className="font-semibold text-white hover:text-purple-500">Sarees</a></li>
                        <li><a href="/salwaar-suits" target="_self" className="font-semibold text-white hover:text-purple-500">Salwaar Suits</a></li>
                        <li><a href="/lehangas" target="_self" className="font-semibold text-white hover:text-purple-500">Lehangas</a></li>
                        <li><a href="/designers" target="_self" className="font-semibold text-white hover:text-purple-500">Designers</a></li>
                        <li><a href="/newArrivals" target="_self" className="font-semibold text-white hover:text-purple-500">New Arrivals</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
