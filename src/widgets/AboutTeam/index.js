import React from 'react'
import styles from "./AboutTeam.module.scss"
import Image from 'next/image'
import { FaLinkedinIn } from "react-icons/fa6";
import SectionTitle from '@/components/SectionTitle';

const AboutTeam = () => {
    return (
        <section className={styles.about_team}>
            <div className="container">
              <h2 className={`${styles.title} h2`} >Our Team</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className={styles.card}>
                            <span className={styles.icon}><FaLinkedinIn /></span>
                            <figure>
                                <Image src="/images/team1.jpeg" fill alt="team" />
                            </figure>
                            <p>Avery Davis </p>
                            <span>MARKETING EXPERT</span>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.card}>
                        <span className={styles.icon}><FaLinkedinIn /></span>
                            <figure>
                                <Image src="/images/team2.jpg" fill alt="team" />
                            </figure>
                            <p>Avery Davis </p>
                            <span>MARKETING EXPERT</span>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.card}>
                        <span className={styles.icon}><FaLinkedinIn /></span>
                            <figure>
                                <Image src="/images/team1.jpeg" fill alt="team" />
                            </figure>
                            <p>Avery Davis </p>
                            <span>MARKETING EXPERT</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTeam