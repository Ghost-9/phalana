import React, { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";
import './Home.scss'

import Slider from '../../Components/Slider/Slider.jsx';
import { sliderData } from '../../data/sliderData.js';
import Panel from '../../Components/Panel/Panel.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Card from '../../components/Card/Card.jsx';
import Newsletter from '../../components/Newsletter/Newsletter.jsx';


import experience from '../../assets/photos/resinart/experience.jpg';
import resinArt from '../../assets/photos/resinart/square3.jpg';
import quiz from '../../assets/photos/resinart/quiz.jpg';
import source from '../../assets/videos/register.mp4';

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
      {/* <video autoPlay loop muted playsInline className='video'>
        <source src={source} type='video/mp4' />
     </video> */}
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
              // to='/stores'
              buttonText='CLOSED'
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
            {/* <Register /> */}
        </div>
      </>}
    </div>
  );
};

export default Home



const Register = () => {
  return (
    <div style={{height:'40vh', justifyContent:"center", alignItems:'center'}}>
      <form className='form-group' autoComplete='off'>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Enter your name' required className='form-control' />
        <br />
        <label htmlFor="">Age</label>
        <input type="text" placeholder='Enter your age' required className='form-control' />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Enter your email' required className='form-control' />
        <br />
        <div style={{ display: 'flex', justifyContent: 'flex-start', height:'40px',width:'120px', padding:'10px', margin:'20px' }}>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  )
}

// export default Home