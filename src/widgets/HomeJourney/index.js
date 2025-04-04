"use client"
import Style from "./HomeJourney.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import NewsListCard from "@/components/NewsListCard";
import Animate from "@/components/Animate";

const NewsBlogs = [
  {
    title:"Blog",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link:"/"
  },
  {
    title:"Blog",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
     link:"/"
  },
  {
    title:"Blog",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
     link:"/"
  }
]


const HomeJourney = ({ props }) => {
  const parse = require("html-react-parser");
    return (
    <section className={Style.journey}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            <Animate as="div" className={Style.col_content}>
              <SectionTitle>
                <strong>Latest</strong>
                From the Blog
              </SectionTitle>

              <div className={Style.journey_blocks}>
                {NewsBlogs?.map((item, i) => {
                  return <NewsListCard key={i} props={item} />;
                })}
              </div>
              <div className={Style.journey_viewmore}>
                <Link href="">
                  <button className="btns btns-primary">
                    <span>know More</span>
                    <span className="arrow"></span>
                  </button>
                </Link>
              </div>
            </Animate>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <Animate as="div" className={Style.offer}>
              <Swiper
                grabCursor={true}
                loop={true}
                effect={"creative"}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
                // creativeEffect={{
                //   prev: {
                //     shadow: false,
                //     translate: ["-20%", 0, -1],
                //   },
                //   next: {
                //     translate: ["100%", 0, 0],
                //   },
                // }}
                modules={[EffectCreative, Pagination, Autoplay]}
                className={Style.offer_slider}
              >
               <SwiperSlide className={Style.offer_item} >
                        <div className={Style.offer_item_wrap}>
                          <figure className="mb-0">
                            <Image src="/images/blog.jpg" fill 
                            alt="img"
                            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 35vw"/>
                          </figure>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className={Style.offer_item} >
                        <div className={Style.offer_item_wrap}>
                          <figure className="mb-0">
                            <Image src="/images/blog.jpg" fill 
                            alt="img"
                            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 35vw"/>
                          </figure>
                        </div>
                      </SwiperSlide>
              </Swiper>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeJourney;
