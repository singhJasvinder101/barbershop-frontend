import React from 'react'
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
const CorouselComponent = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <Image className='corouselImage' src='/salon2.jpg' fluid />
                    <div className="main-content">
                        <div><span className='main-heading'>STEP INTO STYLE</span></div>
                        <p className='main-subheading'> BarberShop Welcomes You ! to Elevate Your Grooming Experience at our Barbershop The Ultimate Destination for Modern Gentlemen So Elevate Your Grooming Experience at Barbershop</p>
                        <motion.button
                            className='knowMore-btn w-25 px-2 py-2'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Know More</motion.button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className='corouselImage' src='/banner4.jpg' fluid />
                    <div className="main-content">
                        <div><span className='main-heading'>STEP INTO STYLE</span></div>
                        <p className='main-subheading'> BarberShop Welcomes You ! to Elevate Your Grooming Experience at our Barbershop The Ultimate Destination for Modern Gentlemen So Elevate Your Grooming Experience at Barbershop</p>
                        <motion.button
                            className='knowMore-btn w-25 px-2 py-2'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Know More</motion.button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className='corouselImage' src='/salon3.jpg' fluid />
                    <div className="main-content">
                        <div><span className='main-heading'>STEP INTO STYLE</span></div>
                        <p className='main-subheading'> BarberShop Welcomes You ! to Elevate Your Grooming Experience at our Barbershop The Ultimate Destination for Modern Gentlemen So Elevate Your Grooming Experience at Barbershop</p>
                        <motion.button
                            className='knowMore-btn w-25 px-2 py-2'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Know More</motion.button>
                    </div>
                </Carousel.Item>
            </Carousel>
            {/* <div className='corouselImage w-100'>
                <div className="main-content">
                    <div><span className='main-heading'>STEP INTO STYLE</span></div>
                    <p className='main-subheading'> BarberShop Welcomes You ! to Elevate Your Grooming Experience at our Barbershop The Ultimate Destination for Modern Gentlemen So Elevate Your Grooming Experience at Barbershop</p>
                    <motion.button
                        className='knowMore-btn w-25 px-2 py-2'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >Know More</motion.button>
                </div>
            </div> */}
        </div>
    )
}

export default CorouselComponent
