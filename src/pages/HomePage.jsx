import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import MenuAppBar from '../components/NavibarComponent';
import CorouselComponent from '../components/CorouselComponent';
import SvgComponent from "../components/SvgsComponent";
import { Image } from 'react-bootstrap';
import { PiStarFourFill } from 'react-icons/pi';
import CardComponent from '../components/CardComponent';
import TestinomialCardComponent from '../components/TestinomialCardComponent';
import FooterComponent from '../components/FooterComponent';
import ContactComponent from '../components/ContactComponent';
import LoaderComponent from '../components/LoaderComponent';
import Card2Component from '../components/Card2Component';
import Card3Component from '../components/Card3Component';
import WhyChooseComponent from '../components/WhyChooseComponent';
import FAQSectionComponent from '../components/FAQSectionComponent';
import RadioComponent from '../components/RadioComponent';
import RoadMapComponent from '../components/RoadMapComponent';

const HomePage = () => {
  const starsContent = ["HAIRCUTTING", "SHAVING", "STYLING", "TRIMMING", "HAIRCUTTING"];
  const starSectionRef = useRef(null);
  const leftRightSectionRef = useRef(null);
  const collageRef = useRef(null)
  const offersSectionRef = useRef(null)
  const whyChooseSectionRef = useRef(null)
  const testinomialRef = useRef(null)


  const starIsInView = useInView(starSectionRef, { once: true })
  const leftRightSectionIsInView = useInView(leftRightSectionRef, { once: true })
  const collageIsInView = useInView(collageRef)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        top
      });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  useEffect(() => {
    console.log(starIsInView)
  }, [starIsInView, leftRightSectionIsInView])


  return (
    <div>
      <MenuAppBar />
      <CorouselComponent />
      <div className="star-section container my-5" ref={starSectionRef}>
        <p className='star-contents d-flex justify-content-between text-light'>
          {starsContent.map((content, idx) => (
            <motion.span
              key={idx}
              className='star text-light mx-2'
              initial={{ x: -100, opacity: 0, scale: 0, y: 0 }}
              whileHover={{ y: 5 }}
              animate={starIsInView ? { x: 0, opacity: 1, scale: 1, transition: { duration: 0.3, delay: idx * 0.2 } } : {}}
            >
              <PiStarFourFill className='star text-light mx-2' />{content}
            </motion.span>
          ))}
        </p>
      </div>

      <div className="radio-input">
        <input
          checked=""
          className="r-input"
          type="radio"
          name="radio"
          onClick={() => scrollToTop()}
        />
        <input
          className="r-input"
          type="radio"
          name="radio"
          onClick={() => scrollToSection(starSectionRef)}
        />
        <input
          className="r-input"
          type="radio"
          name="radio"
          onClick={() => scrollToSection(collageRef)}
        />
        <input
          className="r-input"
          type="radio"
          name="radio"
          onClick={() => scrollToSection(offersSectionRef)}
        />
        <input
          className="r-input"
          type="radio"
          name="radio"
          onClick={() => scrollToSection(whyChooseSectionRef)}
        />
        <input
          className="r-input"
          type="radio"
          name="radio"
          onClick={() => scrollToSection(testinomialRef)}
        />
      </div>

      <div className="container-fluid left-right-content d-flex justify-content-between pt-2" ref={leftRightSectionRef} >
        <motion.div className="left-content mx-5"
          initial={{ x: "-100vw", opacity: 0, scale: 0 }}
          animate={leftRightSectionIsInView ? { x: "0vw", opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } } : {}}>
          <h1 className='left-heading gold'>Experience the Art of Timeless Grooming</h1>
          <p>Welcome to our distinguished barber shop, where the traditions of timeless grooming meet contemporary excellence. At our establishment, we don't just cut hair; we craft experiences that leave you not only looking your best but feeling your best.</p>
        </motion.div>
        <div className="right">
          <motion.img
            fluid
            src="https://github.com/Modiperin/BarberFrontend/blob/master/src/Images/salon.jpg?raw=true"
            alt=""
            initial={{ x: "100%", opacity: 0 }}
            animate={leftRightSectionIsInView ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.8 } } : {}}
          />
        </div>
      </div>

      <div className="collage row container d-flex mx-auto">
        <div className="column col-1" ref={collageRef}>
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={collageIsInView ? { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.1 } } : {}}
            whileHover={{ filter: "brightness(50%)", cursor: 'pointer' }}
            src="/man-image-3.jpg"
            alt=""
          />
        </div>
        <div className="column col-2">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={collageIsInView ? { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } } : {}}
            whileHover={{ filter: "brightness(50%)", cursor: 'pointer' }}
            src="/man-image-2.jpg"
            alt=""
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={collageIsInView ? { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } } : {}}
            whileHover={{ filter: "brightness(50%)", cursor: 'pointer' }}
            src="/man-image-6.jpg"
            alt=""
          />
        </div>
        <div className="column col-3">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={collageIsInView ? { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } } : {}}
            whileHover={{ filter: "brightness(50%)", cursor: 'pointer' }}
            src="/man-image-5.jpg"
            alt=""
          />
        </div>
        <div className="column col-4">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={collageIsInView ? { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } } : {}}
            whileHover={{ filter: "brightness(50%)", cursor: 'pointer' }}
            src="/man-image-1.jpg"
            alt=""
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={collageIsInView ? { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } } : {}}
            whileHover={{ filter: "brightness(50%)", cursor: 'pointer' }}
            src="/man-image-4.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="offers-section text-dark container" ref={offersSectionRef}>
        <h2 className='text-center'><span className='gold'>OFFERS</span> FOR NEW CUSTOMERS</h2>
        <div className="cards d-flex justify-content-evenly align-items-center my-5">
          <Card2Component imageUrl="https://barbershopsudbury.com/wp-content/uploads/2023/03/The-Barber-Shop-Sudbury-Feature-Product-Barber-Shop-Sudbury-Gift-Card.jpg" />
          <Card2Component imageUrl="https://cdn-nearcut.s3.amazonaws.com/HAINOR/large_312AE56F-286D-4431-AA92-9772D696A54D.png" />
          <Card2Component imageUrl="https://cdn5.vectorstock.com/i/1000x1000/31/79/hipster-barber-shop-business-card-design-template-vector-41213179.jpg" />
        </div>
      </div>

      <WhyChooseComponent whyChooseSectionRef={whyChooseSectionRef} />

      <FAQSectionComponent />

      <div className="testinomial my-5">
        <TestinomialCardComponent testinomialRef={testinomialRef} />
      </div>

      <RoadMapComponent />

      <ContactComponent />


      <FooterComponent />


    </div >
  );
}

export default HomePage;
