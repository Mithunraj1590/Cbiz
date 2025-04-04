"use client"
import React, { useState } from 'react'
import styles from "./FaqList.module.scss"
import Accordion from '@/components/Accordion'
import SectionTitle from '@/components/SectionTitle'
import Link from 'next/link'

const FaqData = [
    {
        title: "How can I start a business in Dubai?",
        content: "Dubai is a thriving center for business activities, and the kingdom is divided into different zones. Consult a business setup advisor like CreateBiz who will handle all the formalities and documentation of starting your business in the UAE, like getting you the necessary licenses, visas, bank accounts, and more."
    },
    {
        title: "Which is the best place for doing business in UAE?",
        content: "The UAE offers three main business jurisdictions – the Mainland, Free Zone, and Offshore. Depending on the type of business you want to do, your budget, business model, and goals, our team can help you select the ideal location. Talk to our executive to know the different packages"
    },
    {
        title: "How to choose the best business setup consultants in Dubai?",
        content: "The best consultant will provide handholding services right from the ideation phase, through all the legalities and documentation, and continue to provide support services to enable smooth business operations. They will also be upfront with the charges involved, explain the process in detail, tell you the pros and cons of the different zones and the legal implications of each, and guide you to make an informed decision that will be in your best interests."
    }
]

const FaqList = ({type}) => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        
    };
    return (
        <section className={`${styles.faq_list} ${type === "home" ? styles.faq_list_home : ""}`}>
            <div className="container">
            <SectionTitle>
        <strong>Frequently </strong>Asked Questions
        </SectionTitle>
                <div className={styles.acordian_wrap}>
                    {FaqData.map((item, index) => (
                        <Accordion
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            toggleAccordion={toggleAccordion}
                            index={index}
                            type={type}
                        />
                    ))}
                </div>
                <div className={styles.btn_wrap}>
                <Link href="">
                  <button className="btns btns-primary">
                    <span>View All</span> 
                  <span className="arrow"></span>
                  </button>
                </Link>
                </div>
            </div>
        </section>
    )
}

export default FaqList