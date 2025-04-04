import React from 'react'
import styles from "./ClassicGrid.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import { FaPassport, FaUniversity, FaBalanceScale, FaChartLine } from "react-icons/fa";
import { MdBusinessCenter, MdAssignment } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { BsCalculator } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";

const getIcon = (type) => {
  switch (type) {
    case "Visa & Immigration Services":
      return <FaPassport className="text-blue-500" size={18} />;
    case "Trade License Services":
      return <MdBusinessCenter className="text-gray-700" size={18} />;
    case "Document Attestation & Notarization":
      return <HiDocumentText className="text-yellow-500" size={18} />;
    case "Bank Account Assistance":
      return <FaUniversity className="text-green-500" size={18} />;
    case "Accounting & Taxation Services":
      return <BsCalculator className="text-purple-500" size={18} />;
    case "Business Growth & Operational Support":
      return <FaChartLine className="text-indigo-500" size={18} />;
    case "Company Auditing":
      return <RiFileList3Line className="text-red-500" size={18} />;
    case "Legal & Compliance Services":
      return <FaBalanceScale className="text-gray-600" size={18} />;
    default:
      return null;
  }
};
const ClassicGrid = ({ data }) => {
  return (
    <div className={`d-flex flex-wrap  ${styles.classic_grid}`}
    >


      <div className={styles.room_img_block}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <figure className={`${styles.room_img_block_figure} mx_auto h_100`}>
          <Image src={data?.image} fill alt="about_simplify_img" />
        </figure>
      </div>

      <div className={`${styles.room_txt_block} `}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="600">

        <h3 className={`h3 ${styles.title}`}>{data?.title}</h3>
        <p>{data?.content}</p>
        <ul>
        {data?.list?.map((item,i)=>{
          return(
            <li key={i}>
                {getIcon(item.name || item.item)}
              {item.item}
              </li>
          )
        })}
        </ul>
        <Link href={`${data?.link?.url}`} className="btn btn_primary-outline mt_40">{data?.link?.text}</Link>
      </div>


    </div>
  )
}

export default ClassicGrid