import styles from '../../styles/home/OurBlog.module.css';

const OurBlog = () => {
  return (
    <div className={styles.OurBlog}>

     <div className={styles.firstDiv}></div>
      <div className={styles.secondDiv}>
        <div className={styles.secondDivHead}>
          <h5>Our Blog</h5>
          <h1>Recent Blog Posts</h1>
        </div>
        <div className = {styles.secondDivBox}>
          <div className={styles.secondDivCard}>
              <h4>23 Aug 2022</h4>
              <h5>Far far away, behind the word mountains, far from the countries</h5>
              <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className={styles.cardLoge}>
              &rarr;
              </div>
          </div>
          <div className={styles.secondDivCard}>
          <h4>23 Aug 2022</h4>
              <h5>Far far away, behind the word mountains, far from the countries</h5>
              <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className={styles.cardLoge}>
              &rarr;
              </div>
          </div>
          <div className={styles.secondDivCard}>
          <h4>23 Aug 2022</h4>
              <h5>Far far away, behind the word mountains, far from the countries</h5>
              <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className={styles.cardLoge}>
              &rarr;
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurBlog;
