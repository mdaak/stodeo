import styles from '../../styles/home/Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div>
            <h5>WELCOME TO OUR SITE</h5>
            <h1>We have the best solution for your business to grow.</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button>Get started</button>
            </div>
        </div>
    );
};

export default Hero;