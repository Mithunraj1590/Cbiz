"use client"
import Link from "next/link";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Style from "./Footer.module.scss";
import { useDimension } from "@/logic/useDimension";
import Icons from "@/styles/Icons";
import { usePathname } from "next/navigation";


const QuickLinks = [
  {
    title:"About",
    link:"/about"
  },
  {
    title:"Business Setup",
    link:"/about"
  },
  {
    title:"Other Services",
    link:"/about"
  },
 
  {
    title:"Blog",
    link:"/blog"
  },
  {
    title:"Faq",
    link:"/faq"
  },
  {
    title:"Contact",
    link:"/contact"
  }
]

const BusinessSetup = [
  {
    title:"Minland",
    link:"/minland"
  },
  {
    title:"Freezone",
    link:"/freezone"
  },
  {
    title:"Offshore",
    link:"/offshore"
  }
]
const Footer = ({ props }) => {
  const { width } = useDimension();
  const parse = require("html-react-parser");
  const currentYear = new Date().getFullYear();
 const pathname = usePathname()
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleSubmit = async (event) => {
    if (regex.test(email) == false) {
      if (email === "") {
        if (!message && !errorMessage) {
          // to avoid the setting of  success message and error message @ same time
          setErrorMessage(" Please enter an Email");
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
        }
      } else {
        if (!errorMessage) {
          // to avoid the setting of  success message and error message @ same time
          setErrorMessage("Invalid Email");
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
        }
      }
    } else {
      setErrorMessage("");
      setLoading(true);
      setSubmitted(true);
      setMessage("Submitting...");

      axios
        .post(`${process.env.BASE_URL}/newsletter/subscribe`, {
          email: email,
        })
        .then((response) => {
          if (!response.data.message) {
            setErrorMessage("Failed to subscribe to newsletter");
          }

          setTimeout(() => {
            setEmail("");
            setLoading(false);
            setMessage(response.data.message);
          }, 3000);

          setTimeout(() => {
            setSubmitted(false);
            setMessage("");
          }, 6000);
        })
        .catch((error) => {
          setEmail("");
          setErrorMessage("Already registered");
        });
      // .finally(() => {
      //   setTimeout(() => {
      //     setLoading(false);
      //   }, 3000);

      // });
    }
  };

  const handlechangeEmail = (value) => {
    setEmail(value);
    setMessage("");
    setErrorMessage("");
  };

  return (
    <footer className={Style.footer}>
      <div className="container">
        <div className={Style.footer_nav}>
          <div className="row">
            {width < 992 && (
              <div className="col-12 position-relative">
                <div className={Style.newsletter}>
                  <div className={Style.footer_nav_title}>
                    {props?.subscribe?.text}
                  </div>
                  <div className={Style.newsletter_outer}>
                    <Form.Group
                      className={Style.newsletter_input_holder}
                      controlId="emailID"
                    >
                      <Form.Control
                        autoComplete="off"
                        type="email"
                        placeholder="Enter your Email ID"
                        className="rounded-pill"
                        name="email"
                        value={email}
                        disabled={submitted}
                        onChange={(event) =>
                          handlechangeEmail(event.target.value)
                        }
                      />
                    </Form.Group>
                    <div className={Style.newsletter_submit}>
                      <button
                        className={Style.newsletter_submit_btn}
                        type="submit"
                        aria-label="submit"
                        onClick={() => handleSubmit()}
                      >
                        {!loading && <Icons icon="arrow-right" size={20} />}
                        {loading && <span className={Style.loader}></span>}
                      </button>
                    </div>
                  </div>
                </div>
                {message && (
                  <small class="success-msg" style={{ color: "green" }}>
                    {message}
                  </small>
                )}
                {errorMessage && !message && (
                  <small className="error-msg" style={{ color: "red" }}>
                    {errorMessage}
                  </small>
                )}
              </div>
            )}
            <div className="col-lg-5 col-xl-4 col-md-9">
              <div className={Style.footer_nav_title}>
                Quick Links
              </div>
              <ul className={Style.footer_nav_quick_link}>
                {QuickLinks?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        (pathname.slice(1) || "/") === item?.link
                          ? Style.active
                          : ""
                      }
                    >
                      <Link href={item?.link}>{item?.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-2 col-xl-4 col-md-3">
              <div className={Style.footer_nav_title}>
              Business Setup
              </div>
              <ul className={Style.footer_nav_services}>
                {BusinessSetup?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        (pathname.slice(1) || "/") === item?.link
                          ? Style.active
                          : ""
                      }
                    >
                      <Link href={item?.link}>{item?.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-5 col-xl-4">
              {width >= 992 ? (
                <div className={Style.newsletter}>
                  <div className={Style.footer_nav_title}>
                  Subscribe To Our Newsletter
                  </div>
                  <div className={Style.newsletter_outer}>
                    <Form.Group
                      className={Style.newsletter_input_holder}
                      controlId="emailID"
                    >
                      <Form.Control
                        autoComplete="off"
                        type="email"
                        placeholder="Enter your Email ID"
                        className="rounded-pill"
                        value={email}
                        disabled={submitted}
                        onChange={(event) =>
                          handlechangeEmail(event.target.value)
                        }
                      />
                    </Form.Group>
                    <div className={Style.newsletter_submit}>
                      <button
                        type="submit"
                        aria-label="submit"
                        className={Style.newsletter_submit_btn}
                        onClick={() => handleSubmit()}
                      >
                        {!loading && (
                          <span className={`${Style.anim_btn}`}>
                            <span>
                              <Icons icon="arrow-right" size={20} />
                              <Icons icon="arrow-right" size={20} />
                            </span>
                          </span>
                        )}
                        {loading && <span className={Style.loader}></span>}
                      </button>
                    </div>
                  </div>
                  {message && (
                    <small className="success-msg" style={{ color: "green" }}>
                      {message}
                    </small>
                  )}
                  {errorMessage && (
                    <small className="error-msg" style={{ color: "red" }}>
                      {errorMessage}
                    </small>
                  )}
                </div>
              ) : (
                <>
                  <div className={Style.footer_nav_title}>Contact</div>
                  <div className={Style.footer_contact}>
                    <div className={Style.footer_contact_item}>
                      {width >= 768 && (
                        <div className={Style.icon}>
                          <Icons icon={"phone"} size={27} />
                        </div>
                      )}

                      <div className={Style.label}>
                        <div className={Style.contacts_num}>
                          {props?.contact?.phone &&
                            props?.contact?.phone?.map((item, index) => {
                              return (
                                <Link href={`tel:${item.text}`} key={index}>
                                  {item.text}
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                    <div className={Style.footer_contact_item}>
                      {width >= 768 && (
                        <div className={Style.icon}>
                          <Icons icon={"email"} size={25} />
                        </div>
                      )}
                      <div className={Style.label}>
                        <Link
                          href={`mailto:jinto@create-biz.com`}
                        >
                         jinto@create-biz.com
                        </Link>
                      </div>
                    </div>
                    <div className={Style.footer_contact_item}>
                      {width >= 768 && (
                        <div className={Style.icon}>
                          <Icons icon={"location"} size={24} />
                        </div>
                      )}
                      <Link
                        href="https://maps.app.goo.gl/KCDCntSnuZqfzyBx5"
                        target="_blank"
                      >
                        <div className={Style.label}>
                          {props?.contact?.location?.location}
                        </div>
                      </Link>
                    </div>
                  </div>
                </>
              )}

              <div className={Style.footer_connect}>
                <div className={Style.footer_nav_title}>
                Follow Us On
                </div>
                <ul className={Style.footer_smedia}>
                  {props?.social?.social?.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={item?.url}
                          target="_blank"
                          title={item.title}
                        >
                          <Icons
                            icon={item?.title.toLowerCase()}
                            size={25}
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
        </div>
        {width >= 992 && (
          <div className={Style.footer_contact}>
            <div className={Style.footer_contact_item}>
              <div className={Style.icon}>
                <Icons icon={"phone"} size={27} />
              </div>
              {/* {JSON.stringify(props?.contact?.phone)} */}
              <div className={Style.label}>
                <div className={Style.contacts_num}>
                
                        <Link href={`tel:+971555393936`}>
                        +971555393936
                        </Link>
                    
                </div>
              </div>
            </div>
            <div className={Style.footer_contact_item}>
              <div className={Style.icon}>
                <Icons icon={"email"} size={25} />
              </div>
              <div className={Style.label}>
                <Link href={`mailto:jinto@create-biz.com`}>
                jinto@create-biz.com
                </Link>
              </div>
            </div>
            <div className={Style.footer_contact_item}>
              <div className={Style.icon}>
                <Icons icon={"location"} size={24} />
              </div>
              <Link
                href="https://maps.app.goo.gl/KCDCntSnuZqfzyBx5"
                target="_blank"
              >
                <div className={Style.label}>
                xxx x xxx xx xxxxxxxxxx
                </div>
              </Link>
            </div>
          </div>
        )}

        <div className={Style.footer_credits}>
          <div className="row row-cols-1 row-cols-md-auto justify-content-between text-center">
            <div>
              <p>
                {`Copyright ${currentYear}, Createbiz All rights reserved`}
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
