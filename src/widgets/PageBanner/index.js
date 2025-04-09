
'use client'
import React, { useEffect, useState } from 'react'
import styles from "./PageBanner.module.scss"
import Image from 'next/image'

const PageBanner = ({ title, banner}) => {

const [menuOpen, setMenuOpen] = useState(false);

 


  return (
    <section className={`${styles.page_banner}  `}>
      <Image src={banner} fill alt="page-banner" objectFit="cover" />
      <div className={`${styles.page_banner_content}`}>
        <div className="container">
          <div className={`${styles.w_100_container} w_100`}>
            <h1 className={`h2 ${styles.title}`}
            >{title}</h1>
          
          </div>
        </div>
      </div>

    </section>
  )
}

export default PageBanner
