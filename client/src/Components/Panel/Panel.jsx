import React from 'react'
import './Panel.scss'


const Panel = () => {
    return (
        <div className='order'>
            <h1 className='title'>Workshop Highlights</h1>
            <p className='text'>What you will get to experience in this workshop.</p>
            <div className='cards'>
                <div className='card'>
                    <i className='fas fa-solid fa-brush fa-2x'></i>
                    <h1>Tea Coasters Art</h1>
                    <p>Tea coaster set with beautiful resin art!</p>
                </div>
                <div className='card'>
                    <i className='fas fa-solid fa-palette fa-2x'></i>
                    <h1>Mirror Art</h1>
                    <p>Mirror Resin Art</p>
                </div>
                {/* <div className='card'>
                    <i className='fas fa-motorcycle fa-2x'></i>
                    <h1>Material</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus.</p>
                </div> */}
            </div>
        </div>
    );
}

export default Panel