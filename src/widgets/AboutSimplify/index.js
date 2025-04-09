'use client'
import React, { useEffect, useState } from 'react'
import styles from "./AboutSimplify.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const AboutSimplify = ({ title, description, imageSrc}) => {

  return (
    <section className={styles.about_simplify}>
      <div className="container">

      <div className={`${styles.head_wrap} d_flex_wrap`}>

        <h2 className={`h2 ${styles.title}`}
          data-aos="fade-up"
          data-aos-duration="1000"
        >{title}</h2>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300">
          <p>{description}</p>
          
        </div>

      </div>
      
        <figure className={styles.about_simplify_img}>
          <Image src={imageSrc} fill alt="About Simplify" />
        </figure>
      </div>

    </section>
  )
}

export default AboutSimplify
