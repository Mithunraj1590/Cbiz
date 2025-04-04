
import Style from "./WhoWeAre.module.scss";
import SectionTitle from "@/components/SectionTitle";
import Animate from "@/components/Animate";
import Link from "next/link";

const HistoryContent = [
  {
    years:"15+",
    description:"Marking our presence on Globe since 1995"
  },
  {
    years:"7K+",
    description:" Happy Customers and Growing!"
  },
]

const WhoWeAre = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section className={`${Style.whoweare} text-white`}>
     
      <div className="container container-sm">
        <div className="row">
          <div className="col-lg-7">
            <Animate as="div" className={Style.whoweare_content_outer}>
              <SectionTitle>
             <strong> Our track record</strong>
              is our biggest testimony!
              </SectionTitle>
              <div className={Style.whoweare_content}>
                <p>Our comprehensive, personalized services empower our clients to make informed decisions, pushing the boundaries of what they thought was possible. We drive growth, aligning people and stakeholder expectations to facilitate innovative approaches. With over 15 years of experience in the field, we have what it takes to ensure your success.</p>
                <ul>
                  <li>Free Consultation 24/7</li>
                  <li>One to One Approach</li>
                  <li>Transparency</li>
                </ul>
                <Link href="">
                  <button className="btns btns-primary">
                    <span>know More</span>
                    <span className="arrow"></span>
                  </button>
                </Link>
              </div>
            </Animate>
          </div>
          <div className="col-lg-5">
            <Animate as="div" className={Style.whoweare_info_outer}>
              <div className={Style.whoweare_info}>
                <h3 className={Style.whoweare_info_title}>
                 Who we are
                </h3>
                <div className={Style.whoweare_count}>
                  {HistoryContent?.map((item, index) => {
                    return (
                      <div className={Style.whoweare_count_item} key={index}>
                        <div className={Style.count}>{item?.years}</div>
                        <div className={Style.text}>{item?.description}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
