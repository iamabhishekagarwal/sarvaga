import React from 'react'
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'
import {FaStar} from "react-icons/fa6";
const ProductsData=[
    {
        id:1,
        img:img1,
        title:"women ethnic",
        rating:5.0,
        author:"ambarish",
        aosDelay:"0",

    },
    {
        id:2,
        img:img2,
        title:"women western",
        rating:5.0,
        author:"sumedha",
        aosDelay:"200",
    },
    {
        id:3,
        img:img3,
        title:"women traditionals",
        rating:5.0,
        author:"aakash",
        aosDelay:"400",
    }

]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className='text-sm text-black'>top selling products for you</p>
            <h1 data-aos="fade-up" classname="text-3xl font-bold">products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deleniti natus! Voluptate, enim assumenda?</p>
        </div>
        {/* body section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md-grid-cols-4 lg-grid-cols-5 place-items-center gap-5'>
                {/* card sections */}
                {ProductsData.map((data)=>(
                    <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay} 
                    key={data.id} className="space-y-3">
                        <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md'/>
                        <div>
                            <h3 className="font-semibold">{data.title}</h3>
                            <p className='text-sm text-gray-600'>{data.author}</p>
                            <div className="flex items-center gap-1">
                            <FaStar className="text-yellow 400"/>
                            <span>{data.rating}</span>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>


    </div>
    </div>
  )
}

export default Products