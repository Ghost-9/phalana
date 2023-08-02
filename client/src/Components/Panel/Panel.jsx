import React from 'react'
import './Panel.scss'


const Panel = () => {
    return (
        <div className='order'>
            <h1 className='title'>Ways to Register</h1>
            <p className='text'>Tell us what you want to make in this resin art experience.</p>
            <div className='cards'>
                <div className='card'>
                    <i className='fas fa-car fa-2x'></i>
                    <h1>Tea Coasters Art</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque accusantium unde reprehenderit.</p>
                </div>
                <div className='card'>
                    <i className='fas fa-mug-hot fa-2x'></i>
                    <h1>Mirror Art</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, possimus nemo!</p>
                </div>
                <div className='card'>
                    <i className='fas fa-motorcycle fa-2x'></i>
                    <h1>Material</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, possimus.</p>
                </div>
            </div>
        </div>
    );
}

export default Panel