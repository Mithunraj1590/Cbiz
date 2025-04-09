import Image from "next/image";
import Link from "next/link";

import Style from "./MegaMenu.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Icons from "@/styles/Icons";

const MegaMenu = ({ props, scroll, mega, showActive, setOpenMegaMenu }) => {
  const [dynmaicItem, setDynmaicItem] = useState(props?.megamenu[0]);
  const [firstTitle, setFirstTitle] = useState(props?.megamenu[0]?.title);

  return (
    <div
      className={`${Style.megamenu} ${scroll ? Style.megamenu_scrolled : ""} ${mega ? Style.megamenu_scrolled : ""
        }`}
    >
      <div className={`${Style.megamenu_row} row flex-nowrap `}>
        <div className="col-auto">
          <div className={Style.megamenu_tabs}>
            {props?.megamenu?.map((item, index) => {
              return (
                <Link href={item?.url} key={index} onClick={() => setOpenMegaMenu(false)}>
                  <div
                    className={`${Style.tab} 
                     ${item[0]
                        && Style.active
                       
                      }
                    `}
                    onMouseEnter={() => {
                      setDynmaicItem(item);
                    }}
                  >
                    <div className={Style.tab_label}>
                      <div className={Style.tab_text}>{item?.title}</div>
                      <p className="mb-0">{item?.description}</p>
                    </div>
                    <div className={Style.tab_arrow}>
                      <Icons icon={"arrow-right"} size={16} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="col-auto">
          <div className={Style.megamenu_results}>
            {dynmaicItem?.title && (
              <div className={`${Style.result} ${Style.show} ${Style.effect}`}>
                <div className={Style.result_head}>
                  <div className={Style.result_title}>
                    {dynmaicItem?.content?.title}
                  </div>
                  <div className={Style.result_content}>
                    {dynmaicItem?.content?.description}
                  </div>
                </div>
                <div className={Style.result_image}>
                  <figure className="mb-0">
                    <Image
                      src={dynmaicItem?.content?.image}
                      fill
                      alt="ss"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
                    />
                  </figure>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
