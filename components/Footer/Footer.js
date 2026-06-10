import React from 'react';
import styles from '@/components/Footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
        {new Date().getFullYear()} Kovan Taşıma Rehberi
        </p>
        <div className={styles.links}>
          <span className={styles.sign}>
            Developed by erayokuklu
          </span>
          <div className={styles.social}>
            <a href="https://github.com/Oeray607" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;