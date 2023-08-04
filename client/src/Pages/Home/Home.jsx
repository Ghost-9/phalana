import React, { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";
import './Home.scss'

import Slider from '../../Components/Slider/Slider.jsx';
import { sliderData } from '../../data/sliderData.js';
import Panel from '../../Components/Panel/Panel.jsx';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card.jsx';
import Newsletter from '../../components/Newsletter/Newsletter';


import experience from '../../assets/photos/resinart/experience.jpg';
import invite from '../../assets/photos/resinart/invite.png';
import resinArt from '../../assets/photos/resinart/square3.jpg';
import quiz from '../../assets/photos/resinart/quiz.jpg';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showTag, setShowTag] = useState(false);

  // To Show Loading
  useEffect(() => {
    const pageLoader = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(pageLoader);
  }, []);
  


  // To Show Banner
  const onScroll = useCallback(() => {
    if (window.scrollY > 2000) {
      setShowTag(true);
    }
  }, []);
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });


  return (
    <div className="home">
      {loading ? <div className='loading-container'>
        <SyncLoader
          color={'#b69861'}
          loading={loading}
          size={13}
          margin={8}
        />
      </div> : <>
        <Slider slides={sliderData} />
        {
          showTag && <div className='tag-container'>
            <Link
              to='/contact'
              className='tag-link'
            >
              <p>Contact</p>
            </Link>
          </div>
        }
        <div className="bottom-container">
          <Panel />
          <Banner
            title="What We Do"
            subtitle="We are all about experiences♥️. An experience where we engage, participate and allow ourselves to immerse in the creative process."
            subtitleSub="An Experience that enable us to connect with emotions, gain new perspective and foster creativity and imagination."
            to='/impact'
            buttonText="Learn More"
            image={experience}
          />
          {/* <img src={invite} alt="resin art invitation" className='invite'/> */}
          <div className="card-wrapper">
            <Card
              title='Resin Art Experience'
              subtitle='Enjoy hands on experience making resin art this Friendship Day'
              to='/stores'
              buttonText='REGISTER'
              image={resinArt}
            />
            <Card
              title='Resin Art Quiz'
              subtitle='How much do you know about resin art?'
              to='/quiz'
              buttonText='Take the quiz'
              image={quiz}
            />
          </div>
          <Newsletter />
        </div>
      </>}
    </div>
  );
};

export default Home