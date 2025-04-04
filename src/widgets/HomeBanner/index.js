import Image from "next/image";

import Style from "./HomeBanner.module.scss";


import Link from "next/link";


const HomeBanner = ({ props }) => {



  return (
    <section
      id="my-element-id"
      className={`${Style.homebanner_outer} `}
    >
      <div className={Style.homebanner}>
        <div className={`mb-0 ${Style.homebanner_figure}`}>
          <Image
            src="/images/banner.png"
            fill
            sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw "
            quality={10}
            alt="aaa"
          />
         
        </div>
      
        <div className="container text-white">
          <div className={Style.homebanner_text}>
            <h1 className={`h1 ${Style.homebanner_title}`} rel="preload">
              <span>Your Trusted Advisor for Business Setup in the UAE</span>
            </h1>
            <div className={Style.homebanner_content}>
              <p>Leverage our expertise to start your business in the UAE seamlessly and without hassles. We follow
              lofty ideals of professionalism, transparency, and ethics to forge and nourish lifelong relationships
              with clients.</p>
            </div>

            <div className={Style.homebanner_button}>
              
              <Link href="" className="btns cta-btn">
              <span className="btn-circle">
                <div className="icon arrow"></div>
              </span>
          
                 <span className="btn-text">Get Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
