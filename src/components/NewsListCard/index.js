import Icons from "@/styles/Icons";
import Style from "./NewsListCard.module.scss";
import Link from "next/link";

const NewsListCard = ({ props }) => {
  return (
    <Link href={props?.link}>
      <div className={Style.newscard}>
        <div className={Style.newscard_category}>{props?.title}</div>
        <div
          className={`d-flex justify-content-between align-items-center ${Style.newscard_p}`}
        >
          <h3 className={Style.newscard_title}>{props?.content}</h3>
        </div>


        <span className={`${Style.icon}`}>
          <Icons icon={"arrow-right"} size={16} color={`#000000`}/>
      </span>
      </div>
      
      
    
    </Link>
  );
};

export default NewsListCard;
