import React from 'react'
import banner1 from '../../assets/banner1.jpeg'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'
import {GrSecure} from 'react-icons/gr'

const Banner = () => {
  return (
    <div className='min-h-[500px] flex justify-center py-12 sm:py-0'>
        <div className='container bg-gray-100 py-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
                {/* imagesection */}
                <div data-aos="zoom-in">
                    <img src={banner1} alt="" className='max-w-[400px] h-[350px] mx-auto  shadow-xl shadow-black rounded-xl '/>
                </div>
                {/*text section*/} 
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                  <h1 data-aos="fade-up" classname="text-3xl sm:text-4xl font-bold">Winter sale upto 50% off</h1>
                  <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nemo inventore ex odit optio saepe.
                  </p>
                  <div className='flex flex-col gap-4'>
                    <div data-aos="fade-up" className='flex items-center gap-4'>
                      <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100"/>
                        <p>Quality Products</p>
                    </div>
                    <div data-aos="fade-up" className='flex items-center gap-4' >
                      <IoFastFood className='text-4xl h-12 w-12  p-4  rounded-full bg-orange-100'/>
                      <p>Fast delivery</p>
                    </div>
                    <div data-aos="fade-up" className='flex items-center gap-4' >
                      <GiFoodTruck className='text-4xl h-12 w-12  p-4  rounded-full bg-green-100'/>
                      <p>Easy payment Method</p>
                    </div>
                    <div data-aos="fade-up" className='flex items-center gap-4' >
                      <IoFastFood className='text-4xl h-12 w-12  p-4  rounded-full bg-yellow-100'/>
                      <p>Get offers</p>
                    </div>


                  </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Banner