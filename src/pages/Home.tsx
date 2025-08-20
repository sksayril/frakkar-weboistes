import React from 'react';
import Hero from '../components/Hero';
// import Leadership from '../components/Leadership';
import Testimonials from '../components/Testimonials';
import ImageCarousel from '../components/ImageCarousel';
import InstitutionCarousel from '../components/InstitutionCarousel';
import LeadershipSpeaks from '../components/LeadershipSpeaks';
import Mission from '../components/Mission';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <ImageCarousel />
      <InstitutionCarousel />
      <LeadershipSpeaks />
      <Mission />
      {/* <Leadership /> */}
      <Testimonials />
    </div>
  );
};

export default Home;