import Image from "next/image";
import styles from "../../styles/home/WhyUs.module.css";

const WhyUs = () => {
  return (
    <section className="container">
      <div className={styles.dualDiv}>
        <div className={styles.leftRightDiv}>
          <div className={styles.leftDiv}>
            <div className={styles.leftDivHead}>
              <h5>Why us</h5>
              <h1>Why are we Awesome</h1>
            </div>
            <div className={styles.leftDivPara}>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
            <div>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className={styles.leftDivManu}>
              <div>
                <div className={styles.leftManuOption}>
                  <div className={styles.optonIcon}>@</div>
                  <div>Photograpy</div>
                </div>
                <div className={styles.leftManuOption}>
                  <div className={styles.optonIcon}>@</div>
                  <div>Inspire Photograhy</div>
                </div>
              </div>
              <div>
                <div className={styles.leftManuOption}>
                  <div className={styles.optonIcon}>@</div>
                  <div>Find it here</div>
                </div>
                <div className={styles.leftManuOption}>
                  <div className={styles.optonIcon}>@</div>
                  <div>fly your dreams</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.leftRightDiv}>
          <div className={styles.rightDiv}>
            <Image src="/dualDev.jpg" alt="dualDive" layout="responsive" width="100%" height="70%"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
