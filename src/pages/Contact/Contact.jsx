import React from 'react';
import "./Contact.css";
import contactImg from "../../images/contact2.jpeg";

const Contact = () => {
  return (
    <section className='contact'>
      <div className='container'>
        <div className='section-title'>
          <h2>Contact Us</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {contactImg} alt = "" />
          </div>
          <div className='contact-text'>
            <h2 className='contact-title fs-26 ls-1'>About SublimeSpirits</h2>
            <p className='fs-17'> Immerse yourself in the captivating realm of cocktails at our website. Explore a diverse catalog of handcrafted drinks, carefully curated ingredients, and premium alcoholic beverages. Unleash your creativity, perfect your mixology skills, and elevate your drinking experience.</p>
            <p className='fs-17'>Whether you're a seasoned bartender or an aspiring home mixologist, our platform is your gateway to extraordinary libations. Elevate your cocktail game and embark on a flavorful adventure with us. Cheers to memorable moments and remarkable drinks!!!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
