import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide1 slide"></SwiperSlide>
        <SwiperSlide className="slide2 slide"></SwiperSlide>
        <SwiperSlide className="slide3 slide"></SwiperSlide>
        <SwiperSlide className="slide4 slide"></SwiperSlide>
        <SwiperSlide className="slide5 slide"></SwiperSlide>
        <SwiperSlide className="slide6 slide"></SwiperSlide>
        {/* <SwiperSlide className="slide7 slide">Slide 7</SwiperSlide> */}
        {/* <SwiperSlide className="slide8 slide">Slide 8</SwiperSlide> */}
        {/* <SwiperSlide className="slide9 slide">Slide 9</SwiperSlide> */}
      </Swiper>

      <div className="row">
        <div className="col-md-4">
          <div class="card">
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
          </div>
        </div>
      </div>

      {/* <div className="itemsrow">
        <img src="public\Screenshot (251).png" alt="" />
      </div> */}

      <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f" />
            </a>
            {/* Twitter */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter" />
            </a>
            {/* Google */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google" />
            </a>
            {/* Instagram */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram" />
            </a>
            {/* Linkedin */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            {/* Github */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github" />
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright -:
          <a className="text-white" href="#">
             HandicraftStore.com
          </a>
        </div>
        {/* Copyright */}
      </footer>

    </>
    
  );
}

export default Home