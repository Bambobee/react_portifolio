
// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    avator: AVTR1,
    name: "Tina snow",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Seducimus voluptates molestias repellat consectetur, exercitationemexplicabo qui doloremque ex facere.",
  },

  {
    avator: AVTR2,
    name: "Shatta Wale",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Seducimus voluptates molestias repellat consectetur, exercitationemexplicabo qui doloremque ex facere.",
  },
  {
    avator: AVTR3,
    name: "Kwane Despite",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Seducimus voluptates molestias repellat consectetur, exercitationemexplicabo qui doloremque ex facere.",
  },
  {
    avator: AVTR4,
    name: "Nana Ama McBrown",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Seducimus voluptates molestias repellat consectetur, exercitationemexplicabo qui doloremque ex facere.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        {data.map(({ avator, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avator} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
               {review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
