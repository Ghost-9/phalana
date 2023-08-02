import React, { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";
import './Home.scss'

import Slider from '../../Components/Slider/Slider.jsx';
import { sliderData } from '../../data/sliderData.js';
import Panel from '../../Components/Panel/Panel.jsx';
import CustomBanner from '../../components/Banner/Banner.jsx';
import Card from '../../components/Card/Card.jsx';


import coffeePlant from '../../assets/photos/coffee-plant.jpg';
import chStore from '../../assets/photos/ch-store-facade.jpg';
import coffeeQuiz from '../../assets/photos/coffee-beverage.jpg';

const Home = () => {
  const [loading, setLoading] = useState(false);
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
        <Slider slides={sliderData} /></>}
      {
        showTag && <Link to='/contact' className='tag-link' />
      }
      <div className="bottom-container">
        <Panel />
        <CustomBanner
          title="Our Story"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          to='/impact'
          buttonText="Learn More"
          image={coffeePlant}
        />
        <div className="card-wrapper">
          <Card
            title='Visit us'
            subtitle='Enjoy freshly roasted coffee and great food today.'
            to='/stores'
            buttonText='Find a store'
            image={chStore}
          />
          <Card
            title='Coffee Quiz'
            subtitle='How much do you know about this vital brew?'
            to='/quiz'
            buttonText='Take the quiz'
            image={coffeeQuiz}
          />
        </div>

      </div>
    </div>
  );
}

export default Home