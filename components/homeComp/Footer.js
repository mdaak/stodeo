// import Image from 'next/image';
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerItems}>
          <div className={styles.leftFooterManu}>
            <div>
              <h4>ABOUT ORBIT.</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div>
              <h4>CONNECT</h4>
              <div className={styles.footerLogo}>
                <div>@</div>
                <div>@</div>
                <div>@</div>
                <div>@</div>
                <div>@</div>
              </div>
            </div>
          </div>

          <div className={styles.rightFooterManu}>
            <div>
              <h4>NAVAGATION</h4>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>jQuery</p>
              <p>Bootstrap</p>
              <p>Javascript</p>
            </div>
            <div>
              <h4>SERVICES</h4>
              <p>Web Design</p>
              <p>eCommerce</p>
              <p>WordPress</p>
              <p>Frontend</p>
            </div>
            <div>
              <h4>CONTACT</h4>
              <p>43 Raymouth Rd. Baltemoer, London 3910</p>
              <p>+1(123)-456-7890</p>
              <p>+1(123)-456-7890</p>
              <p>info@mydomain.com</p>
            </div>
          </div>
        </div>

        <div className={styles.footerCopyRight}>
          <p>
            opyright ©2022 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
