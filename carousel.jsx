import React from "react";
import {CarouselData} from '../Data/CarouselData';
import {useState, useEffect} from 'react';

const Carousel = () => {
    const [carousel,setCarousel]

    return(
        <div>
            <img src={CarouselData[carousel].image} alt="" />
        </div>
    )
}
