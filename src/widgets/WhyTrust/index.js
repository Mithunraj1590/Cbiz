import React from 'react'
import styles from "./WhyTrust.module.scss"
import SectionTitle from '@/components/SectionTitle'

const WhyTrust = () => {
  return (
    <section className={styles.home_about}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-lg-6`}>
            <div className={styles.fun_fact_listlg}>
              <ul className={styles.achivement}>
                <li>
                  <div className={styles.fun_fact}>
                    <div className={styles.counter}>
                      <div className={styles.timer} data-to="7" data-speed="5000">7</div>
                      <div className={styles.operator}>K+</div>
                    </div>
                    <span className={styles.medium}>Happy Customers</span>
                  </div>
                </li>
                <li>
                  <div className={styles.fun_fact}>
                    <div className={styles.counter}>
                      <div className={styles.timer} data-to="5" data-speed="5000">5</div>
                      <div className={styles.operator}>K+</div>
                    </div >
                    <span className={styles.medium}>Licenses Issued</span>
                  </div >
                </li >
                <li>
                  <div className={styles.fun_fact}>
                    <div className={styles.counter}>
                      <div className={styles.timer} data-to="30" data-speed="5000">30</div>
                      <div className={styles.operator}>+</div>
                    </div >
                    <span className={styles.medium}>Partnerships</span>
                  </div >
                </li >
              </ul >
            </div >
          </div >
          <div className={`col-lg-6`}>
            < div className={styles.content}>
            <h4 className={`ttl ttl-18 ${styles.sub_title}`}>Why Trust CreateBiz?</h4>
            <SectionTitle>
        <strong>Our track record</strong> is our biggest testimony!
        </SectionTitle>
             
              <p>Our comprehensive, personalized services empower our clients to make informed decisions, pushing the
                boundaries of what they thought was possible. We drive growth, aligning people and stakeholder
                expectations to facilitate innovative approaches. With over 15 years of experience in the field, we have
                what it takes to ensure your success.</p>

              <div className={`row align-items-center`}>
                <div className={`col-lg-7`}>
                  <ul>
                    <li>Dedicated Business Consultant</li>
                    <li>Listed with major free zones in UAE</li>
                    <li>15+ Years of Experience </li>
                    <li>Tailor Made approach</li>
                  </ul>
                </div>
                <div className="col-lg-5">
                  <h4 className={`ttl ${styles.experince}`}>15+
                    <span>Years of experience</span>
                  </h4>
                </div>
              </div>
              <a href="" className="btns btns-primary">
                <span>Know More</span>
                <span className="arrow"></span>
              </a>
            </div >
          </div >
        </div >
      </div >
    </section >
  )
}

export default WhyTrust