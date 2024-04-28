import React from 'react'
import image1 from"../../assets/image1.jpeg"
import image2 from"../../assets/image2.jpeg"
import image3 from"../../assets/image3.jpeg"
import Slider from "react-slick"

const ImageList=[
    {
        id:1,
        img:image1,
        title:"upto 50% off on all saree wears",
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni facere molestiae aliquid consequatur?'
    },
    {
        id:2,
        img:image2,
        title:"upto 30% off on all saree wears",
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni facere molestiae aliquid consequatur?'
    },
    {
        id:3,
        img:image3,
        title:"upto 20% off on all saree wears",
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni facere molestiae aliquid consequatur?'
    },
]

const Hero = () => {
    var settings={
        dots:false,
        arrows:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,


    };
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px]  bg-gray-100 flex justify-center items-center duration:200'>
        <div className='container pb- sm:pb-0'>
            <Slider {...settings}>
                {ImageList.map((data)=>(
                <div>
            
            <div className="grid grid  sm:grid-cols-2">
                <div
                
                className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                    <h1 
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                    <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className='text-sm'>{data.description}</p>
                    <div>
                        <button
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="300"
                         className='bg-gradient-to-r from-purple-700 to-purple-900 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                            Order now
                        </button>
                    </div>
                </div>
                <div
                
                className='order-1 sm:order-2 '>
                    <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className='relative z-10'>
                        <img src={data.img} alt="image1"
                        className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain lg:scale-120 mx-auto '/>
                    </div>
                </div>


            </div>
        </div>))}
            

            </Slider>
            
        </div>
    </div>
  )
}

export default Hero