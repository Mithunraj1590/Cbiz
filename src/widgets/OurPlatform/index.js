import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import styles from "./OurPlatform.module.scss"

const OurPlatform = () => {
  return (
    <section className={styles.our_platgorm}>
      <div className="container">

        <SectionTitle>
          <strong> Experience</strong>
          Our Platforms Yourself
        </SectionTitle>
        <div className={styles.platform_wrap}>
        <div className="row">
          <div className="col-lg-3">
            <div className={styles.card}>
              <p>Client-Centric Work Environment</p>
            </div>
          </div>
          <div className="col-lg-3">
          <div className={styles.card}>
              <p>Client-Centric Work Environment</p>
            </div>
          </div>
          <div className="col-lg-3">
          <div className={styles.card}>
              <p>Client-Centric Work Environment</p>
            </div>
          </div>
          <div className="col-lg-3">
          <div className={styles.card}>
              <p>Client-Centric Work Environment</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default OurPlatform