import Animate from "@/components/Animate";
import Style from "./HomeContact.module.scss";

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";


const HomeContact = () => {
  const parse = require("html-react-parser");

    return (
    <section className={Style.contact}>
      
      <figure className={`mb-0 ${Style.contact_banner}`}>
        <Image
          src="/images/home-contact.jpeg"
          alt="contact"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
          quality={100}
        />
      </figure>
      <div className={Style.contact_content_area}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Animate as="div" className={Style.contact_content}>
                <SectionTitle className={Style.contact_title}>
                  <strong>Experience</strong>
                 Our Platforms Yourself
                </SectionTitle>
                <div className={Style.contact_content_p}>
                Experience a live demo, get answers to your specific questions, and find out why our platforms are the right choice for your organization.
                </div>
                <Link href="">
                  <button className="btns btns-primary">
                    <span> Contact Us</span> 
                  <span className="arrow"></span>
                  </button>
                </Link>
              
              </Animate>
            </div>
            <div className="col-lg-6">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeContact;
