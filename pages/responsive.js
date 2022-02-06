import Image from "next/image";
import styles from '../styles/responsive.module.css';


const Responsive = () => {
  return (
    <body className={styles.body}>
      <header id="showcase" className={styles.grid}>
        <div className="bg-image"></div>
        <h1>welcome to acme web solution</h1>
        <p className="paragraph">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s, when an unknown printer
        </p>
        <a href="#section-b" className="btm">
          read more
        </a>
      </header>
      {/* main area */}
      <main id="main">
        {/* section-a */}
        <section id="section-a" className="grid">
          <div className="content-wrap">
            <h2 className="content-title">
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer
            </h2>
          </div>
        </section>
        {/* section-b */}
        <section id="section-b" className="grid">
          <ul>
            <li>
              <div className="card">
                <Image
                  src="/pexels.jpg"
                  alt=" this is a image"
                  height="100%"
                  width="100%"
                  display="block"
                />

                <div className="card-content">
                  <h3 className="card-title"> web developenent</h3>
                  <p>
                    orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry s
                    standard dummy text ever since the 1500s, when an unknown
                    printer
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <Image
                  src="/pexels.jpg"
                  alt=" this is a image"
                  height="100%"
                  width="100%"
                />

                <div className="card-content">
                  <h3 className="card-title"> web developenent</h3>
                  <p>
                    orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry s
                    standard dummy text ever since the 1500s, when an unknown
                    printer
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        {/* section-c */}
        <section id="section-c" className="grid">
          <div className="content-wrap">
            <h2> we handle all of of your degital need</h2>
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>
        </section>
        <section id="section-d" className="grid">
          <div className="box">
            <h2 className="contact-title">Con tact us</h2>
          </div>
          <p>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an unknown printer
          </p>
          <p>conteact@ acmewebsolution.test</p>
        </section>
      </main>
      <footer id='main-footer' className="grid">
          <div>Acme web solutions</div>
          <div>project by<a href="www.google.com"></a></div>
      </footer>
    </body>
  );
};

export default Responsive;
