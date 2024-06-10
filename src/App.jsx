import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sarees from './pages/Sarees'
import SalwaarSuits from './pages/SalwaarSuits'
import Lehangas from './pages/Lehangas'
import Designers from './pages/Designers'
import Newarrivals from './pages/Newarrivals'
import Home from './pages/Home'
import Description from './pages/Description'
function navigate(url){
  window.location.href=url;
}
async function auth(){
  const response = await fetch("http://localhost:5172/user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include' // Include credentials in request
    });
  const data = await response.json();
  navigate(data.url);
}
const App = () => {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease in sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home></Home>}></Route>
          {/* <Route path='/signin' element={<Signin></Signin>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route> */}
          <Route path='/sale' element={<Home></Home>}></Route>
          <Route path='/sarees' element={<Sarees></Sarees>}></Route>
          <Route path='/salwaar-suits' element={<SalwaarSuits></SalwaarSuits>}></Route>
          <Route path='/lehangas' element={<Lehangas></Lehangas>}></Route>
          <Route path='/designers' element={<Designers></Designers>}></Route>
          <Route path='/newArrivals' element={<Newarrivals></Newarrivals>}></Route>
          <Route path='/description' element={<Description></Description>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App