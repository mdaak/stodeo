// import Swiper core and required modules
import { A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/home/Testimonial.module.css";

const Testimonial = () => {
  const sliderData = [
    {
      id: "1",
      name: "Carl Anderson",
      position: "CEO, Co-Founder",
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
    },
    {
      id: "2",
      name: "Carl Anderson",
      position: "CEO, Co-Founder",
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
    },
    {
      id: "3",
      name: "Carl Anderson",
      position: "CEO, Co-Founder",
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
    },
    {
      id: "4",
      name: "Carl Anderson",
      position: "CEO, Co-Founder",
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
    },
    {
      id: "5",
      name: "Carl Anderson",
      position: "CEO, Co-Founder",
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
    },
    {
      id: "6",
      name: "Carl Anderson",
      position: "CEO, Co-Founder",
      text: "“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”",
    },
  ];

  return (
    <div className={styles.tasimonial}>
      <div className={styles.testHead}>
        Testimonials
        <h1>
           Happy Clients
        </h1>
        </div>
      <Swiper
        // install Swiper modules
        modules={[A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        //   onSlideChange={() => console.log('slide change')}
      >
        {sliderData.map((data, i) => {
          return (
            <SwiperSlide key={i} className={styles.tasimonialCart}>
              <div>
                <p>{data.text}</p>
                <div>
                  <p>{data.name}</p>
                  <p>{data.position}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
