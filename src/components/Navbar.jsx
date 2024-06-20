import React, { useEffect, useState } from "react";
import Logo2 from "../assets/logo2.png";
import { FaCartShopping } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function checkAdminStatus() {
    try {
      const response = await axios.post(
        "http://localhost:5172/admin/signin",
        {
          username: user.given_name || "",
          email: user.email,
          name: user.name || "",
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "*",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(response.data);
      const admin = response.data.res.isAdmin;
      if (admin) {
        setIsAdmin(true);
      }
    } catch (error) {
      console.error("Error fetching admin status:", error);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      checkAdminStatus();
    }
  }, [isAuthenticated]);

  return (
    <div className="shadow-lg">
      <header className="bg-[#290133] text-white">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="/" target="_self">
              <img src={Logo2} alt="Logo2" className="w-32 h-auto" />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-[#4D135C] hover:bg-[#7E408D] transition-all duration-200 text-white py-2 px-6 rounded-full flex items-center gap-2">
              <FaCartShopping className="text-xl" />
              <span className="hidden md:inline">Cart</span>
            </button>
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div className="text-right">
                  <h3 className="text-sm font-semibold">{user.name}</h3>
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                    className="text-xs text-white hover:text-red-400"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={loginWithRedirect}
                className="bg-white text-purple-800 py-2 px-4 rounded-full transition-all duration-300 hover:bg-purple-700 hover:text-white"
              >
                Login
              </button>
            )}
          </div>
          <button
            className="block md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </nav>
      </header>
      <div className={`bg-[#1B0022] ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row justify-center items-center gap-8 py-4">
            <li>
              <a
                href="/sale"
                target="_self"
                className="font-semibold text-white hover:text-purple-500"
              >
                Sale
              </a>
            </li>
            <li>
              <a
                href="/sarees"
                target="_self"
                className="font-semibold text-white hover:text-purple-500"
              >
                Sarees
              </a>
            </li>
            <li>
              <a
                href="/salwaar-suits"
                target="_self"
                className="font-semibold text-white hover:text-purple-500"
              >
                Salwaar Suits
              </a>
            </li>
            <li>
              <a
                href="/lehangas"
                target="_self"
                className="font-semibold text-white hover:text-purple-500"
              >
                Lehangas
              </a>
            </li>
            <li>
              <a
                href="/designers"
                target="_self"
                className="font-semibold text-white hover:text-purple-500"
              >
                Designers
              </a>
            </li>
            <li>
              <a
                href="/newArrivals"
                target="_self"
                className="font-semibold text-white hover:text-purple-500"
              >
                New Arrivals
              </a>
            </li>
            {isAdmin && (
              <li className="relative group">
                <a
                  href="/admin"
                  target="_self"
                  className="font-semibold text-red-500 hover:text-purple-500"
                >
                  Admin
                </a>
                <div className="relative">
                  <ul className="bg-[#1B0022] absolute left-0 mt-2 w-48 shadow-lg rounded-md py-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li>
                      <a
                        href="/admin/editItems"
                        target="_self"
                        className="block px-4 py-2 text-white hover:text-purple-500"
                      >
                        Edit Items
                      </a>
                    </li>
                    <li>
                      <a
                        href="/admin/inventory"
                        target="_self"
                        className="block px-4 py-2 text-white hover:text-purple-500"
                      >
                        Inventory
                      </a>
                    </li>
                    <li>
                      <a
                        href="/admin/orders"
                        target="_self"
                        className="block px-4 py-2 text-white hover:text-purple-500"
                      >
                        Orders
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;