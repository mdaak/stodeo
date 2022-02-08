import Link from 'next/link';
import Footer from '../components/homeComp/Footer';
import FormData from '../components/homeComp/FormData';
import Hero from '../components/homeComp/Hero';
import OurBlog from '../components/homeComp/OurBlogs';
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
      <FormData/>
      <Footer />
      <button><Link href='/responsive'> responsive </Link></button>
    </div>
  )
}
