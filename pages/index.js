import Footer from '../components/homeComp/Footer';
import Hero from '../components/homeComp/Hero';
import OurBlog from '../components/homeComp/OurBlogs';
// import OurBlog from '../components/homeComp/OurBlogs';
import Testimonial from '../components/homeComp/Testimonial';
import WhyUs from '../components/homeComp/WhyUs';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero/>
      <OurBlog/>
      <WhyUs/>
      <Testimonial/>
      <Footer />
    </div>
  )
}
