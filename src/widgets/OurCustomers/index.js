"use client"
import React from 'react'
import styles from "./OurCustomers.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

const OurCustomers = () => {
    return (
        <section className={styles.customers}>
            <div className="container">
                <h2 className={`${styles.title} h2`}>Our Customers
                </h2>
                <p>The documentation required may vary depending on the jurisdiction and business type. Typically, you will need:
                </p>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                   className={styles.swiper}
                   speed={1000}
                   modules={[Autoplay]}
                   autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                >
                    <SwiperSlide>
                        <figure>
                            <Image src="/images/works/bahrain-economic-dpt.jpg" fill alt="cust" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/images/works/creatve-cty-fuj.jpg" fill alt="cust" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/images/works/dept-of-trnsport-abudhabi.jpg" fill alt="cust" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/images/works/mol-bahrain.jpg" fill alt="cust" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/images/works/bahrain-economic-dpt.jpg" fill alt="cust" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/images/works/creatve-cty-fuj.jpg" fill alt="cust" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <Image src="/images/works/dept-of-trnsport-abudhabi.jpg" fill alt="cust" />
                        </figure>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default OurCustomers