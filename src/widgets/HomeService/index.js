"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Style from "./HomeService.module.scss";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import Animate from "@/components/Animate";

const ServiceData=[
  {
    title:"Minland",
    image:"/images/minland.png",
    link:"/"
  },
  {
    title:"Freezone",
    image:"/images/freezone.png",
     link:"/"
  },
  {
    title:"Offshore",
    image:"/images/offshore.png",
     link:"/"
  }
]

const HomeService = ({ props }) => {
  const parse = require("html-react-parser");
  return (
    <Animate as="section" className={Style.service}>
      <div className="container">
        <SectionTitle>
        <strong>From Idea to</strong> Execution
        </SectionTitle>
         <Swiper
          slidesPerView={1.32}
          spaceBetween={10}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 2.2,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className={Style.service_swiper}
        >
          {ServiceData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <ServiceCard props={data} />
              </SwiperSlide>
            );
          })}
        </Swiper> 
      
      </div>
    </Animate>
  );
};
export default HomeService;
