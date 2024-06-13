import React from 'react';
import image1 from "C:/Users/iamab/sarvaga/src/assets/sarees/product 1/_DSC1394-2.JPG";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: image1,
        title: "Up to 50% off on all saree wears",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni facere molestiae aliquid consequatur?'
    },
    {
        id: 2,
        img: image2,
        title: "Up to 30% off on all saree wears",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni facere molestiae aliquid consequatur?'
    },
    {
        id: 3,
        img: image3,
        title: "Up to 20% off on all saree wears",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni facere molestiae aliquid consequatur?'
    },
];

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200'>
            <div className='container mx-auto'>
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className='flex flex-col justify-center gap-4 text-center sm:text-left order-2 sm:order-1 p-6 sm:p-12'>
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-once="true"
                                        data-aos-duration="500"
                                        className='text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-800'>
                                        {data.title}
                                    </h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        className='text-md text-gray-700'>
                                        {data.description}
                                    </p>
                                    <div>
                                        <button
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                            data-aos-delay="300"
                                            className='bg-gradient-to-r from-purple-700 to-purple-900 hover:scale-105 transition-transform duration-200 text-white py-2 px-6 rounded-full'>
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                <div className='order-1 sm:order-2 flex justify-center items-center'>
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        className='relative'>
                                        <img src={data.img} alt="Promotion"
                                            className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] object-cover rounded-lg shadow-lg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Hero;
