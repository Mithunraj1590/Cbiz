"use client"
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";

import Accordion from "react-bootstrap/Accordion";
import Style from "./Menu.module.scss";
import MegaMenu from "./MegaMenu";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { useRef } from "react";
import Icons from "@/styles/Icons";
import { useDimension } from "@/logic/useDimension";

const Navmenu = [
  {
    url:"/",
    text:"About"
  },
  {
    url:"/",
    text:"Business Setup",
    megamenu:[
      {
        url:"/",
        text:"Minland",
      },
      {
        url:"/",
        text:"Freezone",
      },
      {
        url:"/",
        text:"Offshore",
      }
    ]
  },
  {
    url:"/",
    text:"Affiliated Services"
  },
  {
    url:"/",
    text:"Contact"
  }
]

const Menu = ({ props, mega }) => {
  const { width } = useDimension();

  const [headerHieght, setHeaderHieght] = useState(70);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  const headeRef = useRef(null);

  const [scroll, setScroll] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [showActive, setShowActive] = useState(false);
  const [show, setShow] = useState(false);


  const [scrollPosition, setScrollPosition] = useState(0);
  const accordionRef = useRef(null);

  const handleAccordionToggle = () => {
    // Save the current scroll position when the accordion item is toggled
    // setScrollPosition(accordionRef.current.scrollTop);
  };

  useLayoutEffect(() => {
    if (accordionRef) {
      const containerNode = accordionRef.current;

      if (containerNode) {
        containerNode.scrollTop = 0;
      }
    }
  }, [accordionRef, show]);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // useToggleLenis({status : show})
  const handleShow = () => {
    if (show) {
      setTimeout(() => {
        setShow(false);
        document.documentElement.classList.remove("no-scroll");
      }, 100);
    } else {
      setTimeout(() => {
        setShow(true);
        document.documentElement.classList.add("no-scroll");
      }, 100);
    }
  };
  // if (typeof window !== "undefined") {
  //   // document.querySelector('body').classList.add('header-change');
  //   window.addEventListener("scroll", handleScroll);
  // }

  return (
    <header
      className={`${Style.header} ${
        scroll
          ? Style.header_scrolled
          : show
          ? Style.header_scrolled
          : mega
          ? Style.header_scrolled
          : ""
      }`}
      ref={headeRef}
      style={{ "--header-height": headerHieght + "px" }}
    >
      <div className="container">
        <div className={`row align-items-center ${Style.header_wrap}`}>
          <div className={Style.header_left}>
            <Link href="/" title={"Paris Group"}>
              <figure className={`mb-0 ${Style.header_logo}`}>
                {/* <MainLogo /> */}
                <Image
                priority
                 src="/images/CreateBiz.png"
                  fill
                 
                 alt="logo"
                />
              </figure>
            </Link>
          </div>
          <div className={Style.header_right}>
            <div className={Style.header_nav}>
              {/* {width >= 1200 && ( */}
              <ul className={`d-none d-xl-flex ${Style.header_nav_menu}`}>
                {Navmenu.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`${openMegaMenu ? Style.active_menu :""}`}
                      onMouseEnter={() => {
                        item?.megamenu && setOpenMegaMenu(true);
                      }}
                      onMouseLeave={() => {
                        item?.megamenu && setOpenMegaMenu(false);
                      }}
                    >
                      <Link
                        href={item?.url}
                        onMouseEnter={() => {
                          setShowActive(true);
                        }}
                        onClick={() => {
                          item?.megamenu && setOpenMegaMenu(false);
                        }}
                      >
                        {item?.text}
                      </Link>
                      {item?.megamenu && (
                        <div className={`${Style.megamenu}`}>
                          <MegaMenu
                            props={item}
                            scroll={scroll}
                            mega={mega}
                            
                            showActive={showActive}
                            setOpenMegaMenu={setOpenMegaMenu}
                          />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              {/* )} */}

              <div className={Style.header_nav_search}>
                <Link href="/">
                  <button
                    className="btns btns-primary"
                    type="button"
                    aria-label="search"
                   
                  >
                    Get Quote
                  </button>
                </Link>
              </div>

              <button
                className={` ${Style.hamburger} ${show && Style.open}`}
                onClick={handleShow}
                aria-labelledby="hamburger"
                type="button"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {width < 1200 && (
          <div
            className={`${Style.mobile_nav} ${show ? Style.open : ""}`}
            ref={accordionRef}
          >
            <ul>
              {props?.content?.map((item, index) => {
                return (
                  <li style={{ "--anim-delay": `0.0${index}s` }} key={index}>
                    {item?.megamenu ? (
                      <>
                        {
                          <Accordion
                            defaultActiveKey="0"
                            className={Style.mobile_nav_dropdown}
                            onToggle={handleAccordionToggle}
                          >
                            <Accordion.Item eventKey="0">
                              <Accordion.Header
                                className={Style.mobile_nav_dropdown_head}
                              >
                                {item?.text}
                              </Accordion.Header>
                              <Accordion.Body>
                                <ul>
                                  {item?.megamenu?.map((data, index) => {
                                    return (
                                      <li onClick={handleShow}>
                                        <Link href={data?.url}>
                                          {(pathname.slice(1) || "/") ===
                                          data?.url ? (
                                            <strong>{data?.title}</strong>
                                          ) : (
                                            data?.title
                                          )}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        }
                      </>
                    ) : (
                      <Link
                        href={item?.url}
                        onClick={handleShow}
                        className={Style.active}
                      >
                        {(pathname.slice(1) || "/") === item?.url ? (
                          <strong>{item?.text}</strong>
                        ) : (
                          item?.text
                        )}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className={Style.mobile_nav_contact}>
              <div className={Style.contacts}>
                <div className={Style.contacts_title}>
                  {props?.contact?.phone?.text}
                </div>
                <div className={Style.contacts_num}>
                  {props?.contact?.phone?.number &&
                    props?.contact?.phone?.number?.map((item, index) => {
                      return (
                        <Link href={`tel:${item.text}`} key={index}>
                          {item.text}
                        </Link>
                      );
                    })}
                </div>
              </div>
              <div className={Style.contacts}>
                <div className={Style.contacts_title}>
                  {props?.contact?.email?.text}
                </div>
                <Link href={`mailto:${props?.contact?.email?.email_address}`}>
                  {props?.contact?.email?.email_address}
                </Link>
              </div>
              <div className={Style.contacts}>
                {/* <SocialIcon /> */}

                <div className={Style.contacts_title}>
                  {props?.social?.title}
                </div>

                <ul
                  className={`p-0 m-0 mt-3 d-flex flex-wrap align-items-center justify-content-between ${Style.social_links}`}
                >
                  {props?.social?.social?.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item?.url} aria-label="social icons">
                          <Icons
                            icon={item?.title.toLowerCase()}
                            size={23}
                            className="icon-hoverable"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Menu;
