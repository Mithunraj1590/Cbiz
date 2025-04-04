import React from 'react';
import styles from './TextBlockFull.module.scss';
import Link from 'next/link';

const TextBlockFull = ({ title, description, linkText, linkHref, handleClickOpen }) => {
  return (
    <div className={`${styles.got_block}`}>
      <div className={`${styles.got_block_01}`}>
        <h3 className={`h3 ${styles.title}`}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100">{title}</h3>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300">{description}</p>
      </div>
      <div className={`${styles.got_block_02}`}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300">
        <Link href={linkHref} className="btns btns-primary" onClick={handleClickOpen}>
         
          <span>{linkText}</span>
          <span className="arrow"></span>
        </Link>
      </div>
    </div>
  );
};

export default TextBlockFull;
