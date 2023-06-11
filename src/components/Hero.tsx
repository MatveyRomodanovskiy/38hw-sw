import React from 'react';
import images from "../config/images-pathes.json";

const Hero = () => {
    return (
        <section className="float-start w-25 me-3">
            <img className="w-100" src={images.main} alt="Hero"/>
        </section>
    );
};

export default Hero;