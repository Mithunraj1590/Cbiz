import Image from "next/image";
import Link from "next/link";

import Style from "./ServiceCard.module.scss";
import Icons from "@/styles/Icons";

const ServiceCard = ({ props }) => {
    return (
    <Link href={props?.link}>
    <div
      className={Style.servicecard}
      style={{ "--fill-shape": props?.hover_color }}
    >
      <figure className="mb-0">
        {props?.image && (
          <Image
            src={props?.image}
            fill
            alt="img"
            quality={90}
            sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 13vw"
          />
        )}
      </figure>
      
        <div className={Style.servicecard_content}>
          <div className={Style.servicecard_content_wrap}>
            <div className={Style.servicecard_title}>{props?.title}</div>

            <div className={Style.servicecard_icon}>
              <Icons icon={"arrow-right"} size={44} />{" "}
            </div>
          </div>
        </div>
     
    </div>
    </Link>
  );
};

export default ServiceCard;
