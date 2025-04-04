"use client";
import React, { useState } from "react";
import styles from "./HomeOtherServices.module.scss";

import ClassicGrid from "@/components/ClassicGrid";
import Tabs from "@/components/Tab";
import TextBlockFull from "@/components/TextBlockFull";
import SectionTitle from "@/components/SectionTitle";


const HomeOtherServices = () => {
  const [open, setOpen] = useState(false);



  const content = [
    {
      title: "PRO Services",
      image: "/images/room_01.jpg",
      icon:"list",
      content:
        "Get reliable and efficient representatives to liaise and coordinate with government agencies, who will handle and simplify all the documentation process while you focus on your core tasks.",
      list:[
        {
          item:"Visa & Immigration Services"
        },
        {
          item:"Trade License Services"
        },
        {
          item:"Document Attestation & Notarization"
        },
        {
          item:"Bank Account Assistance"
        }
      ]  
    },
    {
      title: "Other Essentials:",
      image: "/images/room_01.jpg",
      icon:"delux_sm",
      content:
        " Apart from PRO Services, here are other key Post-Business Setup Services that businesses may require",
        list:[
          {
            item:"Accounting & Taxation Services"
          },
          {
            item:"Business Growth & Operational Support"
          },
          {
            item:"Company Auditing"
          },
          {
            item:"Legal & Compliance Services"
          }
        ]  
    },
  ];

  return (
    <section className={`${styles.home_room_type}`}>
      <div className="container">
   
        <div className={styles.home_room_ul}>
          <div className={styles.dk}>
            {content.map((data, i) => (
              <ClassicGrid data={data} key={i} />
            ))}
          </div>
          <div className={styles.sm}>
            <Tabs tabData={content} />
          </div>
          <TextBlockFull
            title="Learn What we can do to support your business."
            description="If you already have a business in the UAE, CreateBiz has a suite of services to support you, and help you operate it smoothly. Drive growth and efficiency and gain a competitive edge in the industry."
            linkHref="/other-services"
            linkText="View All"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeOtherServices;
