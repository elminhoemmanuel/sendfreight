import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Keyboard, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import TestimonialsPage from './TestimonialsPage';

SwiperCore.use([Navigation, Keyboard, Pagination, Autoplay]);

const Testimonials = () => {

    const slides = [];

    for (let i = 0; i < 3; i += 1) {
        // console.log("test page", testData[i]);
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag='li'>
                <TestimonialsPage />
            </SwiperSlide>
        )
    }

    return (
        <div>
            <Swiper id='main' tag="section" wrapperTag="ul"
                keyboard slidesPerView={1} spaceBetween={10} pagination={{ "clickable": true }} autoplay={{
                    "delay": 12000,
                    "disableOnInteraction": false
                }}
            >
                {slides}
            </Swiper>
        </div>
    )
}

export default Testimonials
