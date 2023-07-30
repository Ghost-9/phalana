import React from 'react'
import './Home.scss'
import AutoSlider from '../../Components/Slider/Slider'
import Card from '../../Components/Card/Card'

const Home = () => {

    const images = [
    'https://cdn.exoticindia.com/images/products/original/paintings-2019/wsa972.jpg',
    'https://www.skillshare.com/blog/wp-content/uploads/2022/07/resin-flower-coaster-min.jpg',
    'https://www.skillshare.com/blog/wp-content/uploads/2022/07/resin-flower-coaster-min.jpg',
    'https://static.wixstatic.com/media/ce985f_a262961d25884238867a7129c1665260~mv2.jpg/v1/fill/w_1136,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ce985f_a262961d25884238867a7129c1665260~mv2.jpg',
    // Add more image URLs as needed
  ];
  return (
    <div className='home'>
      <AutoSlider images={images} />
      <Card buttonTitle='Register' image='https://cdn.exoticindia.com/images/products/original/paintings-2019/wsa972.jpg' price='$10' pagePath = "/registration"  />
    </div>
  )
}

export default Home