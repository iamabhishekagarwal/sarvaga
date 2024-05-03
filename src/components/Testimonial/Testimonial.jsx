import React from 'react'
import image1 from"../../assets/image1.jpeg"
import image2 from"../../assets/image2.jpeg"
import image3 from"../../assets/image3.jpeg"
import Slider from "react-slick"
const Testimonials=[
    {
        id:1,
        img:image1,
        title:"upto 50% off on all saree wears",
        name:"Aditya",
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni facere molestiae aliquid consequatur?'
    },
    {
        id:2,
        img:image2,
        name:"Aditya",
        title:"upto 30% off on all saree wears",
        description:    
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni facere molestiae aliquid consequatur?'
    },
    {
        id:3,
        img:image3,
        name:"Aditya",
        title:"upto 20% off on all saree wears",
        description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni facere molestiae aliquid consequatur?'
    },
]

const Testimonial = () => {
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
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true,

                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2,

                },
            },  
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    

                },
            },
            

        ]


    };
    
  return (

    <div className='py-10 flex justify-center mt-10'>
        <div className='container'>
            {/* header section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className='text-pretty  text-purple-900 py-1 '>What our customers Say</p>
            <h1 data-aos="fade-up" className="text-lg text-black  font-bold ">Testimonials</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deleniti natus! Voluptate, enim assumenda?</p>
            </div>
            {/* testimonial card section */}
            <div
            data-aos="zoom-in"
            >
                <Slider {...settings}>
                    {Testimonials.map((data)=>(
                        <div className='my-6'>
                            <div
                        key={data.id}
                        className='flex flex-col gap-4 shadow-lg shadow-black py-8 px-6 bg-purple-100 rounded-xl relative '>
                            <div className='mb-4'>
                                < img src={data.img}
                                className='rounded-full w-20 h-20'/>

                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='space-y-3 '>
                                <p className='text-xs text-gray-400'>{data.description}</p>
                                <h1 className='text-xl font-bold text-black/80'>{data.name}</h1>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    </div>
  )
}

export default Testimonial